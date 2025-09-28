import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="hero-title mb-6">
            QA Tester em Formação
          </h1>
          
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Apaixonado por qualidade de software e experiência do usuário
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Especialista em suporte técnico com foco em testes manuais e automatizados. 
              Comprometido com metodologias ágeis e automação para garantir excelência 
              em sistemas e aplicações.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="btn-primary px-8 py-3 text-lg"
              onClick={scrollToAbout}
            >
              Conhecer Meu Trabalho
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <a 
            href="https://drive.google.com/uc?export=download&id=1J6c_J_8qGIgCnfIbeZQVY-e_ZzvUCl2H" 
            target="_blank" 
            rel="noopener noreferrer"
           >
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-outline px-8 py-3 text-lg"
            >
              Download CV
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="portfolio-card hover-lift">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Alunos Assistidos</div>
            </div>
            
            <div className="portfolio-card hover-lift">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Máquinas Reparadas</div>
            </div>
            
            <div className="portfolio-card hover-lift">
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <div className="text-muted-foreground">Melhoria Performance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;