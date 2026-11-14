import { Cta, Footer } from "@/components/closing";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Roadmap } from "@/components/roadmap";
import { Workflow } from "@/components/workflow";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Workflow />
        <Features />
        <Roadmap />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
