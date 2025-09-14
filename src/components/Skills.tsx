import { Brain, Code, TrendingUp, Zap, Database, Palette, BarChart3, Rocket } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Analytics",
      description: "Leveraging cutting-edge AI tools to drive business intelligence and automation",
      icon: Brain,
      skills: [
        "ChatGPT & Claude Integration",
        "Python Data Analysis", 
        "Machine Learning Models",
        "Business Intelligence",
        "Predictive Analytics",
        "Process Automation"
      ],
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "Web Development", 
      description: "Building modern, responsive web applications with the latest technologies",
      icon: Code,
      skills: [
        "React & TypeScript",
        "Next.js & Tailwind CSS",
        "Node.js & APIs",
        "Database Design",
        "Cloud Deployment",
        "Performance Optimization"
      ],
      gradient: "from-accent to-accent-glow"
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that deliver measurable results",
      icon: TrendingUp,
      skills: [
        "SEO & Content Strategy",
        "Google Analytics & Ads",
        "Social Media Marketing",
        "Email Automation", 
        "Conversion Optimization",
        "Growth Hacking"
      ],
      gradient: "from-primary-glow to-accent"
    }
  ];

  const tools = [
    { name: "Python", category: "AI/Data" },
    { name: "React", category: "Frontend" },
    { name: "Google Analytics", category: "Marketing" },
    { name: "Figma", category: "Design" },
    { name: "PostgreSQL", category: "Database" },
    { name: "ChatGPT", category: "AI" },
    { name: "TypeScript", category: "Development" },
    { name: "Tailwind", category: "Styling" }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Zap className="h-4 w-4" />
            <span className="text-sm font-medium">Core Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills That Drive
            <span className="text-gradient"> Results</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combining technical expertise with business acumen to deliver solutions that matter
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="group bg-card rounded-2xl p-8 shadow-soft hover-lift border border-border/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${category.gradient} mb-6`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {category.description}  
                </p>
                
                {/* Skills list */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-card-foreground font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools & Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Tools & Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <div 
                key={tool.name}
                className="px-4 py-2 bg-card rounded-full border border-border/50 shadow-soft hover-lift transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="font-medium text-card-foreground">{tool.name}</span>
                <span className="text-muted-foreground text-sm ml-2">• {tool.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;