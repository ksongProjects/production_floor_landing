import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Roles } from "@/components/roles";

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
      </main>
    </>
  );
}
