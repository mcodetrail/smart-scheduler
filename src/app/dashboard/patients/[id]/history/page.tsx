"use client";

import { api } from "@/trpc/react";
import { use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PatientHistoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const patientQuery = api.patient.getById.useQuery({ id });
  const completedVisitsQuery =
    api.scheduledVisit.getCompletedByPatient.useQuery({
      patientId: id,
    });

  if (patientQuery.isLoading || completedVisitsQuery.isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="border-b bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Archivio Storico
            </h1>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">Caricamento...</div>
        </main>
      </div>
    );
  }

  if (!patientQuery.data) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="border-b bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Archivio Storico
            </h1>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center text-red-600">Paziente non trovato</div>
        </main>
      </div>
    );
  }

  const patient = patientQuery.data;
  const completedVisits = completedVisitsQuery.data || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Archivio Storico
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                {patient.lastName} {patient.firstName}
              </p>
            </div>
            <Link
              href="/dashboard"
              className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              ← Torna alla Dashboard
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {completedVisits.length === 0 ? (
          <div className="rounded-lg bg-white p-8 text-center shadow">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              Nessuna prestazione completata
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Non ci sono ancora prestazioni effettuate per questo paziente.
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                    >
                      Data
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                    >
                      Tipo di Prestazione
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                    >
                      Note
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                    >
                      Infermiere
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {completedVisits.map((visit) => (
                    <tr
                      key={visit.id}
                      className="transition-colors hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                        {new Date(visit.completedDate).toLocaleDateString(
                          "it-IT",
                          {
                            weekday: "short",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          },
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-800">
                          {visit.assistanceType}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {visit.notes || (
                          <span className="text-gray-400 italic">
                            Nessuna nota
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                        {visit.performedBy?.name || "N/D"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary */}
            <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
              <p className="text-sm text-gray-600">
                Totale prestazioni effettuate:{" "}
                <span className="font-semibold text-gray-900">
                  {completedVisits.length}
                </span>
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
