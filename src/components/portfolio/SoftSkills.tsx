import { 
  MessageCircle, 
  Users, 
  Eye, 
  Zap, 
  FileSearch, 
  Clock,
  Target,
  Lightbulb
} from "lucide-react";

const SoftSkills = () => {
  const softSkills = [
    {
      title: "Comunicação Assertiva",
      icon: MessageCircle,
      description: "Habilidade para transmitir informações técnicas de forma clara e objetiva para diferentes públicos."
    },
    {
      title: "Trabalho em Equipe",
      icon: Users,
      description: "Experiência colaborando em ambientes multidisciplinares e metodologias ágeis."
    },
    {
      title: "Atenção aos Detalhes",
      icon: Eye,
      description: "Capacidade analítica para identificar bugs, inconsistências e oportunidades de melhoria."
    },
    {
      title: "Adaptabilidade",
      icon: Zap,
      description: "Flexibilidade para trabalhar com diferentes tecnologias, metodologias e contextos."
    },
    {
      title: "Análise de Requisitos",
      icon: FileSearch,
      description: "Competência para interpretar e validar requisitos funcionais e não funcionais."
    },
    {
      title: "Gestão de Tempo",
      icon: Clock,
      description: "Organização eficiente de tarefas e priorização baseada em critérios de impacto."
    },
    {
      title: "Foco em Resultados",
      icon: Target,
      description: "Orientação para entrega de valor e melhoria contínua da qualidade do produto."
    },
    {
      title: "Pensamento Crítico",
      icon: Lightbulb,
      description: "Capacidade de análise lógica para resolução de problemas complexos."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2 className="section-title">Competências Interpessoais</h2>
          <p className="section-subtitle">
            Habilidades comportamentais que complementam minha expertise técnica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {softSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            
            return (
              <div 
                key={skill.title} 
                className="skill-card text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-skill-accent rounded-full mb-4">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="font-semibold text-foreground mb-3">{skill.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="portfolio-card bg-gradient-card text-center">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Abordagem Colaborativa
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Acredito que a qualidade é responsabilidade de toda a equipe. Minha experiência 
              no suporte técnico me ensinou a importância da empatia, paciência e comunicação 
              clara para resolver problemas e garantir a satisfação do usuário final.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;