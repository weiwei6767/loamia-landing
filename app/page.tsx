import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Problem } from "@/components/Problem";
import { Modules } from "@/components/Modules";
import { Differentiation } from "@/components/Differentiation";
import { DualState } from "@/components/DualState";
import { Pricing } from "@/components/Pricing";
import { Founder } from "@/components/Founder";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <Problem />
      <Modules />
      <Differentiation />
      <DualState />
      <Pricing />
      <Founder />
      <Waitlist />
      <Footer />
    </main>
  );
}
