import Link from "next/link";
import TesteGratisForm from "./form";

export const dynamic = "force-dynamic";

export default function TesteGratisPage({
  params,
}: {
  params: { key: string };
}) {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <Link href="/catalogo" className="text-sm text-indigo-600 hover:underline">
        ← Voltar ao catálogo
      </Link>

      <h1 className="mt-6 text-3xl font-semibold">Teste grátis — 7 dias</h1>
      <p className="mt-2 text-slate-500">
        Preencha os dados abaixo e receba o acesso de teste ao módulo{" "}
        <strong>{params.key}</strong>.
      </p>

      <TesteGratisForm moduleKey={params.key} />
    </main>
  );
}
