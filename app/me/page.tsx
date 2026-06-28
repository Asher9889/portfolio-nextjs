import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ProjectShowcase from "@/components/ProjectShowcase";
import Stats from "@/components/Stats";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const MePage = () => {
    return (
        <>
            <Navigation />
            <Hero />
            <ProjectShowcase />
            <Stats />
            {/* <ProjectGrid /> */}
            {/* <LandingPage /> */}
            <AboutMe />  { /* Multiple components */}
            <Contact />
            <Footer />
            {/* </TooltipProvider> */}
        </>

    );
};

export default MePage;