import { Header } from "../components/layout/Header";
import { Hero } from "../components/sections/Hero";
import { Introduction } from "../components/sections/Introduction";
import { HowItWorks } from "../components/sections/HowItWorks";
import { Faq } from "../components/sections/Faq";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Introduction />
      <HowItWorks />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
