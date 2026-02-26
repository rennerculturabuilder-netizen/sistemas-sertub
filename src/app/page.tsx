import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Activity, ArrowRight, ShieldAlert, Zap, Camera, ScanFace, Package, Calculator } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950 pb-20 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-zinc-200 min-h-[400px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-maquina.png"
            alt="Fundo Industrial"
            className="w-full h-full object-cover opacity-70 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="flex flex-col items-center mb-8">
            <img
              src="/logo.png"
              alt="Sertub Logo"
              className="h-12 md:h-16 w-auto object-contain mb-10 opacity-100 drop-shadow-md"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 text-white uppercase leading-none drop-shadow-lg">
            Implementação IA Sertub <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">por GR Labs</span>
          </h1>


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
              <Card className="h-full border-zinc-300 bg-white shadow-md transition-all duration-300 hover:border-orange-500 hover:shadow-2xl hover:-translate-y-2">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-4 group-hover:bg-zinc-900 transition-colors">
                    <Camera className="w-7 h-7 text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-zinc-950">Sistema de Reconhecimento Facial</CardTitle>
                  <CardDescription className="text-sm mt-2 font-medium text-orange-600 flex items-center gap-1">
                    <ScanFace className="w-4 h-4" />
                    Visão Computacional
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Segurança e identificação inteligente através de visão computacional de última geração.
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
              <Card className="h-full border-zinc-300 bg-white shadow-md transition-all duration-300 hover:border-orange-500 hover:shadow-2xl hover:-translate-y-2">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-4 group-hover:bg-zinc-900 transition-colors">
                    <Factory className="w-7 h-7 text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-zinc-950">Sistema Curvadora</CardTitle>
                  <CardDescription className="text-sm mt-2 text-orange-500 font-medium font-bold">
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
              <Card className="h-full border-zinc-300 bg-white shadow-md transition-all duration-300 hover:border-orange-500 hover:shadow-2xl hover:-translate-y-2">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-4 group-hover:bg-zinc-900 transition-colors">
                    <Package className="w-7 h-7 text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-zinc-950">Sistema Almoxarifado</CardTitle>
                  <CardDescription className="text-sm mt-2 text-orange-500 font-medium font-bold">
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

    </main>
  );
}
