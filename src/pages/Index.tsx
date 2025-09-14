import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Green Data</h3>
            <p className="text-background/80 max-w-2xl mx-auto">
              Digital Marketing Professional & Data Analyst specializing in AI-powered business solutions
            </p>
          </div>
          
          <div className="border-t border-background/20 pt-8">
            <p className="text-background/60 text-sm">
              © 2024 Green Data. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
