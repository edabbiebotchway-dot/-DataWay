import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Download, Send, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Send className="h-4 w-4" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Start Your
            <span className="text-gradient"> Next Project?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how AI-powered solutions can transform your business. I'm available for freelance projects, consulting, and full-time opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send Me a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input 
                      placeholder="John" 
                      className="border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input 
                      placeholder="Doe" 
                      className="border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@company.com" 
                    className="border-border/50 focus:border-primary transition-smooth"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company & Role
                  </label>
                  <Input 
                    placeholder="Tech Startup, CEO" 
                    className="border-border/50 focus:border-primary transition-smooth"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Type
                  </label>
                  <select className="w-full h-10 px-3 py-2 border border-border/50 rounded-md bg-background text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-smooth">
                    <option>Select project type...</option>
                    <option>AI/Analytics Solution</option>
                    <option>Web Development</option>
                    <option>Digital Marketing Strategy</option>
                    <option>Business Intelligence Dashboard</option>
                    <option>Process Automation</option>
                    <option>Other/Consultation</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project, timeline, and goals..."
                    rows={4}
                    className="border-border/50 focus:border-primary transition-smooth resize-none"
                  />
                </div>

                <Button variant="cta" size="lg" className="w-full group">
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            {/* Direct contact */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Direct Contact
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-card-foreground">Email</div>
                    <div className="text-muted-foreground">hello@yourname.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-card-foreground">Schedule a Call</div>
                    <div className="text-muted-foreground">calendly.com/yourname</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-card-foreground">Location</div>
                    <div className="text-muted-foreground">San Francisco, CA (Remote)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Connect With Me
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-auto p-4 justify-start group">
                  <Linkedin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <div className="ml-3 text-left">
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">Professional</div>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-auto p-4 justify-start group">
                  <Github className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <div className="ml-3 text-left">
                    <div className="font-medium">GitHub</div>
                    <div className="text-sm text-muted-foreground">Code</div>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-auto p-4 justify-start group">
                  <Twitter className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <div className="ml-3 text-left">
                    <div className="font-medium">Twitter</div>
                    <div className="text-sm text-muted-foreground">Insights</div>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-auto p-4 justify-start group">
                  <Download className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <div className="ml-3 text-left">
                    <div className="font-medium">Resume</div>
                    <div className="text-sm text-muted-foreground">PDF</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-hero rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Current Availability
              </h3>
              <p className="text-white/90 mb-6">
                I'm currently accepting new projects starting in January 2024. Let's discuss your timeline and requirements.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-medium">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;