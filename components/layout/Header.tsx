import { WhatsAppIcon } from "../ui/WhatsAppIcon";
import { whatsappUrl } from "../../config/site";

export function Header() {
  return (
    <header className="header wrap">
      <a className="logo" href="#inicio" aria-label="MG Serras, início"><span className="logo-mark">MG<span>.</span></span><span>SERRAS<small>SERRARIA MÓVEL</small></span></a>
      <span className="header-note">Serraria móvel para quem trabalha com madeira</span>
      <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer"><WhatsAppIcon width={18} height={18} /> Pedir orçamento</a>
    </header>
  );
}
