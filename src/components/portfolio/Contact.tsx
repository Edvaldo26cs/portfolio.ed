import { Mail, Linkedin, Github, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "edvaldonetto@hotmail.com",
      action: "mailto:edvaldonetto@hotmail.com",
      description: "Resposta em até 24h"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "/in/edvaldo-cavalcanti-da-silva-neto",
      action: "https://www.linkedin.com/in/edvaldo-cavalcanti-da-silva-neto-74a550180/",
      description: "Vamos nos conectar"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "/edvaldo26cs",
      action: "https://github.com/Edvaldo26cs",
      description: "Confira meus projetos"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "(81) 98313-9072",
      action: "tel:+5581983139072",
      description: "WhatsApp disponível"
    }
  ];

  const collaborationTopics = [
    "Projetos de Automação de Testes",
    "Construção de websites",
    "Revisão de Código",
    "Startups de Tecnologia",
    "Oportunidades de Trabalho",
    "Colaborações Open Source"
  ];

  return (
    <section id="contact" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Vamos conversar sobre oportunidades, projetos ou trocar conhecimentos sobre QA
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              
              return (
                <Card 
                  key={index} 
                  className="skill-card text-center animate-scale-in hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => window.open(contact.action, '_blank', 'noopener,noreferrer')}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                    <IconComponent className="h-7 w-7 text-primary" />
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-2">{contact.title}</h3>
                  <p className="text-sm text-primary font-medium mb-1">{contact.value}</p>
                  <p className="text-xs text-muted-foreground">{contact.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Main CTA Section */}
          <div className="portfolio-card bg-gradient-card text-center max-w-4xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <MessageCircle className="h-10 w-10 text-primary" />
              <h3 className="text-3xl font-bold text-primary">
                Vamos Trabalhar Juntos?
              </h3>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Estou disponível para novas oportunidades em QA Testing, projetos de automação 
              e colaborações que agreguem valor através da qualidade de software.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-primary px-8 py-3"
                onClick={() => window.open('mailto:edvaldonetto@hotmail.com', '_blank')}
              >
                <Mail className="h-5 w-5 mr-2" />
                Enviar Email
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-outline px-8 py-3"
                onClick={() => window.open('https://www.linkedin.com/in/edvaldo-cavalcanti-da-silva-neto-74a550180/', '_blank')}
              >
                <Linkedin className="h-5 w-5 mr-2" />
                Conectar no LinkedIn
              </Button>
            </div>
          </div>

          {/* Collaboration Topics */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
              Temas para Colaboração
            </h3>
            
            <div className="portfolio-card">
              <div className="grid md:grid-cols-2 gap-4">
                {collaborationTopics.map((topic, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-skill-accent transition-colors animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <p className="text-muted-foreground">{topic}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Disponível para trabalho remoto e presencial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;