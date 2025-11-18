import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Users, BookOpen, ShoppingBag, Eye } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Phone,
      title: "Consultoria em Call",
      description: "Transforme suas ligações em vendas! Estratégias comprovadas para aumentar seu fechamento em até 300% e dominar a arte da conversação."
    },
    {
      icon: BookOpen,
      title: "Concepção de Ebooks",
      description: "Crie ebooks que geram leads qualificados! Position-se como autoridade no seu mercado e atrai clientes de alto valor."
    },
    {
      icon: ShoppingBag,
      title: "Vendas sem Rosto",
      description: "Venda sem aparecer! Estratégias inteligentes para dominar marketplaces e redes sociais, construindo um negócio escalável sem expor sua identidade."
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+55 93 98413 7433",
      href: "https://wa.me/5593984137433",
      action: "Falar no WhatsApp"
    },
    {
      icon: Mail,
      label: "Email",
      value: "joaomarcosmiranda012@gmail.com",
      href: "mailto:joaomarcosmiranda012@gmail.com",
      action: "Enviar Email"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-blue-800 shadow-lg border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">HN SOCIETY</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#servicos" className="text-blue-200 hover:text-white transition-colors font-medium">Serviços</a>
              <a href="#contato" className="text-blue-200 hover:text-white transition-colors font-medium">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-blue-900 mb-6">
            Transforme Seu Negócio com Estratégias Digitais Poderosas
          </h2>
          <p className="text-xl text-blue-700 mb-8 max-w-2xl mx-auto">
            João Marcos e a HN SOCIETY entregam resultados reais. 
            Deixe de sonhar e comece a vender mais, com menos esforço e máxima eficiência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open("https://wa.me/5593984137433", "_blank")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold hover:border-blue-700 transition-all"
              onClick={() => window.open("mailto:joaomarcosmiranda012@gmail.com", "_blank")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Enviar Email
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-blue-900 mb-4">Serviços que Impulsionam Seu Crescimento</h3>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              Especialistas em transformar desafios em oportunidades. 
              Descubra como podemos escalar seu negócio para o próximo nível.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-blue-200 hover:shadow-xl transition-all duration-300 hover:border-blue-400">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-900 text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-700 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-blue-900 mb-4">Pronto para Transformar Seu Negócio?</h3>
          <p className="text-xl text-blue-700 mb-12 max-w-2xl mx-auto">
            Não perca mais tempo. Fale com especialistas que já ajudaram centenas de empreendedores 
            a alcançarem resultados extraordinários.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-md mx-auto">
            {contactMethods.map((method, index) => (
              <Button 
                key={index}
                size="lg"
                className="bg-white hover:bg-blue-50 text-blue-900 border border-blue-200 px-6 py-4 text-left justify-start hover:border-blue-400 transition-all"
                onClick={() => window.open(method.href, "_blank")}
              >
                <method.icon className="mr-3 h-5 w-5 text-blue-600" />
                <div className="text-left">
                  <div className="font-semibold text-lg">{method.label}</div>
                  <div className="text-sm text-blue-600">{method.value}</div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h4 className="text-2xl font-bold mb-2">HN SOCIETY</h4>
            <p className="text-blue-200">Especialistas em estratégias digitais que geram resultados</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              variant="ghost" 
              className="text-white hover:text-blue-200 border border-white/20 hover:border-white/40 transition-all"
              onClick={() => window.open("https://wa.me/5593984137433", "_blank")}
            >
              <Phone className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:text-blue-200 border border-white/20 hover:border-white/40 transition-all"
              onClick={() => window.open("mailto:joaomarcosmiranda012@gmail.com", "_blank")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email
            </Button>
          </div>
          
          <p className="text-blue-300 text-sm">
            © 2024 HN SOCIETY. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <MadeWithDyad />
    </div>
  );
};

export default Index;