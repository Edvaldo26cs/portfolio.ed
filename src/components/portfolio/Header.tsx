import { useState } from "react";
import { Menu, X} from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigation = [
    { name: 'Sobre', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experiência', id: 'experience' },
    { name: 'Formação', id: 'education' },
    { name: 'Projetos', id: 'projects' },
    { name: 'Contato', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <img
          src="/edc.png" 
          alt="Rede Globo" 
          className="h-8 w-8 object-contain" 
          />
          <div className="text-xl font-bold text-primary">
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/Edvaldo26cs?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/edvaldo-cavalcanti-da-silva-neto-74a550180/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a href="mailto:edvaldonetto@hotmail.com">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Mail className="h-5 w-5" />
            </Button>
          </a>
        </div>


          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </nav>
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-border">
              <a href="https://github.com/Edvaldo26cs?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/edvaldo-cavalcanti-da-silva-neto-74a550180/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a href="mailto:edvaldonetto@hotmail.com">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Mail className="h-5 w-5" />
            </Button>
          </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;