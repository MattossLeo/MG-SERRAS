import { WhatsAppIcon } from "../ui/WhatsAppIcon";
import { whatsappUrl } from "../../config/site";

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-image" />
      <div className="hero-shade" />
      <div className="wrap hero-content">
        <div className="eyebrow light"><span /> SERRARIA MÓVEL MG SERRAS</div>
        <h1>Transforme toras em madeira <em>para o seu trabalho.</em></h1>
        <p>Conheça a serraria móvel MG Serras. Fale diretamente com nossa equipe para tirar dúvidas, consultar as características e pedir seu orçamento.</p>
        <div className="hero-actions">
          <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer"><WhatsAppIcon width={20} height={20} /> Solicitar orçamento no WhatsApp</a>
        </div>
        <div className="hero-trust">Atendimento direto <span>•</span> Informações e condições pelo WhatsApp</div>
      </div>
    </section>
  );
}
