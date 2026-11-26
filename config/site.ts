/** Dados comerciais centralizados para facilitar futuras atualizações. */
export const site = {
  name: "MG Serras",
  instagram: "https://www.instagram.com/mgserras/",
  whatsappNumber: "5531971137561",
  whatsappMessage: "Olá! Quero saber mais sobre a serraria móvel MG Serras.",
} as const;

export const whatsappUrl = `https://api.whatsapp.com/send?phone=${site.whatsappNumber}&text=${encodeURIComponent(site.whatsappMessage)}`;

export const faqs = [
  { question: "Como faço para receber um orçamento?", answer: "Clique em um dos botões de WhatsApp e conte para nossa equipe o que você precisa. Assim, podemos apresentar as opções e condições disponíveis." },
  { question: "A serraria é indicada para qual tipo de trabalho?", answer: "A serraria móvel é uma solução para quem busca transformar toras em peças de madeira. Converse conosco sobre sua rotina e o tipo de trabalho que deseja realizar." },
  { question: "Quais são as medidas e especificações da máquina?", answer: "As medidas, configurações e demais detalhes devem ser consultados diretamente com nossa equipe, para que você receba informações atualizadas." },
  { question: "Como funciona a entrega?", answer: "As condições e a disponibilidade de entrega variam conforme o destino. Informe sua cidade e estado ao solicitar seu orçamento." },
] as const;
