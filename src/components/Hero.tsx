import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Animated background elements */}  
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-glow/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-white/20 text-white mb-8 animate-fade-in">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-medium">Available for new opportunities</span>
        </div>
        
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 animate-fade-in-up">
          AI-Powered
          <br />
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-glow">
            Business Solutions
          </span>
        </h1>
        
        {/* Value proposition */}
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Digital Marketing Professional & Data Analyst helping tech startups and agencies 
          <strong className="text-white"> scale faster with AI-driven strategies</strong> and modern web solutions.
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            variant="hero" 
            size="lg" 
            className="group min-w-[200px]"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg" 
            className="min-w-[200px] bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Zap className="mr-2 h-5 w-5" />
            Let's Connect
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-white/70 text-sm">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">5+</div>
            <div className="text-white/70 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-white/70 text-sm">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;