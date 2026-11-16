"use client";

import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "5541992296623";

const MODULE_NAMES: Record<string, string> = {
  "ia-360": "IA 360",
};

export default function TesteGratisForm({ moduleKey }: { moduleKey: string }) {
  const moduleName = MODULE_NAMES[moduleKey] || moduleKey || "Módulo escolhido";

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
    <form onSubmit={handleSubmit} className="mt-8 space-y-5 rounded-2xl border bg-white p-6">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">Nome completo</label>
        <input id="name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" className="w-full rounded-xl border border-slate-300 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none" />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">E-mail</label>
        <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="voce@exemplo.com" className="w-full rounded-xl border border-slate-300 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none" />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium">WhatsApp</label>
        <input id="phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(41) 99999-9999" className="w-full rounded-xl border border-slate-300 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none" />
      </div>
      <button type="submit" className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-700">Solicitar teste grátis</button>
      <p className="text-center text-xs text-slate-500">Ao enviar, você será direcionado ao WhatsApp com os dados preenchidos.</p>
    </form>
  );
}
