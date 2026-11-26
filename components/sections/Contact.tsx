import { LeadForm } from "./LeadForm";

export function Contact() {
  return (
    <section className="closing" id="orcamento">
      <div className="wrap closing-inner">
        <div className="closing-copy">
          <div className="eyebrow light"><span /> SOLICITE AS CONDIÇÕES</div>
          <h2>Vamos encontrar a solução para o <em>seu trabalho.</em></h2>
          <p>Conte para a gente o que você precisa. Nossa equipe vai ajudar com informações sobre a máquina, valores e entrega.</p>
          <ul><li>Converse diretamente com a MG Serras</li><li>Tire suas dúvidas sobre a máquina</li><li>Consulte valores e entrega para sua região</li></ul>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
