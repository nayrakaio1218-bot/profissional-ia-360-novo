import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Sua Plataforma de IA</h1>
      <p className="mt-4 text-slate-500">
        Explore os módulos disponíveis e comece a aprender agora.
      </p>
      <Link
        href="/catalogo"
        className="mt-8 inline-block rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
      >
        Ver catálogo de módulos
      </Link>
    </main>
  );
}
