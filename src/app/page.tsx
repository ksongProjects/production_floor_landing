import { Cta, Footer } from "@/components/closing";
import { Features } from "@/components/features";
import { Gaps } from "@/components/gaps";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Pilot } from "@/components/pilot";
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
        <Gaps />
        <Workflow />
        <Features />
        <Pilot />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
