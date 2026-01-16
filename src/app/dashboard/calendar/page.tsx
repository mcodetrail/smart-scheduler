"use client";

import { api } from "@/trpc/react";
import { useState, useMemo } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

type CalendarView = "day" | "week" | "month";

export default function CalendarPage() {
  const { data: session } = useSession();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<CalendarView>("week");
  const [selectedNurse, setSelectedNurse] = useState<string | undefined>();

  // Calculate date range based on view
  const dateRange = useMemo(() => {
    const start = new Date(currentDate);
    const end = new Date(currentDate);

    if (view === "day") {
      start.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 999);
    } else if (view === "week") {
      const day = start.getDay();
      const diff = start.getDate() - day + (day === 0 ? -6 : 1);
      start.setDate(diff);
      start.setHours(0, 0, 0, 0);
      end.setDate(start.getDate() + 6);
      end.setHours(23, 59, 59, 999);
    } else {
      start.setDate(1);
      start.setHours(0, 0, 0, 0);
      end.setMonth(end.getMonth() + 1);
      end.setDate(0);
      end.setHours(23, 59, 59, 999);
    }

    return { start, end };
  }, [currentDate, view]);

  const { data: appointments, isLoading } =
    api.appointment.getByDateRange.useQuery({
      startDate: dateRange.start,
      endDate: dateRange.end,
      nurseId: selectedNurse,
      status: "scheduled",
    });

  const { data: nurses } = api.auth.getAllNurses.useQuery();

  const navigate = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    if (view === "day") {
      newDate.setDate(newDate.getDate() + (direction === "next" ? 1 : -1));
    } else if (view === "week") {
      newDate.setDate(newDate.getDate() + (direction === "next" ? 7 : -7));
    } else {
      newDate.setMonth(newDate.getMonth() + (direction === "next" ? 1 : -1));
    }
    setCurrentDate(newDate);
  };

  const formatDateHeader = () => {
    if (view === "day") {
      return currentDate.toLocaleDateString("it-IT", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } else if (view === "week") {
      const weekStart = new Date(dateRange.start);
      const weekEnd = new Date(dateRange.end);
      return `${weekStart.toLocaleDateString("it-IT", { day: "numeric", month: "short" })} - ${weekEnd.toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })}`;
    } else {
      return currentDate.toLocaleDateString("it-IT", {
        year: "numeric",
        month: "long",
      });
    }
  };

  const getAppointmentsByDate = (date: Date) => {
    if (!appointments) return [];
    const dateStr = date.toISOString().split("T")[0];
    return appointments.filter((apt) => {
      const aptDate = new Date(apt.scheduledDate).toISOString().split("T")[0];
      return aptDate === dateStr;
    });
  };

  const renderWeekView = () => {
    const days = [];
    const startDate = new Date(dateRange.start);

    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const dayAppointments = getAppointmentsByDate(date);

      days.push(
        <div
          key={i}
          className="min-h-[500px] border-r border-gray-200 bg-white p-2 last:border-r-0"
        >
          <div className="mb-2 text-center">
            <div className="text-xs font-medium text-gray-500">
              {date.toLocaleDateString("it-IT", { weekday: "short" })}
            </div>
            <div className="text-sm font-semibold text-gray-900">
              {date.getDate()}
            </div>
          </div>
          <div className="space-y-1">
            {dayAppointments.map((apt) => (
              <Link
                key={apt.id}
                href={`/dashboard/appointments/${apt.id}`}
                className="block rounded border-l-4 border-indigo-500 bg-indigo-50 p-2 text-xs hover:bg-indigo-100"
              >
                <div className="font-medium text-gray-900">
                  {new Date(apt.scheduledDate).toLocaleTimeString("it-IT", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
                <div className="font-semibold text-indigo-900">
                  {apt.patient.firstName} {apt.patient.lastName}
                </div>
                <div className="text-gray-600">{apt.createdBy.name}</div>
                {apt.createdById !== apt.lastModifiedById && (
                  <div className="mt-1 text-xs text-orange-600">
                    Modificato da: {apt.lastModifiedBy.name}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      );
    }

    return <div className="grid grid-cols-7">{days}</div>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Calendario</h1>
              <p className="text-sm text-gray-600">
                Gestione appuntamenti {session?.user?.name}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                👥 Pazienti
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
        {/* Controls */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Date Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("prev")}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50"
            >
              ←
            </button>
            <div className="min-w-[250px] text-center text-lg font-semibold">
              {formatDateHeader()}
            </div>
            <button
              onClick={() => navigate("next")}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50"
            >
              →
            </button>
            <button
              onClick={() => setCurrentDate(new Date())}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50"
            >
              Oggi
            </button>
          </div>

          {/* View Toggle & Filters */}
          <div className="flex items-center gap-4">
            {nurses && nurses.length > 1 && (
              <select
                value={selectedNurse || "all"}
                onChange={(e) =>
                  setSelectedNurse(
                    e.target.value === "all" ? undefined : e.target.value
                  )
                }
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
              >
                <option value="all">Tutti gli infermieri</option>
                {nurses.map((nurse) => (
                  <option key={nurse.id} value={nurse.id}>
                    {nurse.name}
                  </option>
                ))}
              </select>
            )}

            <div className="flex rounded-lg border border-gray-300 bg-white">
              <button
                onClick={() => setView("day")}
                className={`px-3 py-2 text-sm font-medium ${view === "day" ? "bg-indigo-100 text-indigo-700" : "text-gray-700"}`}
              >
                Giorno
              </button>
              <button
                onClick={() => setView("week")}
                className={`border-x border-gray-300 px-3 py-2 text-sm font-medium ${view === "week" ? "bg-indigo-100 text-indigo-700" : "text-gray-700"}`}
              >
                Settimana
              </button>
              <button
                onClick={() => setView("month")}
                className={`px-3 py-2 text-sm font-medium ${view === "month" ? "bg-indigo-100 text-indigo-700" : "text-gray-700"}`}
              >
                Mese
              </button>
            </div>

            <Link
              href="/dashboard/appointments/new"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              + Nuovo Appuntamento
            </Link>
          </div>
        </div>

        {/* Calendar View */}
        {isLoading ? (
          <div className="rounded-lg bg-white p-8 text-center shadow">
            <p className="text-gray-600">Caricamento appuntamenti...</p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg bg-white shadow">
            {view === "week" && renderWeekView()}
            {view === "day" && (
              <div className="p-4">
                <div className="space-y-2">
                  {getAppointmentsByDate(currentDate).length === 0 ? (
                    <p className="py-8 text-center text-gray-600">
                      Nessun appuntamento per questo giorno
                    </p>
                  ) : (
                    getAppointmentsByDate(currentDate).map((apt) => (
                      <Link
                        key={apt.id}
                        href={`/dashboard/appointments/${apt.id}`}
                        className="block rounded-lg border-l-4 border-indigo-500 bg-indigo-50 p-4 hover:bg-indigo-100"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {new Date(apt.scheduledDate).toLocaleTimeString(
                                "it-IT",
                                { hour: "2-digit", minute: "2-digit" }
                              )}{" "}
                              - {apt.duration} min
                            </div>
                            <div className="text-lg font-semibold text-indigo-900">
                              {apt.patient.firstName} {apt.patient.lastName}
                            </div>
                            <div className="text-sm text-gray-600">
                              {apt.patient.address}, {apt.patient.city}
                            </div>
                            <div className="mt-1 text-sm text-gray-600">
                              Infermiere: {apt.createdBy.name}
                            </div>
                            {apt.createdById !== apt.lastModifiedById && (
                              <div className="mt-1 text-sm text-orange-600">
                                Ultima modifica: {apt.lastModifiedBy.name} il{" "}
                                {new Date(apt.lastModifiedAt).toLocaleString(
                                  "it-IT"
                                )}
                              </div>
                            )}
                          </div>
                          <div className="text-right text-sm text-gray-500">
                            Tel: {apt.patient.phone}
                          </div>
                        </div>
                        {apt.notes && (
                          <div className="mt-2 text-sm text-gray-600">
                            Note: {apt.notes}
                          </div>
                        )}
                      </Link>
                    ))
                  )}
                </div>
              </div>
            )}
            {view === "month" && (
              <div className="p-4 text-center text-gray-600">
                Vista mese - In sviluppo
              </div>
            )}
          </div>
        )}

        {/* Stats */}
        {appointments && (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-blue-50 p-4">
              <div className="text-sm font-medium text-blue-900">
                Appuntamenti totali
              </div>
              <div className="mt-1 text-2xl font-semibold text-blue-700">
                {appointments.length}
              </div>
            </div>
            <div className="rounded-lg bg-green-50 p-4">
              <div className="text-sm font-medium text-green-900">
                Pazienti unici
              </div>
              <div className="mt-1 text-2xl font-semibold text-green-700">
                {new Set(appointments.map((apt) => apt.patientId)).size}
              </div>
            </div>
            <div className="rounded-lg bg-purple-50 p-4">
              <div className="text-sm font-medium text-purple-900">
                Ore totali
              </div>
              <div className="mt-1 text-2xl font-semibold text-purple-700">
                {(
                  appointments.reduce((sum, apt) => sum + apt.duration, 0) / 60
                ).toFixed(1)}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
