import { Navbar } from "@/components/Navbar";
import { FooterNavigation } from "@/components/FooterNavigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Activity, ArrowRight, ShieldAlert, Zap, Camera, ScanFace, Package, Calculator } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950 pb-20 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden border-b border-zinc-200 min-h-[450px] flex items-center bg-zinc-950">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-maquina.png"
            alt="Fundo Industrial"
            className="w-full h-full object-cover opacity-50 grayscale-[50%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/60 to-zinc-950/30" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          {/* Top Logos */}
          <div className="flex items-center justify-center w-full mb-8 max-w-2xl mx-auto">
            <div className="flex-1 flex justify-end pr-4 md:pr-8">
              <img
                src="/logoGRTECH-branca.png"
                alt="GR Tech Logo"
                className="h-12 md:h-16 lg:h-20 w-auto object-contain drop-shadow-md opacity-90"
              />
            </div>

            <span className="text-4xl md:text-5xl lg:text-6xl font-black text-orange-500 drop-shadow-md shrink-0 leading-none -mt-1">
              +
            </span>

            <div className="flex-1 flex justify-start pl-4 md:pl-8">
              <img
                src="/LOGO-SERTUB-BRANCA.png"
                alt="Sertub Logo"
                className="h-12 md:h-16 lg:h-20 w-auto object-contain drop-shadow-md opacity-90"
              />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white leading-tight drop-shadow-2xl">
            SISTEMAS OPERACIONAIS <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">SERTUB</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-zinc-300 font-medium mb-10 max-w-2xl mx-auto drop-shadow-md">
            Arquitetura de sistemas personalizados para controle, eficiência e evolução operacional.
          </p>

          {/* CTA Button */}
          <div className="flex items-center justify-center mt-4">
            <Button
              variant="outline"
              size="lg"
              className="border-zinc-400 text-zinc-100 bg-transparent hover:bg-white/10 hover:text-white font-semibold text-sm md:text-base h-12 md:h-14 px-8 md:px-12 rounded-full backdrop-blur-sm transition-all active:scale-95 uppercase tracking-widest"
              asChild
            >
              <Link href="/grtech-sertub">
                Saiba Mais
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Systems Section - Darker Gray for Division */}
      <section className="bg-zinc-200 py-20 border-t border-zinc-300">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-8">
            <h2 className="text-sm font-bold tracking-widest text-zinc-500 uppercase flex items-center gap-3">
              Sistemas
              <span className="h-px flex-1 bg-zinc-300"></span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Card 1: Sistema de Reconhecimento Facial */}
            <Link href="/monitoramento" className="group block">
              <Card className="h-full border-red-500 bg-white shadow-md transition-all duration-300 hover:border-red-600 hover:shadow-2xl hover:-translate-y-2">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors">
                    <Camera className="w-7 h-7 text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-zinc-950">Sistema de Reconhecimento Facial</CardTitle>
                  <CardDescription className="text-sm mt-2 text-red-600 font-medium font-bold">
                    Infraestrutura Externa
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    A adequação estrutural e de câmeras para reconhecimento deve ser feita por parceiro terceirizado.
                  </p>
                </CardContent>
                <CardFooter className="pt-4 border-t border-zinc-100 mt-auto">
                  <Button variant="ghost" className="w-full justify-between bg-zinc-50 text-zinc-700 group-hover:bg-zinc-100 transition-all font-semibold">
                    Acessar Módulo
                    <ArrowRight className="w-4 h-4 ml-2 opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>

            {/* Card 2: Sistema Curvadora */}
            <Link href="/sistema-curvadora" className="group block">
              <Card className="h-full border-green-500 bg-white shadow-md transition-all duration-300 hover:border-green-600 hover:shadow-2xl hover:-translate-y-2">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                    <Factory className="w-7 h-7 text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-zinc-950">Sistema Curvadora</CardTitle>
                  <CardDescription className="text-sm mt-2 text-green-600 font-medium font-bold">
                    Controle de Processos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Otimização de produção, controle de parâmetros e monitoramento de eficiência industrial.
                  </p>
                </CardContent>
                <CardFooter className="pt-4 border-t border-zinc-100 mt-auto">
                  <Button variant="ghost" className="w-full justify-between bg-zinc-50 text-zinc-700 group-hover:bg-zinc-100 transition-all font-semibold">
                    Acessar Módulo
                    <ArrowRight className="w-4 h-4 ml-2 opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>

            {/* Card 3: Sistema Almoxarifado */}
            <Link href="/almoxarifado" className="group block">
              <Card className="h-full border-green-500 bg-white shadow-md transition-all duration-300 hover:border-green-600 hover:shadow-2xl hover:-translate-y-2">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                    <Package className="w-7 h-7 text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-zinc-950">Sistema Almoxarifado</CardTitle>
                  <CardDescription className="text-sm mt-2 text-green-600 font-medium font-bold">
                    Gestão de Ativos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Controle inteligente de materiais, ferramentas e dashboards de consumo integrado.
                  </p>
                </CardContent>
                <CardFooter className="pt-4 border-t border-zinc-100 mt-auto">
                  <Button variant="ghost" className="w-full justify-between bg-zinc-50 text-zinc-700 group-hover:bg-zinc-100 transition-all font-semibold">
                    Acessar Módulo
                    <ArrowRight className="w-4 h-4 ml-2 opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>

          </div>
        </div>
      </section>

      <FooterNavigation />
    </main>
  );
}
