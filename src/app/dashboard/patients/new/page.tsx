"use client";

import { api } from "@/trpc/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import type { AssistanceType } from "generated/prisma";

type ScheduledVisitInput = {
  assistanceType: AssistanceType | "";
  nextVisitDate: string;
  visitFrequency: string;
  notes: string;
  assignedToId: string;
};

export default function NewPatientPage() {
  const router = useRouter();
  const { data: session } = useSession();

  const nursesQuery = api.auth.getAllNurses.useQuery();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    fiscalCode: "",
    address: "",
    houseNumber: "",
    city: "",
    postalCode: "",
    phone1: "",
    phone2: "",
    exemptionCode: "",
    assignedToId: session?.user?.id || "",
    notes: "",
  });

  const [scheduledVisits, setScheduledVisits] = useState<ScheduledVisitInput[]>(
    [],
  );

  const createPatient = api.patient.create.useMutation({
    onSuccess: async (patient) => {
      // Create scheduled visits for the patient
      if (scheduledVisits.length > 0) {
        for (const visit of scheduledVisits) {
          if (visit.assistanceType && visit.nextVisitDate) {
            await createScheduledVisit.mutateAsync({
              patientId: patient.id,
              assistanceType: visit.assistanceType,
              nextVisitDate: new Date(visit.nextVisitDate),
              visitFrequency: visit.visitFrequency
                ? parseInt(visit.visitFrequency)
                : null,
              notes: visit.notes || null,
              assignedToId: visit.assignedToId || null,
            });
          }
        }
      }
      router.push("/dashboard");
      router.refresh();
    },
    onError: (error) => {
      alert(`Errore: ${error.message}`);
    },
  });

  const createScheduledVisit = api.scheduledVisit.create.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      alert("Nome e cognome sono obbligatori");
      return;
    }

    if (!formData.phone1.trim()) {
      alert("Telefono 1 è obbligatorio");
      return;
    }

    if (!formData.exemptionCode.trim()) {
      alert("Codice esenzione è obbligatorio");
      return;
    }

    if (
      formData.fiscalCode.trim() &&
      formData.fiscalCode.trim().length !== 16
    ) {
      alert("Il codice fiscale deve essere di 16 caratteri");
      return;
    }

    createPatient.mutate({
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      dateOfBirth: formData.dateOfBirth
        ? new Date(formData.dateOfBirth)
        : undefined,
      fiscalCode: formData.fiscalCode.trim() || undefined,
      address: formData.address.trim() || undefined,
      houseNumber: formData.houseNumber.trim() || undefined,
      city: formData.city.trim() || undefined,
      postalCode: formData.postalCode.trim() || undefined,
      phone1: formData.phone1.trim(),
      phone2: formData.phone2.trim() || undefined,
      exemptionCode: formData.exemptionCode.trim(),
      assignedToId: formData.assignedToId || undefined,
      notes: formData.notes.trim() || undefined,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddVisit = () => {
    setScheduledVisits([
      ...scheduledVisits,
      {
        assistanceType: "",
        nextVisitDate: "",
        visitFrequency: "",
        notes: "",
        assignedToId: session?.user?.id || "",
      },
    ]);
  };

  const handleRemoveVisit = (index: number) => {
    setScheduledVisits(scheduledVisits.filter((_, i) => i !== index));
  };

  const handleVisitChange = (
    index: number,
    field: keyof ScheduledVisitInput,
    value: string,
  ) => {
    const updated = [...scheduledVisits];
    updated[index]![field] = value as any;
    setScheduledVisits(updated);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-gradient-to-r from-indigo-600 to-indigo-700 shadow-lg">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Nuovo Paziente</h1>
              <p className="mt-1 text-sm text-indigo-100">
                Aggiungi un nuovo paziente al sistema
              </p>
            </div>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Dashboard
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-lg bg-white p-6 shadow"
        >
          {createPatient.error && (
            <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800">
              {createPatient.error.message}
            </div>
          )}

          {/* Personal Information */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Dati Anagrafici
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cognome *
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  disabled={createPatient.isPending}
                />
              </div>
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nome *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  disabled={createPatient.isPending}
                />
              </div>

              <div>
                <label
                  htmlFor="dateOfBirth"
                  className="block text-sm font-medium text-gray-700"
                >
                  Data di Nascita
                </label>
                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  max={new Date().toISOString().split("T")[0]}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  disabled={createPatient.isPending}
                />
              </div>

              <div>
                <label
                  htmlFor="fiscalCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Codice Fiscale
                </label>
                <input
                  id="fiscalCode"
                  name="fiscalCode"
                  type="text"
                  maxLength={16}
                  value={formData.fiscalCode}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 uppercase shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  disabled={createPatient.isPending}
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Contatti
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="phone1"
                  className="block text-sm font-medium text-gray-700"
                >
                  Telefono 1 *
                </label>
                <input
                  id="phone1"
                  name="phone1"
                  type="tel"
                  required
                  value={formData.phone1}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  disabled={createPatient.isPending}
                />
              </div>

              <div>
                <label
                  htmlFor="phone2"
                  className="block text-sm font-medium text-gray-700"
                >
                  Telefono 2
                </label>
                <input
                  id="phone2"
                  name="phone2"
                  type="tel"
                  value={formData.phone2}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  disabled={createPatient.isPending}
                />
              </div>

              <div>
                <label
                  htmlFor="exemptionCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Codice Esenzione *
                </label>
                <input
                  id="exemptionCode"
                  name="exemptionCode"
                  type="text"
                  required
                  value={formData.exemptionCode}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  disabled={createPatient.isPending}
                />
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Indirizzo
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Via
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  disabled={createPatient.isPending}
                />
              </div>

              <div>
                <label
                  htmlFor="houseNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Civico
                </label>
                <input
                  id="houseNumber"
                  name="houseNumber"
                  type="text"
                  value={formData.houseNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  disabled={createPatient.isPending}
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  Città
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  disabled={createPatient.isPending}
                />
              </div>

              <div>
                <label
                  htmlFor="postalCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  CAP
                </label>
                <input
                  id="postalCode"
                  name="postalCode"
                  type="text"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  disabled={createPatient.isPending}
                />
              </div>
            </div>
          </div>

          {/* Patient Notes */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Note sul Paziente
            </h2>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              value={formData.notes}
              onChange={handleChange}
              placeholder="Note generali sul paziente..."
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              disabled={createPatient.isPending}
            />
          </div>

          {/* Scheduled Visits */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Prestazioni Pianificate
              </h2>
              <button
                type="button"
                onClick={handleAddVisit}
                className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                disabled={createPatient.isPending}
              >
                + Aggiungi
              </button>
            </div>
            {scheduledVisits.map((visit, index) => (
              <div key={index} className="mb-4 rounded-lg border p-4">
                <select
                  value={visit.assistanceType}
                  onChange={(e) =>
                    handleVisitChange(index, "assistanceType", e.target.value)
                  }
                  className="mb-2 block w-full rounded border p-2"
                >
                  <option value="">Tipo assistenza...</option>
                  <option value="ADI">ADI</option>
                  <option value="ADP">ADP</option>
                  <option value="CURE_PALLIATIVE">Cure Palliative</option>
                </select>
                <input
                  type="date"
                  value={visit.nextVisitDate}
                  onChange={(e) =>
                    handleVisitChange(index, "nextVisitDate", e.target.value)
                  }
                  min={new Date().toISOString().split("T")[0]}
                  className="mb-2 block w-full rounded border p-2"
                />
                <input
                  type="number"
                  placeholder="Cadenza (giorni)"
                  value={visit.visitFrequency}
                  onChange={(e) =>
                    handleVisitChange(index, "visitFrequency", e.target.value)
                  }
                  className="mb-2 block w-full rounded border p-2"
                />
                <select
                  value={visit.assignedToId}
                  onChange={(e) =>
                    handleVisitChange(index, "assignedToId", e.target.value)
                  }
                  className="mb-2 block w-full rounded border p-2"
                >
                  <option value="">Infermiere assegnato...</option>
                  {nursesQuery.data?.map((nurse) => (
                    <option key={nurse.id} value={nurse.id}>
                      {nurse.name || nurse.username}
                    </option>
                  ))}
                </select>
                <textarea
                  placeholder="Note sulla prestazione..."
                  value={visit.notes}
                  onChange={(e) =>
                    handleVisitChange(index, "notes", e.target.value)
                  }
                  rows={2}
                  className="mb-2 block w-full rounded border p-2"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveVisit(index)}
                  className="text-sm text-red-600"
                >
                  Rimuovi
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-4">
            <Link href="/dashboard" className="rounded-lg border px-4 py-2">
              Annulla
            </Link>
            <button
              type="submit"
              disabled={createPatient.isPending}
              className="rounded-lg bg-indigo-600 px-4 py-2 text-white"
            >
              Salva
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
