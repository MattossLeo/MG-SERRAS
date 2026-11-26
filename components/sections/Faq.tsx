import { ArrowUpRight, ChevronDown } from "lucide-react";
import { whatsappUrl, faqs } from "../../config/site";

export function Faq() {
  return (<>
    <section id="duvidas" className="faq section">
      <div className="wrap faq-grid">
        <div>
          <div className="eyebrow">
            <span /> ESTAMOS AQUI PARA AJUDAR
          </div>
          <h2>Ficou alguma<br />
            <em>dúvida?</em>
          </h2>
          <p>Se não encontrar sua resposta aqui, é só chamar nossa equipe.</p>
          <a className="inline-link" href={whatsappUrl} target="_blank" rel="noreferrer">Conversar com a MG Serras <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="faq-list">
          {faqs.map(({ question, answer }) =>
            <details key={question}>
              <summary>{question}<ChevronDown size={20} />
              </summary>
              <p>{answer}</p>
            </details>)}
        </div>
      </div>
    </section>
  </>);
}
