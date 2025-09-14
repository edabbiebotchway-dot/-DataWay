import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechStart Inc.",
      company: "Series A Startup",
      content: "The AI analytics platform [Name] built for us increased our revenue by 40% in just 3 months. Their ability to translate complex data into actionable insights is unmatched.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez", 
      role: "Marketing Director",
      company: "Growth Digital Agency",
      content: "Working with [Name] transformed our client reporting process. The automation suite they developed saved us 20+ hours per week and improved our client retention by 30%.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      role: "Founder & CEO",
      company: "E-commerce Startup", 
      content: "The predictive analytics dashboard [Name] created helps us forecast inventory needs with 95% accuracy. It's like having a crystal ball for our business decisions.",
      rating: 5,
      avatar: "EW"
    },
    {
      name: "David Park",
      role: "Head of Operations",
      company: "SaaS Platform",
      content: "The business intelligence solution exceeded our expectations. [Name] not only delivered on time but also provided training that empowered our entire team.",
      rating: 5,
      avatar: "DP"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Star className="h-4 w-4" />
            <span className="text-sm font-medium">Client Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Clients Say About
            <span className="text-gradient"> My Work</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it — here's what business leaders have to say about our collaborations
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-soft hover-lift border border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote icon */}
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-6">
                <Quote className="h-6 w-6 text-primary" />
              </div>
              
              {/* Content */}
              <blockquote className="text-lg text-card-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                
                {/* Details */}
                <div>
                  <div className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-sm font-medium text-primary">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/50">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">100%</div>
            <div className="text-muted-foreground">Project Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">4.9</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">50+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">24h</div>
            <div className="text-muted-foreground">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;