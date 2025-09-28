import { Heart, Users, FileText, Award } from "lucide-react";

const Volunteering = () => {
  const volunteerActivities = [
    {
      title: "Apoio à Secretaria Escolar",
      organization: "Faculdade Imaculada Conceição do Recife (FICR)",
      description: "Suporte administrativo e organizacional para credenciamento institucional.",
      impact: "Melhoria nos cadastros e processos internos da instituição",
      skills: ["Organização", "Cadastro em form", "Atendimento", "Recepção"],
      icon: FileText
    },
    {
      title: "Comissão Própria de Avaliação (CPA)",
      organization: "Faculdade Imaculada Conceição do Recife (FICR)",
      description: "Colaboração na avaliação institucional.",
      impact: "Contribuição para melhoria contínua da qualidade educacional",
      skills: ["Avaliação CPA", "Contribuição", "Recepção"],
      icon: Award
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2 className="section-title">Voluntariado</h2>
          <p className="section-subtitle">
            Contribuições para melhoria de processos educacionais e institucionais
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {volunteerActivities.map((activity, index) => {
            const IconComponent = activity.icon;
            
            return (
              <div 
                key={index} 
                className="portfolio-card hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex flex-col items-center md:items-start">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {activity.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{activity.organization}</span>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {activity.description}
                    </p>

                    {/* Impact */}
                    <div className="mb-4 p-4 bg-skill-accent rounded-lg">
                      <div className="flex items-start gap-2">
                        <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-primary mb-1">Impacto</h4>
                          <p className="text-sm text-foreground">{activity.impact}</p>
                        </div>
                      </div>
                    </div>

                    {/* Skills Developed */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm">
                        Competências Desenvolvidas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activity.skills.map((skill) => (
                          <span key={skill} className="tech-badge text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Values Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="portfolio-card bg-gradient-card text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Heart className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold text-primary">
                Compromisso Social
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              O voluntariado me proporcionou experiências valiosas em gestão de processos, 
              trabalho em equipe e comprometimento com a qualidade. Essas vivências complementam 
              minha formação técnica e reforçam minha dedicação à melhoria contínua.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">Responsabilidade</div>
                <p className="text-sm text-muted-foreground">Compromisso com resultados de qualidade</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">Colaboração</div>
                <p className="text-sm text-muted-foreground">Trabalho efetivo em equipe</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">Melhoria</div>
                <p className="text-sm text-muted-foreground">Foco na melhoria contínua</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;