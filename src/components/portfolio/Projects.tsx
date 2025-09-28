import { ExternalLink, Github, Play, Code, TestTube, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Automação de Testes com Selenium",
      description: "Suite completa de testes automatizados para aplicações web, incluindo testes funcionais, de regressão e integração.",
      technologies: ["Python", "Selenium WebDriver"],
      features: [
        "Testes funcionais automatizados",
        "Testes em formulários",
        "Relatórios detalhados",
        "Código Pyautogui para automação de tarefas"
      ],
      icon: TestTube,
      color: "bg-blue-500"
    },
    {
      title: "Automação com Cypress",
      description: "Framework de testes end-to-end abrangendo testes de caixa branca, preta, cinza, usabilidade e sistema.",
      technologies: ["Javascript", "Cypress"],
      features: [
        "Testes E2E interativos",
        "Debugging visual",
        "Relatórios em tempo real",
        "Testes em código complexo"
      ],
      icon: Code,
      color: "bg-green-500"
    },
    {
      title: "Aplicações Web Front-end",
      description: "Desenvolvimento de interfaces web responsivas e modernas utilizando tecnologias front-end atuais.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React"],
      features: [
        "Design responsivo",
        "Interfaces interativas",
        "Otimização de performance",
        "Boas práticas UX/UI"
      ],
      icon: Globe,
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2 className="section-title">Projetos e Portfólio</h2>
          <p className="section-subtitle">
            Projetos práticos demonstrando competências em automação de testes e desenvolvimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            
            return (
              <div 
                key={index} 
                className="portfolio-card hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${project.color} rounded-lg`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">
                    Tecnologias
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">
                    Principais Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Portfolio Link */}
        <div className="mt-16 text-center">
          <div className="portfolio-card max-w-2xl mx-auto bg-gradient-card">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Github className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold text-primary">
                Portfólio Completo
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Explore todos os meus projetos e contribuições no GitHub. 
              Você encontrará códigos-fonte, documentação detalhada e 
              exemplos práticos de automação de testes.
            </p>
            
            <Button className="btn-primary">
              <Github className="h-5 w-5 mr-2" />
              Ver Repositórios no GitHub
            </Button>
          </div>
        </div>

        {/* Future Projects Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Próximos Projetos
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="portfolio-card">
              <h4 className="font-semibold text-lg mb-3 text-primary">Monitoramento de ocorrências com IA</h4>
              <p className="text-muted-foreground">
                Desenvolvimento de framework em conjunto com IA para monitoramento 
                de ocorrências em aplicações web e geração automática de relatórios.
              </p>
            </div>
            
            <div className="portfolio-card">
              <h4 className="font-semibold text-lg mb-3 text-primary">A decidir</h4>
              <p className="text-muted-foreground">
                Criação de uma plataforma para gerenciamento de coleta de óleos 
                usados, integrando funcionalidades de rastreamento e relatórios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;