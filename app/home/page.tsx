import Hero from "@/features/home/components/Hero";
import ProjectShowcase from "@/features/home/components/ProjectShowcase";
import AboutMe from "@/features/home/components/AboutMe";
import Contact from "@/features/home/components/Contact";
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
