import { GraduationCap, Calendar, BookOpen, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Análise e Desenvolvimento de Sistemas",
      institution: "Instituição de Ensino Superior",
      period: "2022 - Em andamento",
      status: "4º Período",
      type: "Tecnólogo",
      description: "Formação focada em desenvolvimento de software, análise de sistemas, banco de dados e metodologias ágeis.",
      highlights: [
        "Programação Orientada a Objetos",
        "Engenharia de Software",
        "Banco de Dados",
        "Metodologias Ágeis",
        "Qualidade de Software",
        "Arquitetura de Sistemas"
      ]
    },
    {
      degree: "Licenciatura Plena em Português e Inglês",
      institution: "Universidade",
      period: "2014 - 2018",
      status: "Concluído",
      type: "Licenciatura",
      description: "Formação em linguagens com foco em comunicação, interpretação de textos e metodologias de ensino.",
      highlights: [
        "Comunicação Efetiva",
        "Metodologias de Ensino",
        "Interpretação Textual",
        "Língua Inglesa intermediária",
        "Didática",
        "Análise Crítica"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2 className="section-title">Formação Acadêmica</h2>
          <p className="section-subtitle">
            Base sólida em tecnologia e comunicação para atuação profissional
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="portfolio-card hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon and Status */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium border ${
                    edu.status === 'Em andamento' 
                      ? 'bg-skill-accent text-primary border-primary/20' 
                      : 'bg-green-50 text-green-700 border-green-200'
                  }`}>
                    {edu.status}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        <span>{edu.type}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Principais Disciplinas e Competências
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight) => (
                        <span key={highlight} className="tech-badge">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Learning */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="portfolio-card bg-gradient-card text-center">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Aprendizado Contínuo
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Além da formação acadêmica, estou constantemente me atualizando através de 
              cursos online, documentações técnicas e projetos práticos para me manter 
              alinhado com as melhores práticas de QA e desenvolvimento.
            </p>
            
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="tech-badge">Cursos Online</span>
              <span className="tech-badge">Documentação Técnica</span>
              <span className="tech-badge">Projetos Práticos</span>
              <span className="tech-badge">Comunidades Tech</span>
              <span className="tech-badge">Certificações</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;