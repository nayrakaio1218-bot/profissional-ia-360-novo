"use client";

import { useState } from "react";

interface HistoricoItem {
  id: number;
  data: string;
  tema: string;
  texto: string;
}

export default function CriadorCampanhasPage() {
  const [tema, setTema] = useState("");
  const [publico, setPublico] = useState("");
  const [tom, setTom] = useState("profissional");
  const [orcamento, setOrcamento] = useState("R$ 1.000");
  const [canais, setCanais] = useState<string[]>(["Instagram"]);
  const [duracao, setDuracao] = useState("7 dias");
  const [campanha, setCampanha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [historico, setHistorico] = useState<HistoricoItem[]>([]);
  const [copiado, setCopiado] = useState(false);

  const canalOptions = ["Instagram", "Facebook", "WhatsApp", "Email", "Youtube", "LinkedIn", "Google Ads"];
  const duracaoOptions = ["7 dias", "15 dias", "30 dias", "60 dias"];

  function gerarPalavrasChave(tema: string): string[] {
    const base = tema
      .toLowerCase()
      .replace(/[^a-z0-9áéíóúâêôãõç\s]/g, "")
      .split(" ")
      .filter((p) => p.length > 2);
    const extras = ["curso online", "aprenda", "resultados", "mercado"];
    return Array.from(new Set([...base, ...extras])).slice(0, 6);
  }

  function toggleCanal(canal: string) {
    setCanais((prev) =>
      prev.includes(canal)
        ? prev.filter((c) => c !== canal)
        : [...prev, canal]
    );
  }

  async function gerarCampanha() {
    if (!tema || !publico || canais.length === 0) {
      alert("Preencha o tema, público-alvo e selecione pelo menos 1 canal!");
      return;
    }

    setCarregando(true);
    setCampanha("");

    setTimeout(() => {
      const palavrasChave = gerarPalavrasChave(tema);
      const resultado = `📢 CAMPANHA: ${tema.toUpperCase()}

🎯 PÚBLICO-ALVO: ${publico}

📱 CANAIS: ${canais.join(", ")}

⏱️ DURAÇÃO: ${duracao}

💰 ORÇAMENTO: ${orcamento}

📝 COPY PRINCIPAL:
"Transforme sua carreira com IA! Aprenda na prática e domine as ferramentas que estão revolucionando o mercado. Comece agora e veja resultados em 7 dias."

🔥 CHAMADA PARA AÇÃO:
"Clique aqui e comece seu teste grátis!"

🔍 SEO:
- Título: ${tema} — Aprenda de forma prática e rápida
- Meta description: Descubra como ${tema.toLowerCase()} pode transformar seus resultados. Teste grátis por 7 dias sem compromisso.
- Palavras-chave: ${palavrasChave.join(", ")}
- Hashtags: ${palavrasChave.slice(0, 5).map((p) => p.replace(/\s+/g, "")).map((p) => `#${p}`).join(" ")}

💡 DICAS EXTRAS:
- Use depoimentos de alunos
- Mostre resultados concretos
- Crie urgência com vagas limitadas`.trim();

      setCampanha(resultado);
      setHistorico((prev) => [
        {
          id: Date.now(),
          data: new Date().toLocaleString("pt-BR"),
          tema,
          texto: resultado,
        },
        ...prev,
      ]);
      setCopiado(false);
      setCarregando(false);
    }, 1500);
  }

  async function copiarTexto() {
    if (!campanha) return;
    try {
      await navigator.clipboard.writeText(campanha);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      alert("Não foi possível copiar. Selecione o texto manualmente.");
    }
  }

  function carregarDoHistorico(item: HistoricoItem) {
    setCampanha(item.texto);
    setTema(item.tema);
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-indigo-600">Criador de Campanhas</h1>
      <p className="mt-2 text-slate-600">
        Gere campanhas completas com orçamento, canais e duração.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Formulário */}
        <div className="space-y-4 rounded-2xl border bg-white p-6">
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-900">Tema</label>
            <input
              type="text"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              placeholder="Ex: Curso de IA para empreendedores"
              className="w-full rounded-xl border border-slate-300 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-900">Público-alvo</label>
            <input
              type="text"
              value={publico}
              onChange={(e) => setPublico(e.target.value)}
              placeholder="Ex: Empreendedores de 30-50 anos"
              className="w-full rounded-xl border border-slate-300 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-900">Tom de voz</label>
            <select
              value={tom}
              onChange={(e) => setTom(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none"
            >
              <option value="profissional">Profissional</option>
              <option value="descontraido">Descontraído</option>
              <option value="urgente">Urgente/Vendas</option>
              <option value="educativo">Educativo</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-900">Orçamento</label>
            <input
              type="text"
              value={orcamento}
              onChange={(e) => setOrcamento(e.target.value)}
              placeholder="Ex: R$ 1.000"
              className="w-full rounded-xl border border-slate-300 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-900">Canais</label>
            <div className="flex flex-wrap gap-2">
              {canalOptions.map((canal) => (
                <button
                  key={canal}
                  type="button"
                  onClick={() => toggleCanal(canal)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                    canais.includes(canal)
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {canal}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-900">Duração</label>
            <div className="flex flex-wrap gap-2">
              {duracaoOptions.map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDuracao(d)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                    duracao === d
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={gerarCampanha}
            disabled={carregando}
            className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-700 disabled:bg-slate-400"
          >
            {carregando ? "Gerando..." : "Gerar campanha"}
          </button>
        </div>

        {/* Resultado */}
        <div className="space-y-6">
          <div className="rounded-2xl border bg-slate-50 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Campanha gerada</h2>
              {campanha && (
                <button
                  onClick={copiarTexto}
                  className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-700"
                >
                  {copiado ? "✓ Copiado!" : "Copiar"}
                </button>
              )}
            </div>

            {campanha ? (
              <pre className="whitespace-pre-wrap text-sm text-slate-700">{campanha}</pre>
            ) : (
              <p className="text-sm text-slate-500">
                Preencha o formulário e clique em "Gerar campanha" para ver o resultado aqui.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Histórico */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-slate-900">Histórico</h2>
        {historico.length === 0 ? (
          <p className="mt-2 text-sm text-slate-500">
            Nenhuma campanha gerada ainda.
          </p>
        ) : (
          <div className="mt-4 space-y-3">
            {historico.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border bg-white p-4"
              >
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900">{item.tema}</p>
                  <p className="text-xs text-slate-500">{item.data}</p>
                </div>
                <button
                  onClick={() => carregarDoHistorico(item)}
                  className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-200"
                >
                  Recarregar
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
