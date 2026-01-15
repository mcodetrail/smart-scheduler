"use client";

import { api } from "@/trpc/react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const { data: patientsData, isLoading } = api.patient.getAll.useQuery({
    limit: 50,
    search: searchQuery || undefined,
  });

  const deletePatient = api.patient.delete.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  const handleDelete = async (id: string, name: string) => {
    if (
      confirm(
        `Sei sicuro di voler eliminare il paziente ${name}? Questa azione eliminerà anche tutti gli appuntamenti associati.`
      )
    ) {
      deletePatient.mutate({ id });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Dashboard Pazienti
              </h1>
              <p className="text-sm text-gray-600">
                Benvenuto/a, {session?.user?.name}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard/calendar"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                📅 Calendario
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
        {/* Actions Bar */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Cerca per nome, cognome o codice fiscale..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <Link
            href="/dashboard/patients/new"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-indigo-700"
          >
            + Nuovo Paziente
          </Link>
        </div>

        {/* Patients List */}
        {isLoading ? (
          <div className="rounded-lg bg-white p-8 text-center shadow">
            <p className="text-gray-600">Caricamento pazienti...</p>
          </div>
        ) : !patientsData?.patients.length ? (
          <div className="rounded-lg bg-white p-8 text-center shadow">
            <p className="text-gray-600">
              {searchQuery
                ? "Nessun paziente trovato con questi criteri"
                : "Nessun paziente presente. Aggiungi il primo paziente!"}
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Paziente
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Codice Fiscale
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Contatti
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Appuntamenti
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Creato da
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                    Azioni
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {patientsData.patients.map((patient) => (
                  <tr key={patient.id} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {patient.firstName} {patient.lastName}
                      </div>
                      {patient.city && (
                        <div className="text-sm text-gray-500">
                          {patient.city}
                        </div>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {patient.fiscalCode || "-"}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {patient.phone || "-"}
                      </div>
                      {patient.email && (
                        <div className="text-sm text-gray-500">
                          {patient.email}
                        </div>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="inline-flex rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
                        {patient._count.appointments}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {patient.createdBy.name}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <Link
                        href={`/dashboard/patients/${patient.id}`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Dettagli
                      </Link>
                      <span className="mx-2 text-gray-300">|</span>
                      <Link
                        href={`/dashboard/patients/${patient.id}/edit`}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        Modifica
                      </Link>
                      <span className="mx-2 text-gray-300">|</span>
                      <button
                        onClick={() =>
                          handleDelete(
                            patient.id,
                            `${patient.firstName} ${patient.lastName}`
                          )
                        }
                        className="text-red-600 hover:text-red-900"
                        disabled={deletePatient.isPending}
                      >
                        Elimina
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
