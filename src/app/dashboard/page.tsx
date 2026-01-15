"use client";

import { api } from "@/trpc/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signOut } from "next-auth/react";

type Tab = "today" | "tomorrow" | "week";

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("today");

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
    }
  };

  const currentData = getCurrentData();

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
          </nav>
        </div>

        {/* Patient Table */}
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
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Note
                  </th>
                  {activeTab === "week" && (
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
                    <td className="max-w-xs truncate px-6 py-4 text-sm text-gray-500">
                      {patient.notes || "-"}
                    </td>
                    {activeTab === "week" && (
                      <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                        {patient.nextVisitDate
                          ? new Date(patient.nextVisitDate).toLocaleDateString(
                              "it-IT",
                            )
                          : "-"}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}
