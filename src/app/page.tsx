import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
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
      </main>
    </>
  );
}
