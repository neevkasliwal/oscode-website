import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Events from "@/components/Events";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] selection:bg-cyan-accent selection:text-[#0B0F19]">
      <Hero />
      <About />
      <Team />
      <Events />
      <Contact />
    </main>
  );
}
