import { Calendar, MapPin, TrendingUp, Users, Wrench, Award } from "lucide-react";

const Experience = () => {
  const experience = {
    title: "Monitor de Sala de Informática",
    company: "Instituto Mix de Profissões",
    period: "2022 - 2024",
    location: "Presencial",
    achievements: [
      {
        icon: Users,
        metric: "200+",
        description: "Alunos ajudados com suporte técnico"
      },
      {
        icon: Wrench,
        metric: "100+",
        description: "Máquinas reinstaladas e reparadas com eficiência"
      },
      {
        icon: TrendingUp,
        metric: "40%",
        description: "Aumento no desempenho dos alunos após melhorias"
      },
      {
        icon: Award,
        metric: "100%",
        description: "Organização e manutenção de laboratório"
      }
    ],
    responsibilities: [
      "Suporte técnico especializado para mais de 200 alunos em softwares educacionais",
      "Diagnóstico e resolução de problemas de hardware e software",
      "Reinstalação e configuração de sistemas operacionais em laboratórios",
      "Manutenção preventiva e corretiva de equipamentos de informática",
      "Organização e otimização do ambiente de laboratório",
      "Organização do espaço físico e dos equipamentos",
      "Aplicação de provas e avaliações práticas",
    ]
  };

  return (
    <section id="experience" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2 className="section-title">Experiência Profissional</h2>
          <p className="section-subtitle">
            Trajetória consolidando expertise em suporte técnico e resolução de problemas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Card */}
          <div className="portfolio-card mb-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {experience.title}
                </h3>
                
                <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  {experience.company}
                </h4>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {experience.achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              
              return (
                <div 
                  key={index} 
                  className="skill-card text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">
                    {achievement.metric}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Responsibilities */}
          <div className="portfolio-card">
            <h4 className="text-xl font-semibold text-foreground mb-6">
              Principais Responsabilidades
            </h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              {experience.responsibilities.map((responsibility, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    {responsibility}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Developed */}
          <div className="mt-8 portfolio-card bg-gradient-card">
            <h4 className="text-xl font-semibold text-primary mb-4 text-center">
              Competências Desenvolvidas
            </h4>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "Resolução de Problemas",
                "Suporte Técnico",
                "Diagnóstico de Sistema",
                "Atendimento ao Cliente",
                "Gestão de Laboratório",
                "Manutenção Preventiva",
                "Elaboração de documentação",
                "Trabalho Sob Pressão"
              ].map((skill) => (
                <span key={skill} className="tech-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;