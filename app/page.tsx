import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import ProjectGrid from "@/components/ProjectGrid";
import LandingPage from "@/components/LandingPage";
import { TooltipProvider } from "@/components/animate-ui/primitives/radix/tooltip";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";



export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      {/* <TooltipProvider> */}
        <Hero />

        <ProjectShowcase />
        {/* <Stats /> */}
        {/* <ProjectGrid /> */}
        {/* <LandingPage /> */}
        <AboutMe />  { /* Multiple components */ }
        <Contact />
        <Footer />

        
      {/* </TooltipProvider> */}
    </main>
  );
}
