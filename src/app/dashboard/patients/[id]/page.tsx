"use client";

import { api } from "@/trpc/react";
import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function EditPatientPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const utils = api.useUtils();
  const { data: patient, isLoading } = api.patient.getById.useQuery({
    id: id,
  });
  const { data: nurses } = api.auth.getAllNurses.useQuery();

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
    nextVisitDate: string;
    visitFrequency: string;
    assignedToId: string;
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
    nextVisitDate: "",
    visitFrequency: "",
    assignedToId: "",
    notes: "",
  });

  useEffect(() => {
    if (patient) {
      setFormData({
        firstName: patient.firstName,
        lastName: patient.lastName,
        dateOfBirth:
          patient.dateOfBirth != null
            ? new Date(patient.dateOfBirth).toISOString().split("T")[0]
            : "",
        fiscalCode: patient.fiscalCode || "",
        address: patient.address || "",
        houseNumber: patient.houseNumber || "",
        city: patient.city || "",
        postalCode: patient.postalCode || "",
        phone1: patient.phone1,
        phone2: patient.phone2 || "",
        assistanceType: patient.assistanceType || "",
        exemptionCode: patient.exemptionCode,
        nextVisitDate:
          patient.nextVisitDate != null
            ? new Date(patient.nextVisitDate).toISOString().split("T")[0]
            : "",
        visitFrequency: patient.visitFrequency?.toString() || "",
        assignedToId: patient.assignedToId || "",
        notes: patient.notes || "",
      });
    }
  }, [patient]);

  const updatePatient = api.patient.update.useMutation({
    onSuccess: async () => {
      await utils.patient.getByVisitDate.invalidate();
      await utils.patient.getById.invalidate();
      router.push("/dashboard");
      router.refresh();
    },
    onError: (error) => {
      console.error("Errore durante l'aggiornamento del paziente:", error);
      alert(`Errore: ${error.message}`);
    },
  });

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

    if (formData.fiscalCode && formData.fiscalCode.trim().length !== 16) {
      alert("Il codice fiscale deve essere di 16 caratteri");
      return;
    }

    updatePatient.mutate({
      id: id,
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
      nextVisitDate: formData.nextVisitDate
        ? new Date(formData.nextVisitDate)
        : undefined,
      visitFrequency: formData.visitFrequency
        ? parseInt(formData.visitFrequency)
        : undefined,
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

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Caricamento...</div>
      </div>
    );
  }

  if (!patient) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Paziente non trovato</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Modifica Paziente
            </h1>
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
                  disabled={updatePatient.isPending}
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
                  disabled={updatePatient.isPending}
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
                  disabled={updatePatient.isPending}
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
                  disabled={updatePatient.isPending}
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
                  disabled={updatePatient.isPending}
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
                  disabled={updatePatient.isPending}
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
                  disabled={updatePatient.isPending}
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
                  disabled={updatePatient.isPending}
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
                  disabled={updatePatient.isPending}
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
                  disabled={updatePatient.isPending}
                />
              </div>
            </div>
          </div>

          {/* Visit Planning */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Pianificazione Visite
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="nextVisitDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Data Prossima Visita
                </label>
                <input
                  id="nextVisitDate"
                  name="nextVisitDate"
                  type="date"
                  value={formData.nextVisitDate}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  disabled={updatePatient.isPending}
                />
              </div>

              <div>
                <label
                  htmlFor="visitFrequency"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cadenza (giorni)
                </label>
                <input
                  id="visitFrequency"
                  name="visitFrequency"
                  type="number"
                  min="1"
                  value={formData.visitFrequency}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  disabled={updatePatient.isPending}
                  placeholder="Es: 7 per visite settimanali"
                />
              </div>

              <div>
                <label
                  htmlFor="assignedToId"
                  className="block text-sm font-medium text-gray-700"
                >
                  Assegnato a
                </label>
                <select
                  id="assignedToId"
                  name="assignedToId"
                  value={formData.assignedToId}
                  onChange={handleSelectChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  disabled={updatePatient.isPending}
                >
                  <option value="">Seleziona infermiere</option>
                  {nurses?.map((nurse) => (
                    <option key={nurse.id} value={nurse.id}>
                      {nurse.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Other */}
          <div>
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
                  disabled={updatePatient.isPending}
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
                  disabled={updatePatient.isPending}
                />
              </div>
            </div>
          </div>

          <div>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              value={formData.notes}
              onChange={handleChange}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Note aggiuntive sulla visita..."
              disabled={updatePatient.isPending}
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
              disabled={updatePatient.isPending}
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {updatePatient.isPending ? "Salvataggio..." : "Salva Modifiche"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
