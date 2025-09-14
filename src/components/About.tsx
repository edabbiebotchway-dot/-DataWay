import { Button } from "@/components/ui/button";
import { Download, MapPin, Mail, Calendar, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Heart className="h-4 w-4" />
                <span className="text-sm font-medium">About Me</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Turning Data Into
                <span className="text-gradient"> Digital Success</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Hi, I'm Green Data</strong> — a digital marketing professional and data analyst with a passion for leveraging AI to solve real business challenges. My journey began in traditional marketing, but I quickly realized the transformative potential of combining data science with creative strategy.
              </p>
              
              <p>
                Over the past 5+ years, I've helped <strong className="text-foreground">50+ startups and agencies</strong> scale their operations by building AI-powered solutions that automate processes, uncover insights, and drive measurable growth. From predictive analytics dashboards to automated marketing campaigns, I bridge the gap between technical possibility and business impact.
              </p>
              
              <p>
                What sets me apart is my ability to <strong className="text-foreground">translate complex data into actionable strategies</strong> that non-technical teams can understand and implement. I believe the best solutions are those that empower people, not replace them.
              </p>
            </div>

            {/* Personal details */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>Available remotely</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Open to opportunities</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button variant="cta" size="lg" className="group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </Button>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl opacity-10 blur-3xl" />
            
            {/* Main card */}
            <div className="relative bg-card rounded-3xl p-8 shadow-strong border border-border/50">
              {/* Profile placeholder */}
              <div className="w-32 h-32 bg-gradient-hero rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <div className="text-4xl font-bold text-white">[YN]</div>
              </div>
              
              {/* Quick stats */}
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    Digital Marketing & AI Specialist
                  </h3>
                  <p className="text-muted-foreground">
                    Building the future of business automation
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Availability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;