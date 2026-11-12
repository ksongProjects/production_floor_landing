import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Platform } from "@/components/platform";
import { Roadmap } from "@/components/roadmap";
import { Roles } from "@/components/roles";
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
        <Roles />
        <Workflow />
        <Features />
        <Platform />
        <Roadmap />
      </main>
    </>
  );
}
