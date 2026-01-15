"use client";

import { api } from "@/trpc/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewPatientPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    fiscalCode: string;
    address: string;
    houseNumber: string;
    city: string;
    postalCode: string;
    phone1: string;
    phone2: string;
    assistanceType: string;
    exemptionCode: string;
    notes: string;
  }>({
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
    assistanceType: "",
    exemptionCode: "",
    notes: "",
  });

  const createPatient = api.patient.create.useMutation({
    onSuccess: () => {
      router.push("/dashboard");
      router.refresh();
    },
    onError: (error) => {
      console.error("Errore durante la creazione del paziente:", error);
      alert(`Errore: ${error.message}`);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
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

    // Validate fiscal code length if provided
    if (formData.fiscalCode && formData.fiscalCode.trim().length !== 16) {
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
      assistanceType: (formData.assistanceType.trim() || undefined) as any,
      exemptionCode: formData.exemptionCode.trim(),
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

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
            <h1 className="text-2xl font-bold text-gray-900">Nuovo Paziente</h1>
            <Link
              href="/dashboard"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              ← Torna alla dashboard
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
              Indirizzo e Contatti
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Indirizzo
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
                  Numero Civico
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
                  maxLength={5}
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  disabled={createPatient.isPending}
                />
              </div>

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
                  type="text"
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
                  type="text"
                  value={formData.phone2}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  disabled={createPatient.isPending}
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Altro</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="assistanceType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tipo di assistenza
                </label>
                <select
                  id="assistanceType"
                  name="assistanceType"
                  value={formData.assistanceType}
                  onChange={handleSelectChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  disabled={createPatient.isPending}
                >
                  <option value="">Seleziona...</option>
                  <option value="ADI">
                    ADI - Assistenza Domiciliare Integrata
                  </option>
                  <option value="ADP">
                    ADP - Assistenza Domiciliare Programmata
                  </option>
                  <option value="CURE_PALLIATIVE">Cure Palliative</option>
                  <option value="DIMISSIONE_PROTETTA">
                    Dimissione Protetta
                  </option>
                  <option value="RIABILITAZIONE">Riabilitazione</option>
                  <option value="PRESTAZIONI_INFERMIERISTICHE">
                    Prestazioni Infermieristiche
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="exemptionCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Esenzione *
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

          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Note</h2>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              value={formData.notes}
              onChange={handleChange}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Note aggiuntive sul paziente..."
              disabled={createPatient.isPending}
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4">
            <Link
              href="/dashboard"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Annulla
            </Link>
            <button
              type="submit"
              disabled={createPatient.isPending}
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {createPatient.isPending ? "Salvataggio..." : "Salva Paziente"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
