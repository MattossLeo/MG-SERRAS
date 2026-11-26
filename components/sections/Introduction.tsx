import { ArrowUpRight, Trees, Ruler, Settings2, MessageCircle } from "lucide-react";
import { site } from "../../config/site";

export function Introduction() {
  return (<>
    <section id="solucao" className="section wrap intro">
      <div>
        <div className="eyebrow">
          <span /> PARA QUEM FAZ ACONTECER
        </div>
        <h2>Mais possibilidades<br />para sua <em>madeira.</em>
        </h2>
      </div>
      <div className="intro-copy">
        <p>Da propriedade rural ao trabalho com madeira, cada tora carrega uma possibilidade. A serraria móvel MG Serras foi pensada para aproximar o corte de onde você precisa.</p>
        <a className="inline-link" href={site.instagram} target="_blank" rel="noreferrer">Veja a máquina em ação no Instagram <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
    <section className="feature-grid wrap">
      <article>
        <Trees />
        <h3>Para sua rotina</h3>
        <p>Uma alternativa para produtores rurais e quem trabalha com madeira.</p>
      </article>
      <article>
        <Ruler />
        <h3>Da tora à peça</h3>
        <p>Veja a transformação da madeira e converse conosco sobre sua necessidade de corte.</p>
      </article>
      <article>
        <Settings2 />
        <h3>Conheça os detalhes</h3>
        <p>Entenda a configuração da máquina e encontre informações para escolher com segurança.</p>
      </article>
      <article>
        <MessageCircle />
        <h3>Conversa direta</h3>
        <p>Tire suas dúvidas e solicite as condições diretamente com a MG Serras.</p>
      </article>
    </section>
  </>);
}
