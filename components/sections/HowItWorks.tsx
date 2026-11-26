import { WhatsAppIcon } from "../ui/WhatsAppIcon";
import { whatsappUrl } from "../../config/site";

export function HowItWorks() {
  return (<>
    <section id="como-funciona" className="work">
      <div className="work-image">
        <div className="image-label">
          <span>O VALOR ESTÁ NO PROCESSO</span>
          <strong>Trabalho de verdade.<br />Resultado que se vê.</strong>
        </div>
      </div>
      <div className="work-content">
        <div className="eyebrow light">
          <span /> SIMPLES DE ENTENDER
        </div>
        <h2>Uma boa madeira começa com um <em>bom corte.</em>
        </h2>
        <p>Conheça o equipamento, veja a serraria em funcionamento e converse com quem entende do produto antes de decidir.</p>
        <div className="steps">
          <div>
            <span>01</span>
            <p>
              <strong>Conheça a máquina</strong>Veja os vídeos e descubra a proposta da serraria móvel.</p>
          </div>
          <div>
            <span>02</span>
            <p>
              <strong>Conte o que você precisa</strong>Fale sobre sua atividade, sua cidade e suas dúvidas.</p>
          </div>
          <div>
            <span>03</span>
            <p>
              <strong>Receba as informações</strong>Consulte características, valores e condições disponíveis.</p>
          </div>
        </div>
        <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">
          <WhatsAppIcon width={19} height={19} /> Conversar no WhatsApp</a>
      </div>
    </section>
  </>);
}
