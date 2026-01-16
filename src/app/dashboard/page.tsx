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

  const todayVisits = api.scheduledVisit.getByDateRange.useQuery({
    startDate: today,
    endDate: new Date(today.getTime() + 24 * 60 * 60 * 1000 - 1),
  });

  const tomorrowVisits = api.scheduledVisit.getByDateRange.useQuery({
    startDate: tomorrow,
    endDate: endOfTomorrow,
  });

  const weekVisits = api.scheduledVisit.getByDateRange.useQuery({
    startDate: today,
    endDate: weekFromNow,
  });

  const searchPatients = api.patient.search.useQuery(
    { query: searchQuery },
    { enabled: showSearchResults && searchQuery.length > 0 },
  );

  const dateSearchVisits = api.scheduledVisit.getByDateRange.useQuery(
    {
      startDate: searchDate ? new Date(searchDate) : today,
      endDate: searchDate
        ? new Date(new Date(searchDate).getTime() + 24 * 60 * 60 * 1000 - 1)
        : today,
    },
    { enabled: activeTab === "search" && searchDate.length > 0 },
  );

  const handleRowClick = (patientId: string) => {
    router.push(`/dashboard/patients/${patientId}`);
  };

  const getCurrentData = () => {
    switch (activeTab) {
      case "today":
        return todayVisits;
      case "tomorrow":
        return tomorrowVisits;
      case "week":
        return weekVisits;
      case "search":
        if (searchDate) {
          return dateSearchVisits;
        } else if (showSearchResults && searchQuery) {
          return searchPatients;
        }
        return { data: [], isLoading: false, error: null };
    }
  };

  const currentData = getCurrentData();

  // Helper: format a Date (or date string) to local YYYY-MM-DD key
  const formatDateKey = (value: Date | string) => {
    const d = new Date(value);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
      d.getDate(),
    ).padStart(2, "0")}`;
  };

  // Group scheduled visits by date
  const groupVisitsByDate = (
    visits: any[] | undefined,
  ): Record<string, any[]> => {
    if (!visits) return {};

    const groups: Record<string, any[]> = {};

    visits.forEach((visit) => {
      const dateKey = formatDateKey(visit.nextVisitDate);
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(visit);
    });

    return groups;
  };

  // Get grouped visits based on active tab
  const getGroupedVisits = () => {
    if (activeTab === "week" && weekVisits.data) {
      return groupVisitsByDate(weekVisits.data);
    } else if (activeTab === "search" && searchDate && dateSearchVisits.data) {
      return groupVisitsByDate(dateSearchVisits.data);
    }
    return {};
  };

  const visitsByDate = getGroupedVisits();

  // Render visit card component
  const renderVisitCard = (visit: any) => (
    <div key={visit.id} className="p-6 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div
          className="flex-1 cursor-pointer"
          onClick={() => handleRowClick(visit.patient.id)}
        >
          <div className="flex flex-wrap items-center gap-3">
            <h4 className="text-lg font-semibold text-gray-900">
              {visit.patient.lastName} {visit.patient.firstName}
            </h4>
            <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-800">
              {visit.assistanceType}
            </span>
            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm text-gray-700">
              {visit.patient.assignedTo?.name || "Non assegnato"}
            </span>
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex items-center gap-2 text-sm">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium text-gray-900">
                {new Date(visit.nextVisitDate).toLocaleDateString("it-IT", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            {visit.visitFrequency && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
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
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <span>Cadenza: ogni {visit.visitFrequency} giorni</span>
              </div>
            )}
            {visit.patient.address && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
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
                <span>
                  {visit.patient.address}
                  {visit.patient.houseNumber && ` ${visit.patient.houseNumber}`}
                  {visit.patient.city && `, ${visit.patient.city}`}
                </span>
              </div>
            )}
            <div className="flex items-center gap-2 text-sm text-gray-600">
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
              <span>{visit.patient.phone1}</span>
            </div>
          </div>
          {visit.notes && (
            <div className="mt-3 rounded-md bg-yellow-50 px-3 py-2 text-sm text-gray-700">
              <span className="font-medium">Note prestazione:</span>{" "}
              {visit.notes}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/dashboard/patients/${visit.patient.id}/history`);
            }}
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium whitespace-nowrap text-gray-700 transition-colors hover:bg-gray-200"
          >
            📋 Archivio Storico
          </button>
        </div>
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

    const hasVisits = Object.keys(visitsByDate).length > 0;

    if (!hasVisits) {
      return (
        <div className="rounded-lg bg-white p-8 text-center shadow">
          <div className="text-gray-500">{emptyMessage}</div>
        </div>
      );
    }

    return Object.entries(visitsByDate)
      .sort(([dateA], [dateB]) => dateA.localeCompare(dateB))
      .map(([dateKey, visits]) => {
        // build a Date from the local YYYY-MM-DD key
        const [y, m, d] = dateKey.split("-").map((s) => parseInt(s, 10));
        const date = new Date(y!, m! - 1, d);
        const isToday = dateKey === formatDateKey(today);
        const isTomorrow = dateKey === formatDateKey(tomorrow);

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
                  {visits.length} {visits.length === 1 ? "visita" : "visite"}
                </span>
              </h3>
            </div>
            <div className="divide-y divide-gray-200">
              {visits.map(renderVisitCard)}
            </div>
          </div>
        );
      });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-linear-to-r from-indigo-600 to-indigo-700 shadow-lg">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">
              Visite da Effettuare
            </h1>
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard/patients/new"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                + Nuovo Paziente
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/auth/signin" })}
                className="rounded-lg border border-gray-300 bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white transition-all cursor-pointer"
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
              {todayVisits.data && (
                <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs">
                  {todayVisits.data.length}
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
              {tomorrowVisits.data && (
                <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs">
                  {tomorrowVisits.data.length}
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
              {weekVisits.data && (
                <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs">
                  {weekVisits.data.length}
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
              weekVisits.isLoading,
              weekVisits.error,
              weekVisits.data,
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
        ) : activeTab === "search" && showSearchResults ? (
          /* Patient search results */
          <div className="overflow-hidden rounded-lg bg-white shadow">
            {currentData.isLoading ? (
              <div className="p-8 text-center">
                <div className="text-gray-500">Caricamento...</div>
              </div>
            ) : !currentData.data || currentData.data.length === 0 ? (
              <div className="p-8 text-center">
                <div className="text-gray-500">Nessun paziente trovato</div>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {currentData.data.map((patient: any) => (
                  <div
                    key={patient.id}
                    onClick={() => handleRowClick(patient.id)}
                    className="cursor-pointer p-6 hover:bg-gray-50"
                  >
                    <div className="flex justify-between">
                      <div>
                        <h4 className="text-lg font-semibold">
                          {patient.lastName} {patient.firstName}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {patient.phone1}
                        </p>
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
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Card view for today/tomorrow visits */
          <div className="overflow-hidden rounded-lg bg-white shadow">
            {currentData.isLoading ? (
              <div className="p-8 text-center">
                <div className="text-gray-500">Caricamento...</div>
              </div>
            ) : !currentData.data || currentData.data.length === 0 ? (
              <div className="p-8 text-center">
                <div className="text-gray-500">Nessuna visita programmata</div>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {currentData.data.map(renderVisitCard)}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
