import Hero from "@/features/home/components/hero";
import ProjectShowcase from "@/features/home/components/projects";
import AboutMe from "@/features/home/components/about";
import Contact from "@/features/home/components/contact";
import Footer from "@/features/home/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <Hero />
      <ProjectShowcase />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  );
}
