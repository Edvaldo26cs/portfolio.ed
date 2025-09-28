import { Github, Linkedin, Mail } from "lucide-react";
import { ArrowUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">QA Tester</h3>
            <p className="text-background/80 leading-relaxed mb-4">
              Especialista em qualidade de software, comprometido com a excelência 
              em testes manuais e automatizados.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Edvaldo26cs?tab=repositories" target="_blank" rel="noopener noreferrer"> 
              <Button
                variant="ghost" 
                size="icon" 
                className="hover:bg-background/10 text-background hover:text-background">
                <Github className="h-5 w-5" />
              </Button>
              </a>

              <a href="https://www.linkedin.com/in/edvaldo-cavalcanti-da-silva-neto-74a550180/" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-background/10 text-background hover:text-background">
                <Linkedin className="h-5 w-5" />
              </Button>
              </a>

              <a href="mailto:edvaldonetto@hotmail.com">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-background/10 text-background hover:text-background"
              >
                <Mail className="h-5 w-5" />
              </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <nav className="space-y-2">
              {[
                { name: 'Sobre', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Experiência', id: 'experience' },
                { name: 'Projetos', id: 'projects' },
                { name: 'Contato', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    const element = document.getElementById(item.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-background/80 hover:text-background transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-background/80">
              <div>
                <strong>Email:</strong> edvaldonetto@hotmail.com
              </div>
              <div>
                <strong>Localização:</strong> Recife, PE - Brasil
              </div>
              <div>
                <strong>Status:</strong> Aberto para oportunidades
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-background/80">
              <span>© {currentYear} todos os direitos reservados</span>
            </div>
            
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="hover:bg-background/10 text-background hover:text-background"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Voltar ao Topo
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;