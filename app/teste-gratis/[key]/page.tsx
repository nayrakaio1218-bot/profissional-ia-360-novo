"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "5541999999999";

const MODULE_NAMES: Record<string, string> = {};

export default function TesteGratisPage() {
  const params = useParams();
  const keyParam = params?.key;
  const key = Array.isArray(keyParam) ? keyParam[0] : (keyParam ?? "");
  const moduleName = MODULE_NAMES[key] || key || "Módulo escolhido";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = encodeURIComponent(
      `Olá! Quero testar grátis — 7 dias.\n\nMódulo: ${moduleName}\nNome: ${name}\nE-mail: ${email}\nTelefone: ${phone}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <Link href="/catalogo" className="text-sm text-indigo-600 hover:underline">
        ← Voltar ao catálogo
      </Link>

      <h1 className="mt-6 text-3xl font-semibold">Teste grátis — 7 dias</h1>
      <p className="mt-2 text-slate-500">
        Preencha os dados abaixo e receba o acesso de teste ao módulo{" "}
        <strong>{moduleName}</strong>.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5 rounded-2xl border bg-white p-6">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            Nome completo
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
            className="w-full rounded-xl border border-slate-300 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="voce@exemplo.com"
            className="w-full rounded-xl border border-slate-300 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium">
            WhatsApp
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(41) 99999-9999"
            className="w-full rounded-xl border border-slate-300 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          Solicitar teste grátis
        </button>

        <p className="text-center text-xs text-slate-500">
          Ao enviar, você será direcionado ao WhatsApp com os dados preenchidos.
        </p>
      </form>
    </main>
  );
}
