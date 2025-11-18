"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Users, BookOpen, ShoppingBag, MessageCircle } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Phone,
      title: "Consultoria em Call",
      description: "Especialistas em atendimento ao cliente e gestão de equipes de vendas por telefone."
    },
    {
      icon: BookOpen,
      title: "Concepção de Ebooks",
      description: "Criação de ebooks profissionais para seu negócio, desde a escrita até o design final."
    },
    {
      icon: ShoppingBag,
      title: "Vendas sem Rosto",
      description: "Estratégias para vender em marketplaces e redes sociais sem precisar mostrar seu rosto."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-900">HN SOCIETY</h1>
            <div className="flex items-center space-x-4">
              <a href="mailto:joaomarcosmiranda012@gmail.com" className="text-blue-700 hover:text-blue-900">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://wa.me/5593984137433" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-blue-900 mb-6">
            Bem-vindo ao HN SOCIETY
          </h2>
          <p className="text-xl text-blue-700 mb-8 max-w-2xl mx-auto">
            Serviços especializados para impulsionar seu negócio com estratégias modernas e resultados comprovados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="https://wa.me/5593984137433" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <a href="mailto:joaomarcanda012@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Enviar Email
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Nossos Serviços</h3>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Soluções completas para transformar sua presença digital e impulsionar suas vendas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-blue-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-700">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="text-3xl font-bold text-blue-900 mb-4">Sobre o HN SOCIETY</h3>
          <p className="text-lg text-blue-700 mb-8">
            Somos uma equipe especializada liderada por João Marcos, focada em oferecer soluções digitais 
            inovadoras que geram resultados reais para nossos clientes. Com expertise em estratégias 
            de vendas e marketing digital, ajudamos negócios a alcançarem seu máximo potencial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="https://wa.me/5593984137433" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                Agende uma Consultoria
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Pronto para transformar seu negócio?</h3>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato hoje mesmo e descubra como podemos ajudar você a alcançar seus objetivos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-900 hover:bg-blue-100">
              <a href="https://wa.me/5593984137433" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp: +55 93 98413 7433
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              <a href="mailto:joaomarcosmiranda012@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                joaomarcosmiranda012@gmail.com
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-blue-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4">© 2024 HN SOCIETY. Todos os direitos reservados.</p>
          <MadeWithDyad />
        </div>
      </footer>
    </div>
  );
};

export default Index;