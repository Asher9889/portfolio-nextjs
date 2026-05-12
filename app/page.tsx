import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import ProjectGrid from "@/components/ProjectGrid";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <Navigation />
      <Hero />
      <ProjectShowcase />
      <ProjectGrid />
      <LandingPage />
    </main>
  );
}
