"use client";

import { api } from "@/trpc/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewAppointmentPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPatient, setSelectedPatient] = useState<{
    id: string;
    firstName: string;
    lastName: string;
  } | null>(null);
  const [formData, setFormData] = useState({
    scheduledDate: "",
    scheduledTime: "",
    duration: "60",
    notes: "",
  });

  const { data: searchResults } = api.patient.search.useQuery(
    { query: searchQuery },
    { enabled: searchQuery.length > 2 }
  );

  const createAppointment = api.appointment.create.useMutation({
    onSuccess: () => {
      router.push("/dashboard/calendar");
      router.refresh();
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedPatient) {
      alert("Seleziona un paziente");
      return;
    }

    const dateTime = new Date(
      `${formData.scheduledDate}T${formData.scheduledTime}`
    );

    createAppointment.mutate({
      patientId: selectedPatient.id,
      scheduledDate: dateTime,
      duration: parseInt(formData.duration),
      notes: formData.notes || undefined,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Nuovo Appuntamento
            </h1>
            <Link
              href="/dashboard/calendar"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              ← Torna al calendario
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-lg bg-white p-6 shadow"
        >
          {createAppointment.error && (
            <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800">
              {createAppointment.error.message}
            </div>
          )}

          {/* Patient Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Paziente *
            </label>
            {!selectedPatient ? (
              <div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cerca paziente per nome o codice fiscale..."
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {searchResults && searchResults.length > 0 && (
                  <div className="mt-2 max-h-48 overflow-y-auto rounded-lg border border-gray-200">
                    {searchResults.map((patient) => (
                      <button
                        key={patient.id}
                        type="button"
                        onClick={() => {
                          setSelectedPatient(patient);
                          setSearchQuery("");
                        }}
                        className="block w-full px-4 py-2 text-left hover:bg-gray-50"
                      >
                        <div className="font-medium text-gray-900">
                          {patient.firstName} {patient.lastName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {patient.fiscalCode} - {patient.phone}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
                {searchQuery.length > 2 &&
                  searchResults &&
                  searchResults.length === 0 && (
                    <p className="mt-2 text-sm text-gray-600">
                      Nessun paziente trovato
                    </p>
                  )}
              </div>
            ) : (
              <div className="mt-2 flex items-center justify-between rounded-lg border border-green-200 bg-green-50 p-3">
                <div>
                  <div className="font-medium text-gray-900">
                    {selectedPatient.firstName} {selectedPatient.lastName}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPatient(null)}
                  className="text-sm text-red-600 hover:text-red-800"
                >
                  Cambia
                </button>
              </div>
            )}
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="scheduledDate"
                className="block text-sm font-medium text-gray-700"
              >
                Data *
              </label>
              <input
                id="scheduledDate"
                name="scheduledDate"
                type="date"
                required
                value={formData.scheduledDate}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                disabled={createAppointment.isPending}
              />
            </div>

            <div>
              <label
                htmlFor="scheduledTime"
                className="block text-sm font-medium text-gray-700"
              >
                Ora *
              </label>
              <input
                id="scheduledTime"
                name="scheduledTime"
                type="time"
                required
                value={formData.scheduledTime}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                disabled={createAppointment.isPending}
              />
            </div>
          </div>

          {/* Duration */}
          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-gray-700"
            >
              Durata (minuti) *
            </label>
            <select
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={createAppointment.isPending}
            >
              <option value="15">15 minuti</option>
              <option value="30">30 minuti</option>
              <option value="45">45 minuti</option>
              <option value="60">1 ora</option>
              <option value="90">1 ora e 30 minuti</option>
              <option value="120">2 ore</option>
            </select>
          </div>

          {/* Notes */}
          <div>
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-700"
            >
              Note
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              value={formData.notes}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Note sull'appuntamento..."
              disabled={createAppointment.isPending}
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4">
            <Link
              href="/dashboard/calendar"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Annulla
            </Link>
            <button
              type="submit"
              disabled={createAppointment.isPending || !selectedPatient}
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {createAppointment.isPending
                ? "Salvataggio..."
                : "Crea Appuntamento"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
