"use client";

import { useState, type FormEvent } from "react";
import { site } from "../../config/site";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

export function LeadForm() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [need, setNeed] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = `Olá! Meu nome é ${name}. Sou de ${city} e gostaria de saber mais sobre a serraria móvel MG Serras.${need ? ` Minha necessidade: ${need}.` : ""}`;
    window.open(`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <span className="form-kicker">FALE DIRETO COM A MG SERRAS</span>
      <h2>Peça seu orçamento</h2>
      <p>Preencha os dados para iniciar a conversa no WhatsApp.</p>
      <label htmlFor="lead-name">Seu nome</label>
      <input id="lead-name" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Como podemos chamar você?" required />
      <label htmlFor="lead-city">Cidade e estado</label>
      <input id="lead-city" value={city} onChange={(event) => setCity(event.target.value)} placeholder="Ex.: Belo Horizonte, MG" required />
      <label htmlFor="lead-need">O que você procura? <span>(opcional)</span></label>
      <textarea id="lead-need" rows={2} value={need} onChange={(event) => setNeed(event.target.value)} placeholder="Conte um pouco sobre seu trabalho" />
      <button className="button primary form-submit" type="submit"><WhatsAppIcon width={20} height={20} /> Conversar no WhatsApp</button>
      <small>Ao continuar, o WhatsApp abrirá com sua mensagem pronta.</small>
    </form>
  );
}
