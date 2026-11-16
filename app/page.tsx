import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IA 360º — Domine a Inteligência Artificial na prática",
  description:
    "Plataforma completa de cursos de IA. Aprenda do zero ao avançado com módulos práticos, campanhas prontas e suporte via WhatsApp. Teste grátis por 7 dias.",
  keywords: [
    "inteligência artificial",
    "curso de IA",
    "IA 360",
    "machine learning",
    "automação com IA",
    "curso online",
  ],
  openGraph: {
    title: "IA 360º — Domine a Inteligência Artificial na prática",
    description:
      "Plataforma completa de cursos de IA. Teste grátis por 7 dias.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero com imagem de fundo */}
      <section
        className="relative flex min-h-screen items-center justify-center px-4 text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.82), rgba(15, 23, 42, 0.92)), url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full border border-indigo-400/40 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            Plataforma de cursos de IA
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Domine a <span className="text-indigo-400">Inteligência Artificial</span> de ponta a ponta
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            Aprenda na prática com módulos completos, campanhas prontas e suporte direto via WhatsApp.
            Comece com <strong className="text-white">7 dias grátis</strong> — sem compromisso.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/catalogo"
              className="inline-flex items-center rounded-xl bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-700"
            >
              Ver módulos disponíveis →
            </Link>
            <Link
              href="/teste-gratis/ia-360"
              className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Começar teste grátis
            </Link>
          </div>

          <p className="mt-8 text-xs text-slate-400">
            ✓ Acesso imediato · ✓ Suporte humano · ✓ Cancele quando quiser
          </p>
        </div>
      </section>

      {/* Seção de destaques */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Por que escolher a IA 360º?
          </h2>
          <p className="mt-3 text-center text-sm text-slate-600">
            Tudo que você precisa para dominar IA em um só lugar.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Módulos práticos",
                desc: "Conteúdo direto ao ponto, sem enrolação. Aprenda fazendo.",
                icon: "🎯",
              },
              {
                title: "Campanhas prontas",
                desc: "Ferramenta de IA para gerar campanhas de marketing em segundos.",
                icon: "🚀",
              },
              {
                title: "Suporte via WhatsApp",
                desc: "Tire dúvidas direto com a gente, quando precisar.",
                icon: "💬",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/catalogo"
              className="inline-block rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Explorar catálogo de módulos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
