import { Cta, Footer } from "@/components/closing";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Platform } from "@/components/platform";
import { Roles } from "@/components/roles";
import { UseCases } from "@/components/use-cases";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Roles />
        <UseCases />
        <Platform />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
