import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/server/auth";

export default async function Home() {
  const session = await auth();

  // If user is logged in, redirect to dashboard
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Assistenza Domiciliare
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Sistema di gestione per infermieri professionisti
          </p>
          <p className="mt-2 text-base text-gray-500">
            Gestisci pazienti, appuntamenti e calendario in modo semplice ed efficace
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="/auth/signin"
            className="rounded-lg bg-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-md hover:bg-indigo-700"
          >
            Accedi
          </Link>
          <Link
            href="/auth/register"
            className="rounded-lg border-2 border-indigo-600 px-8 py-3 text-lg font-semibold text-indigo-600 hover:bg-indigo-50"
          >
            Registrati
          </Link>
        </div>

        <div className="mt-8 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-3 text-3xl">👥</div>
            <h3 className="text-xl font-bold text-gray-900">
              Gestione Pazienti
            </h3>
            <p className="mt-2 text-gray-600">
              Anagrafica completa con tutti i dati necessari
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-3 text-3xl">📅</div>
            <h3 className="text-xl font-bold text-gray-900">
              Calendario
            </h3>
            <p className="mt-2 text-gray-600">
              Pianifica e visualizza tutti gli appuntamenti
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-3 text-3xl">👨‍⚕️</div>
            <h3 className="text-xl font-bold text-gray-900">
              Collaborazione
            </h3>
            <p className="mt-2 text-gray-600">
              Lavora in team con tracciamento modifiche
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}