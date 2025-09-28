import { 
  Code, 
  TestTube, 
  Database, 
  GitBranch, 
  Globe, 
  FileText,
  Zap,
  CheckCircle
} from "lucide-react";

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: "Linguagens",
      icon: Code,
      skills: ["React", "JavaScript", "Python"]
    },
    {
      title: "Testes",
      icon: TestTube,
      skills: ["Testes Manuais", "Testes Automatizados", "Testes Funcionais", "Testes não Funcionais"]
    },
    {
      title: "Ferramentas",
      icon: Zap,
      skills: ["Selenium", "Cypress"]
    },
    {
      title: "Bancos de Dados",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Versionamento",
      icon: GitBranch,
      skills: ["Git", "GitHub"]
    },
    {
      title: "APIs",
      icon: Globe,
      skills: ["Postman", "REST APIs"]
    },
    {
      title: "Metodologias",
      icon: CheckCircle,
      skills: ["TDD", "Colaboração com o cliente", "Scrum"]
    },
    {
      title: "Documentação",
      icon: FileText,
      skills: ["Relatórios de Teste", "Documentação Técnica"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2 className="section-title">Competências Técnicas</h2>
          <p className="section-subtitle">
            Tecnologias e ferramentas que utilizo para garantir qualidade em software
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <div 
                key={category.title} 
                className="portfolio-card hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="tech-badge text-center w-full justify-center">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Áreas de Especialização
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="portfolio-card">
              <h4 className="font-semibold text-lg mb-3 text-primary">Automação de Testes</h4>
              <p className="text-muted-foreground">
                Desenvolvimento de scripts automatizados para testes funcionais, 
                de regressão e integração usando Selenium e Cypress.
              </p>
            </div>
            
            <div className="portfolio-card">
              <h4 className="font-semibold text-lg mb-3 text-primary">Metodologias Ágeis</h4>
              <p className="text-muted-foreground">
                Experiência com Scrum, práticas de TDD e integração 
                contínua para garantir qualidade no desenvolvimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;