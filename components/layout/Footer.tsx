import { WhatsAppIcon } from "../ui/WhatsAppIcon";
import { whatsappUrl, site } from "../../config/site";

export function Footer() {
  return (
    <>
      <footer><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} MG Serras</span><a href={site.instagram} target="_blank" rel="noreferrer">Acompanhe @mgserras no Instagram</a></div></footer>
      <a className="floating" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp"><WhatsAppIcon width={27} height={27} /></a>
    </>
  );
}
