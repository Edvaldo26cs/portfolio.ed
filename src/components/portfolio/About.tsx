import { User, Target, Lightbulb, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Foco em Qualidade",
      description: "Comprometido com a excelência em cada teste realizado, garantindo produtos robustos e confiáveis."
    },
    {
      icon: Lightbulb,
      title: "Aprendizado Contínuo",
      description: "Sempre em busca de novas metodologias e ferramentas para aprimorar processos de QA."
    },
    {
      icon: TrendingUp,
      title: "Melhoria Contínua",
      description: "Acredito que cada bug encontrado é uma oportunidade de tornar o sistema mais robusto."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-subtitle">
            Conheça minha trajetória e paixão pela qualidade de software
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Content */}
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">QA Tester em Formação</h3>
                  <p className="text-muted-foreground">Especialista em Qualidade de Software</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p style={{ textAlign: 'justify' }}>
                  Sou um profissional apaixonado pela área de <strong className="text-foreground">QA</strong>, 
                  com sólida experiência em suporte técnico e crescente expertise em testes de software 
                  manuais e automatizados.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Minha jornada começou no suporte técnico, onde desenvolvi habilidades essenciais para 
                  identificar e resolver problemas complexos. Essa experiência me proporcionou uma 
                  <strong className="text-foreground"> visão holística dos sistemas</strong> e a importância 
                  da qualidade na experiência do usuário.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Atualmente, estou em constante <strong className="text-foreground">aprendizado e evolução</strong>, 
                  aplicando metodologias ágeis e explorando ferramentas de automação para garantir que 
                  os sistemas atendam aos mais altos padrões de qualidade e confiabilidade.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Meu objetivo é contribuir para a criação de software robusto e livre de defeitos, 
                  utilizando tanto <strong className="text-foreground">testes manuais criteriosos</strong> quanto <strong className="text-foreground">automação inteligente</strong> para 
                  otimizar processos e garantir entregas de excelência.
                </p>
              </div>
            </div>

            {/* Profile Stats/Visual */}
            <div className="animate-scale-in">
              <div className="portfolio-card bg-gradient-card text-center">
                <h4 className="text-xl font-semibold text-primary mb-6">
                  Minha Filosofia de Trabalho
                </h4>
                
                <div className="space-y-6">
                  {highlights.map((highlight, index) => {
                    const IconComponent = highlight.icon;
                    
                    return (
                      <div key={index} className="flex items-start gap-4 text-left">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">{highlight.title}</h5>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="skill-card text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-primary mb-2">1+</div>
              <div className="text-muted-foreground mb-2">Anos de Experiência</div>
              <div className="text-sm text-muted-foreground">Em suporte técnico e resolução de problemas</div>
            </div>
            
            <div className="skill-card text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground mb-2">Problemas Resolvidos</div>
              <div className="text-sm text-muted-foreground">Entre suporte técnico e manutenção de sistemas</div>
            </div>
            
            <div className="skill-card text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground mb-2">Dedicação</div>
              <div className="text-sm text-muted-foreground">Compromisso com qualidade e aprendizado contínuo</div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-16 portfolio-card bg-primary/5 border-l-4 border-primary text-center max-w-4xl mx-auto">
            <blockquote className="text-lg italic text-muted-foreground mb-4">
              "A qualidade não é um acidente; ela é sempre o resultado de um esforço inteligente, 
              habilidoso e direcionado. Em cada teste que realizo, busco não apenas encontrar defeitos, 
              mas contribuir para a criação de soluções que realmente façam a diferença na vida dos usuários."
            </blockquote>
            <div className="text-primary font-semibold">— Minha Visão sobre QA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;