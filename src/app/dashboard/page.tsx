"use client";

import { api } from "@/trpc/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signOut } from "next-auth/react";

type Tab = "today" | "tomorrow" | "week" | "search";

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("today");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const endOfTomorrow = new Date(tomorrow);
  endOfTomorrow.setHours(23, 59, 59, 999);

  const weekFromNow = new Date(today);
  weekFromNow.setDate(weekFromNow.getDate() + 7);

  const todayPatients = api.patient.getByVisitDate.useQuery({
    startDate: today,
    endDate: new Date(today.getTime() + 24 * 60 * 60 * 1000 - 1),
  });

  const tomorrowPatients = api.patient.getByVisitDate.useQuery({
    startDate: tomorrow,
    endDate: endOfTomorrow,
  });

  const weekPatients = api.patient.getByVisitDate.useQuery({
    startDate: today,
    endDate: weekFromNow,
  });

  const searchPatients = api.patient.search.useQuery(
    { query: searchQuery },
    { enabled: showSearchResults && searchQuery.length > 0 },
  );

  // For date search, get ALL patients to calculate visits based on weeklyPattern
  // weeklyPattern is recurring forever, so we need all patients regardless of nextVisitDate
  const allPatientsForDateSearch = api.patient.getAll.useQuery(
    { limit: 100 },
    { enabled: activeTab === "search" && searchDate.length > 0 },
  );

  const handleRowClick = (patientId: string) => {
    router.push(`/dashboard/patients/${patientId}`);
  };

  const getCurrentData = () => {
    switch (activeTab) {
      case "today":
        return todayPatients;
      case "tomorrow":
        return tomorrowPatients;
      case "week":
        return weekPatients;
      case "search":
        if (searchDate) {
          // For date search, extract patients array from paginated response
          return {
            data: allPatientsForDateSearch.data?.patients ?? [],
            isLoading: allPatientsForDateSearch.isLoading,
            error: allPatientsForDateSearch.error,
          };
        } else if (showSearchResults && searchQuery) {
          return searchPatients;
        }
        return { data: [], isLoading: false, error: null };
    }
  };

  const currentData = getCurrentData();

  // Calculate future visit occurrences based on weeklyPattern
  const calculateFutureVisits = (
    patient: any,
    startDate: Date,
    endDate: Date,
  ) => {
    const visits: Array<{ date: Date; patient: any }> = [];

    if (!patient.nextVisitDate) return visits;

    const visitStartDate = new Date(patient.nextVisitDate);

    // If weeklyPattern is set, calculate based on weekdays
    if (patient.weeklyPattern) {
      const days = patient.weeklyPattern
        .split(",")
        .map((d: string) => parseInt(d));
      const currentDate = new Date(visitStartDate);

      // Go back to the start of the week to not miss any occurrence
      currentDate.setDate(currentDate.getDate() - 7);

      while (currentDate <= endDate) {
        const dayOfWeek = currentDate.getDay();
        if (days.includes(dayOfWeek) && currentDate >= startDate) {
          visits.push({ date: new Date(currentDate), patient });
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }
    // Otherwise, just add the single nextVisitDate
    else if (visitStartDate >= startDate && visitStartDate <= endDate) {
      visits.push({ date: new Date(visitStartDate), patient });
    }

    return visits;
  };

  // Group patients by date with calculated future visits
  const groupPatientsByDate = (
    patients: any[] | undefined,
    startDate: Date,
    endDate: Date,
  ): Record<string, any[]> => {
    if (!patients) return {};

    const groups: Record<string, any[]> = {};

    patients.forEach((patient) => {
      if (patient.nextVisitDate) {
        // Calculate all future visits for this patient
        const futureVisits = calculateFutureVisits(patient, startDate, endDate);

        // Add each calculated visit to the appropriate date group
        futureVisits.forEach((visit) => {
          const dateKey = visit.date.toISOString().split("T")[0]!;
          if (!groups[dateKey]) {
            groups[dateKey] = [];
          }
          groups[dateKey].push(patient);
        });
      }
    });

    return groups;
  };

  // Get grouped patients based on active tab
  const getGroupedPatients = () => {
    if (activeTab === "week" && weekPatients.data) {
      const weekEnd = new Date(today);
      weekEnd.setDate(weekEnd.getDate() + 7);
      return groupPatientsByDate(weekPatients.data, today, weekEnd);
    } else if (
      activeTab === "search" &&
      searchDate &&
      allPatientsForDateSearch.data?.patients
    ) {
      const searchDateStart = new Date(searchDate);
      searchDateStart.setHours(0, 0, 0, 0);
      const searchDateEnd = new Date(searchDate);
      searchDateEnd.setHours(23, 59, 59, 999);
      return groupPatientsByDate(
        allPatientsForDateSearch.data.patients,
        searchDateStart,
        searchDateEnd,
      );
    }
    return {};
  };

  const patientsByDate = getGroupedPatients();

  // Render patient card component
  const renderPatientCard = (patient: any) => (
    <div
      key={patient.id}
      onClick={() => handleRowClick(patient.id)}
      className="cursor-pointer p-6 transition-colors hover:bg-gray-50"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h4 className="text-lg font-semibold text-gray-900">
              {patient.lastName} {patient.firstName}
            </h4>
            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm text-gray-700">
              {patient.assignedTo?.name || "Non assegnato"}
            </span>
          </div>
          <div className="mt-2 grid grid-cols-1 gap-2 text-sm text-gray-600 sm:grid-cols-2">
            {patient.address && (
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{patient.address}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>{patient.phone1}</span>
            </div>
          </div>
          {patient.notes && (
            <div className="mt-2 rounded-md bg-yellow-50 px-3 py-2 text-sm text-gray-700">
              <span className="font-medium">Note:</span> {patient.notes}
            </div>
          )}
          {patient.lastAssignedBy && patient.lastAssignedAt && (
            <div className="mt-2 text-xs text-gray-500">
              Assegnato da {patient.lastAssignedBy.name} il{" "}
              {new Date(patient.lastAssignedAt).toLocaleDateString("it-IT", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          )}
        </div>
        <svg
          className="h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );

  // Render grouped by date view
  const renderGroupedByDateView = (
    isLoading: boolean,
    error: any,
    data: any[] | undefined,
    emptyMessage: string,
  ) => {
    if (isLoading) {
      return (
        <div className="rounded-lg bg-white p-8 text-center shadow">
          <div className="text-gray-500">Caricamento...</div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="rounded-lg bg-white p-8 text-center shadow">
          <div className="text-red-500">Errore nel caricamento dei dati</div>
        </div>
      );
    }

    if (!data || data.length === 0) {
      return (
        <div className="rounded-lg bg-white p-8 text-center shadow">
          <div className="text-gray-500">{emptyMessage}</div>
        </div>
      );
    }

    const hasVisits = Object.keys(patientsByDate).length > 0;

    if (!hasVisits) {
      return (
        <div className="rounded-lg bg-white p-8 text-center shadow">
          <div className="text-gray-500">{emptyMessage}</div>
        </div>
      );
    }

    return Object.entries(patientsByDate)
      .sort(([dateA], [dateB]) => dateA.localeCompare(dateB))
      .map(([dateKey, patients]) => {
        const date = new Date(dateKey);
        const isToday = dateKey === today.toISOString().split("T")[0];
        const isTomorrow = dateKey === tomorrow.toISOString().split("T")[0];

        let dateLabel = date.toLocaleDateString("it-IT", {
          weekday: "long",
          day: "numeric",
          month: "long",
        });

        if (isToday) dateLabel = `Oggi - ${dateLabel}`;
        else if (isTomorrow) dateLabel = `Domani - ${dateLabel}`;

        return (
          <div
            key={dateKey}
            className="overflow-hidden rounded-lg bg-white shadow"
          >
            <div className="bg-indigo-600 px-6 py-3">
              <h3 className="text-lg font-semibold text-white capitalize">
                {dateLabel}
                <span className="ml-3 inline-flex items-center rounded-full bg-indigo-500 px-3 py-0.5 text-sm font-medium text-white">
                  {patients.length}{" "}
                  {patients.length === 1 ? "visita" : "visite"}
                </span>
              </h3>
            </div>
            <div className="divide-y divide-gray-200">
              {patients.map(renderPatientCard)}
            </div>
          </div>
        );
      });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Visite da Effettuare
            </h1>
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard/patients/new"
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
              >
                + Nuovo Paziente
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/auth/signin" })}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Esci
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("today")}
              className={`border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap ${
                activeTab === "today"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Oggi
              {todayPatients.data && (
                <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs">
                  {todayPatients.data.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab("tomorrow")}
              className={`border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap ${
                activeTab === "tomorrow"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Domani
              {tomorrowPatients.data && (
                <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs">
                  {tomorrowPatients.data.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab("week")}
              className={`border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap ${
                activeTab === "week"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Prossimi 7 Giorni
              {weekPatients.data && (
                <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs">
                  {weekPatients.data.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab("search")}
              className={`border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap ${
                activeTab === "search"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Ricerca
            </button>
          </nav>
        </div>

        {/* Search Form */}
        {activeTab === "search" && (
          <div className="mb-6 rounded-lg bg-white p-6 shadow">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Patient Search */}
              <div>
                <h3 className="mb-3 text-sm font-semibold text-gray-900">
                  Ricerca Paziente
                </h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setSearchDate("");
                    }}
                    placeholder="Nome, Cognome, Codice Fiscale o Telefono"
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                  <button
                    onClick={() => setShowSearchResults(true)}
                    disabled={!searchQuery}
                    className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Cerca
                  </button>
                </div>
              </div>

              {/* Date Search */}
              <div>
                <h3 className="mb-3 text-sm font-semibold text-gray-900">
                  Visite per Data
                </h3>
                <div className="space-y-3">
                  <input
                    type="date"
                    value={searchDate}
                    onChange={(e) => {
                      setSearchDate(e.target.value);
                      setSearchQuery("");
                      setShowSearchResults(false);
                    }}
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                  <p className="text-xs text-gray-500">
                    Seleziona una data per vedere le visite programmate
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Patient Views */}
        {activeTab === "week" ? (
          /* Grouped by date view for week tab */
          <div className="space-y-6">
            {renderGroupedByDateView(
              weekPatients.isLoading,
              weekPatients.error,
              weekPatients.data,
              "Nessuna visita programmata nei prossimi 7 giorni",
            )}
          </div>
        ) : activeTab === "search" && searchDate ? (
          /* Grouped by date view for date search */
          <div className="space-y-6">
            {renderGroupedByDateView(
              currentData.isLoading,
              currentData.error,
              currentData.data,
              "Nessuna visita programmata per questa data",
            )}
          </div>
        ) : (
          /* Standard table view for other tabs */
          <div className="overflow-hidden rounded-lg bg-white shadow">
            {currentData.isLoading ? (
              <div className="p-8 text-center">
                <div className="text-gray-500">Caricamento...</div>
              </div>
            ) : currentData.error ? (
              <div className="p-8 text-center">
                <div className="text-red-500">
                  Errore nel caricamento dei dati
                </div>
              </div>
            ) : !currentData.data || currentData.data.length === 0 ? (
              <div className="p-8 text-center">
                <div className="text-gray-500">Nessuna visita programmata</div>
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                      Cognome
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                      Nome
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                      Via
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                      Telefono
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                      Assegnato a
                    </th>
                    {activeTab !== "search" && (
                      <>
                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                          Cambiato da
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                          Note
                        </th>
                      </>
                    )}
                    {(activeTab as Tab) === "week" && (
                      <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                        Data Visita
                      </th>
                    )}
                    {activeTab === "search" && searchDate && (
                      <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                        Data Visita
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {currentData.data.map((patient) => (
                    <tr
                      key={patient.id}
                      onClick={() => handleRowClick(patient.id)}
                      className="cursor-pointer hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                        {patient.lastName}
                      </td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                        {patient.firstName}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {patient.address || "-"}
                      </td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                        {patient.phone1}
                      </td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                        {patient.assignedTo?.name || "-"}
                      </td>
                      {activeTab !== "search" && (
                        <>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {"lastAssignedBy" in patient &&
                            patient.lastAssignedBy ? (
                              <div className="flex flex-col">
                                <span>{patient.lastAssignedBy.name}</span>
                                {"lastAssignedAt" in patient &&
                                  patient.lastAssignedAt && (
                                    <span className="text-xs text-gray-400">
                                      {new Date(
                                        patient.lastAssignedAt,
                                      ).toLocaleDateString("it-IT", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                      })}
                                    </span>
                                  )}
                              </div>
                            ) : (
                              "-"
                            )}
                          </td>
                          <td className="max-w-xs truncate px-6 py-4 text-sm text-gray-500">
                            {"notes" in patient ? patient.notes || "-" : "-"}
                          </td>
                        </>
                      )}
                      {(activeTab as Tab) === "week" && (
                        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                          {patient.nextVisitDate
                            ? new Date(
                                patient.nextVisitDate,
                              ).toLocaleDateString("it-IT")
                            : "-"}
                        </td>
                      )}
                      {activeTab === "search" && searchDate && (
                        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                          {patient.nextVisitDate
                            ? new Date(
                                patient.nextVisitDate,
                              ).toLocaleDateString("it-IT")
                            : "-"}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
