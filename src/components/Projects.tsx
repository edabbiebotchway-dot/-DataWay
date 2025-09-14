import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp, Zap, Brain, Globe } from "lucide-react";
import projectAnalytics from "@/assets/project-analytics.jpg";
import projectMarketing from "@/assets/project-marketing.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectSaas from "@/assets/project-saas.jpg";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered E-commerce Analytics Platform",
      description: "Built a comprehensive analytics dashboard that increased client revenue by 40% through AI-driven insights and automated reporting.",
      image: projectAnalytics,
      technologies: ["Python", "React", "OpenAI API", "PostgreSQL", "Tailwind CSS"],
      results: [
        "40% increase in revenue",
        "60% reduction in analysis time", 
        "Real-time insights for 10K+ products"
      ],
      category: "AI & Analytics",
      icon: Brain,
      gradient: "from-primary to-primary-glow",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Digital Marketing Automation Suite",
      description: "Created an integrated marketing platform that automated campaign management, resulting in 300% improvement in lead generation efficiency.",
      image: projectMarketing, 
      technologies: ["Next.js", "Node.js", "Google Analytics API", "Stripe", "MongoDB"],
      results: [
        "300% improvement in lead generation",
        "85% reduction in manual tasks",
        "ROI tracking for $2M+ in ad spend"
      ],
      category: "Marketing Tech",
      icon: TrendingUp,
      gradient: "from-accent to-accent-glow",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real-time Business Intelligence Dashboard",
      description: "Developed a custom BI solution that processes 100K+ data points daily, providing actionable insights for strategic decision making.",
      image: projectDashboard,
      technologies: ["React", "Python", "FastAPI", "Redis", "Chart.js", "AWS"],
      results: [
        "100K+ data points processed daily",
        "90% faster decision making",
        "25% cost reduction in operations"
      ],
      category: "Data Solutions",
      icon: Zap,
      gradient: "from-primary-glow to-accent",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Multi-tenant SaaS Web Application",
      description: "Architected and built a scalable SaaS platform serving 1000+ businesses with advanced user management and billing integration.",
      image: projectSaas,
      technologies: ["TypeScript", "React", "Supabase", "Stripe", "Vercel"],
      results: [
        "1000+ active business users",
        "99.9% uptime reliability",
        "$500K+ in processed payments"
      ],
      category: "Web Development",
      icon: Globe,
      gradient: "from-accent to-primary",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Zap className="h-4 w-4" />
            <span className="text-sm font-medium">Featured Work</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Projects That Make
            <span className="text-gradient"> Impact</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real solutions for real businesses. Each project combines technical excellence with measurable business outcomes.
          </p>
        </div>

        {/* Projects grid */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={project.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Project image */}
                <div className={`${!isEven ? 'lg:col-start-2' : ''} group`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-medium hover:shadow-strong transition-smooth">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                    
                    {/* Category badge */}
                    <div className={`absolute top-6 left-6 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-medium`}>
                      <IconComponent className="h-4 w-4" />
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Project content */}
                <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-6`}>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Results:</h4>
                    {project.results.map((result) => (
                      <div key={result} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-muted rounded-full text-sm font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 pt-4">
                    <Button 
                      variant="default" 
                      className="group"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      View Live
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <Button 
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in seeing more work or discussing a project?
          </p>
          <Button 
            variant="default" 
            size="lg" 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Talk About Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;