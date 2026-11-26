import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "MG Serras | Serraria móvel para madeira", description: "Conheça a serraria móvel MG Serras e fale diretamente com nossa equipe pelo WhatsApp." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR">
    <body>{children}</body>
  </html>;
}
