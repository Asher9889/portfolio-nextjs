import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <Navigation />
      <Hero />
      <ProjectShowcase />
    </main>
  );
}
