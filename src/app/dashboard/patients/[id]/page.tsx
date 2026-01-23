"use client";

import { api } from "@/trpc/react";
import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import type { AssistanceType } from "generated/prisma";
import { ASSISTANCE_TYPE_LABELS, ASSISTANCE_TYPES } from "@/lib/constants";

type ScheduledVisitInput = {
  id?: string;
  assistanceType: AssistanceType | "";
  nextVisitDate: string;
  visitFrequency: string;
  notes: string;
  assignedToId: string;
};

export default function EditPatientPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const { data: session } = useSession();
  const utils = api.useUtils();
  const [formTab, setFormTab] = useState<"anagrafica" | "prestazioni">(
    "anagrafica",
  );

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

  const patientQuery = api.patient.getById.useQuery({ id });
  const scheduledVisitsQuery = api.scheduledVisit.getByPatient.useQuery({
    patientId: id,
  });

  const nursesQuery = api.auth.getAllNurses.useQuery();

  // Load patient data
  useEffect(() => {
    if (patientQuery.data) {
      const patient = patientQuery.data;
      setFormData({
        firstName: patient.firstName,
        lastName: patient.lastName,
        dateOfBirth: patient.dateOfBirth
          ? new Date(patient.dateOfBirth).toISOString().split("T")[0]!
          : "",
        fiscalCode: patient.fiscalCode || "",
        address: patient.address || "",
        houseNumber: patient.houseNumber || "",
        city: patient.city || "",
        postalCode: patient.postalCode || "",
        phone1: patient.phone1,
        phone2: patient.phone2 || "",
        exemptionCode: patient.exemptionCode,
        assignedToId: patient.assignedToId || session?.user?.id || "",
        notes: patient.notes || "",
      });
    }
  }, [patientQuery.data, session?.user?.id]);

  // Load scheduled visits
  useEffect(() => {
    if (scheduledVisitsQuery.data) {
      setScheduledVisits(
        scheduledVisitsQuery.data.map((visit) => ({
          id: visit.id,
          assistanceType: visit.assistanceType,
          nextVisitDate: new Date(visit.nextVisitDate)
            .toISOString()
            .split("T")[0]!,
          visitFrequency: visit.visitFrequency?.toString() || "",
          notes: visit.notes || "",
          assignedToId: visit.assignedToId || session?.user?.id || "",
        })),
      );
    }
  }, [scheduledVisitsQuery.data, session?.user?.id]);

  const updatePatient = api.patient.update.useMutation({
    onSuccess: async () => {
      await utils.patient.getById.invalidate({ id });
      router.push("/dashboard");
      router.refresh();
    },
    onError: (error) => {
      alert(`Errore: ${error.message}`);
    },
  });

  const createScheduledVisit = api.scheduledVisit.create.useMutation({
    onSuccess: async () => {
      await utils.scheduledVisit.getByPatient.invalidate({ patientId: id });
    },
  });
  const updateScheduledVisit = api.scheduledVisit.update.useMutation({
    onSuccess: async () => {
      await utils.scheduledVisit.getByPatient.invalidate({ patientId: id });
    },
  });
  const deleteScheduledVisit = api.scheduledVisit.delete.useMutation({
    onSuccess: async () => {
      await utils.scheduledVisit.getByPatient.invalidate({ patientId: id });
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddVisit = () => {
    setScheduledVisits((prev) => [
      ...prev,
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
    const visit = scheduledVisits[index];
    if (visit?.id) {
      // If visit has an ID, delete from database
      deleteScheduledVisit.mutate({ id: visit.id });
    }
    setScheduledVisits((prev) => prev.filter((_, i) => i !== index));
  };

  const handleVisitChange = (
    index: number,
    field: keyof ScheduledVisitInput,
    value: string,
  ) => {
    setScheduledVisits((prev) =>
      prev.map((visit, i) =>
        i === index ? { ...visit, [field]: value } : visit,
      ),
    );
  };

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

    // Update patient data
    await updatePatient.mutateAsync({
      id,
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      dateOfBirth: formData.dateOfBirth ? new Date(formData.dateOfBirth) : null,
      fiscalCode: formData.fiscalCode.trim() || null,
      address: formData.address.trim() || null,
      houseNumber: formData.houseNumber.trim() || null,
      city: formData.city.trim() || null,
      postalCode: formData.postalCode.trim() || null,
      phone1: formData.phone1.trim(),
      phone2: formData.phone2.trim() || null,
      exemptionCode: formData.exemptionCode.trim(),
      assignedToId: formData.assignedToId || null,
      notes: formData.notes.trim() || null,
    });

    // Update or create scheduled visits
    for (const visit of scheduledVisits) {
      if (visit.assistanceType && visit.nextVisitDate) {
        if (visit.id) {
          // Update existing visit
          await updateScheduledVisit.mutateAsync({
            id: visit.id,
            assistanceType: visit.assistanceType,
            nextVisitDate: new Date(visit.nextVisitDate),
            visitFrequency: visit.visitFrequency
              ? parseInt(visit.visitFrequency)
              : null,
            notes: visit.notes || null,
            assignedToId: visit.assignedToId || null,
          });
        } else {
          // Create new visit
          await createScheduledVisit.mutateAsync({
            patientId: id,
            assistanceType: visit.assistanceType,
            nextVisitDate: new Date(visit.nextVisitDate),
            visitFrequency: visit.visitFrequency
              ? parseInt(visit.visitFrequency)
              : undefined,
            notes: visit.notes || undefined,
            assignedToId: visit.assignedToId || undefined,
          });
        }
      }
    }
  };

  if (patientQuery.isLoading || scheduledVisitsQuery.isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="text-center">Caricamento...</div>
      </div>
    );
  }

  if (!patientQuery.data) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="text-center text-red-600">Paziente non trovato</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-linear-to-r from-indigo-600 to-indigo-700 shadow-lg">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">
                Modifica Paziente
              </h1>
              <p className="mt-1 text-sm text-indigo-100">
                {patientQuery.data?.firstName} {patientQuery.data?.lastName}
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
        {/* Tab Navigation */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              type="button"
              onClick={() => setFormTab("anagrafica")}
              className={`border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap ${
                formTab === "anagrafica"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Dati Anagrafici
            </button>
            <button
              type="button"
              onClick={() => setFormTab("prestazioni")}
              className={`border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap ${
                formTab === "prestazioni"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Prestazioni
            </button>
          </nav>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-lg bg-white p-6 shadow"
        >
          {updatePatient.error && (
            <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800">
              {updatePatient.error.message}
            </div>
          )}

          {formTab === "anagrafica" && (
            <>
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
                      max={new Date().toISOString().split("T")[0]}
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
                  Contatti
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                      type="tel"
                      value={formData.phone2}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      disabled={updatePatient.isPending}
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
                      disabled={updatePatient.isPending}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="assignedToId"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Infermiere Assegnato al Paziente
                    </label>
                    <select
                      id="assignedToId"
                      name="assignedToId"
                      value={formData.assignedToId}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      disabled={updatePatient.isPending}
                    >
                      <option value="">Nessun infermiere assegnato</option>
                      {nursesQuery.data?.map((nurse) => (
                        <option key={nurse.id} value={nurse.id}>
                          {nurse.name || nurse.username}
                        </option>
                      ))}
                    </select>
                    {patientQuery.data?.lastAssignedBy && (
                      <p className="mt-1 text-xs text-gray-500">
                        Ultimo cambio da{" "}
                        {patientQuery.data.lastAssignedBy.name ||
                          patientQuery.data.lastAssignedBy.username}
                        {patientQuery.data.lastAssignedAt &&
                          ` il ${new Date(patientQuery.data.lastAssignedAt).toLocaleDateString("it-IT")}`}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <h2 className="mb-4 text-lg font-semibold text-gray-900">
                  Indirizzo
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                      disabled={updatePatient.isPending}
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
                  disabled={updatePatient.isPending}
                />
              </div>
            </>
          )}

          {formTab === "prestazioni" && (
            <>
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
                    disabled={updatePatient.isPending}
                  >
                    + Aggiungi
                  </button>
                </div>
                {scheduledVisits.map((visit, index) => (
                  <div
                    key={index}
                    className="mb-4 rounded-lg border bg-white p-4"
                  >
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Tipo Assistenza *
                        </label>
                        <select
                          value={visit.assistanceType}
                          onChange={(e) =>
                            handleVisitChange(
                              index,
                              "assistanceType",
                              e.target.value,
                            )
                          }
                          className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="">Seleziona...</option>
                          {ASSISTANCE_TYPES.map((type) => (
                            <option key={type} value={type}>
                              {ASSISTANCE_TYPE_LABELS[type]}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Data Prossima Visita *
                        </label>
                        <input
                          type="date"
                          value={visit.nextVisitDate}
                          onChange={(e) =>
                            handleVisitChange(
                              index,
                              "nextVisitDate",
                              e.target.value,
                            )
                          }
                          min={new Date().toISOString().split("T")[0]}
                          className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Cadenza (giorni)
                        </label>
                        <input
                          type="number"
                          placeholder="Es: 7 per settimanale"
                          value={visit.visitFrequency}
                          onChange={(e) =>
                            handleVisitChange(
                              index,
                              "visitFrequency",
                              e.target.value,
                            )
                          }
                          className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Infermiere Assegnato
                        </label>
                        <select
                          value={visit.assignedToId}
                          onChange={(e) =>
                            handleVisitChange(
                              index,
                              "assignedToId",
                              e.target.value,
                            )
                          }
                          className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="">Seleziona infermiere...</option>
                          {nursesQuery.data?.map((nurse) => (
                            <option key={nurse.id} value={nurse.id}>
                              {nurse.name || nurse.username}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Note Prestazione
                        </label>
                        <textarea
                          placeholder="Note specifiche per questa prestazione..."
                          value={visit.notes}
                          onChange={(e) =>
                            handleVisitChange(index, "notes", e.target.value)
                          }
                          rows={2}
                          className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveVisit(index)}
                      className="mt-3 text-sm font-medium text-red-600 hover:text-red-700"
                    >
                      🗑️ Rimuovi prestazione
                    </button>
                  </div>
                ))}
                {scheduledVisits.length === 0 && (
                  <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center">
                    <p className="text-gray-500">
                      Nessuna prestazione pianificata. Clicca &quot;+
                      Aggiungi&quot; per aggiungerne una.
                    </p>
                  </div>
                )}
              </div>
            </>
          )}

          <div className="flex justify-end gap-4">
            <Link
              href="/dashboard"
              className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              Annulla
            </Link>
            <button
              type="submit"
              disabled={updatePatient.isPending}
              className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 disabled:opacity-50"
            >
              {updatePatient.isPending ? "Salvataggio..." : "Salva Modifiche"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
