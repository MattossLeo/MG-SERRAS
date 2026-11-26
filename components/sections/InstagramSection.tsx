import { Instagram } from "lucide-react";
import { site } from "../../config/site";

export function InstagramSection() {
  return (<>
    <section className="instagram-section wrap">
      <div>
        <div className="eyebrow">
          <span /> ACOMPANHE DE PERTO
        </div>
        <h2>Veja a MG Serras<br />
          <em>em ação.</em>
        </h2>
        <p>Máquina trabalhando, madeira ganhando forma e um pouco do nosso dia a dia. Acompanhe nossos vídeos no Instagram.</p>
        <a className="button dark" href={site.instagram} target="_blank" rel="noreferrer">
          <Instagram size={19} /> Acessar @mgserras</a>
      </div>
      <div className="insta-card">
        <div className="insta-overlay">
          <Instagram size={30} />
          <strong>@mgserras</strong>
          <span>Conheça nosso trabalho</span>
        </div>
      </div>
    </section>
  </>);
}
