import Link from "next/link";

interface Module {
  key: string;
  name: string;
  description: string;
}

const modules: Module[] = [
  { key: "ia-360", name: "IA 360", description: "Domine a Inteligência Artificial de ponta a ponta." },
];

const plans = [
  { id: "monthly", label: "Assinatura mensal" },
  { id: "annual", label: "Assinatura anual" },
  { id: "lifetime", label: "Pagamento único · permanente" },
];

export default function CatalogoPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Link href="/" className="text-sm text-indigo-600 hover:underline">
        ← Voltar ao início
      </Link>

      <h1 className="mt-4 text-3xl font-semibold">Catálogo de módulos</h1>
      <p className="mt-2 text-sm text-slate-500">
        Escolha um módulo e solicite o teste grátis de 7 dias.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((m) => (
          <article key={m.key} className="flex flex-col rounded-2xl border bg-white p-6">
            <h2 className="text-xl font-semibold">{m.name}</h2>
            <p className="mt-2 flex-1 text-sm text-slate-500">{m.description}</p>

            <div className="mt-5 space-y-2">
              {plans.map((plan) => (
                <div key={plan.id} className="flex items-center justify-between rounded-xl bg-slate-50 p-3 text-sm">
                  <span>{plan.label}</span>
                  <span className="text-slate-500">Indisponível</span>
                </div>
              ))}
            </div>

            <Link
              href={`/teste-gratis/${m.key}`}
              className="mt-4 block w-full rounded-xl bg-indigo-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Testar grátis — 7 dias
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
