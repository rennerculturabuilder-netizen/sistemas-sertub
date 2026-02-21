import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Activity, Cpu, ArrowRight, ShieldAlert, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950 pb-20 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-zinc-200 min-h-[500px] flex items-center">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
            style={{
              backgroundImage: `url('/hero-maquina.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-zinc-50" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="flex justify-center mb-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold border border-zinc-200 shadow-sm">
                <Zap className="w-3 h-3" />
                Sem dependência do painel
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-zinc-600 text-xs font-medium border border-zinc-200 shadow-sm">
                <Activity className="w-3 h-3 text-orange-400" />
                Sensor de corrente
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-zinc-600 text-xs font-medium border border-zinc-200 shadow-sm">
                <ShieldAlert className="w-3 h-3 text-orange-400" />
                Base para indicadores e economia
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 text-zinc-950 uppercase">
            Curvadora Sertub <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Plano de Monitoramento</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Começando pelo tempo real de máquina ligada e evoluindo para controle operacional e inteligência de processo.
          </p>
        </div>
      </section>

      {/* Pathways Section */}
      <section className="container mx-auto px-4 relative z-10 mt-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Card 1 */}
          <Link href="/tempo-maquina" className="group block">
            <Card className="h-full border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:border-orange-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-zinc-100 border border-zinc-100 flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors">
                  <Activity className="w-7 h-7 text-zinc-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-2xl text-zinc-950 group-hover:text-zinc-600 transition-colors">Caminho 1: Tempo da Máquina Ligada</CardTitle>
                <CardDescription className="text-base mt-2 text-orange-500">
                  Detecção automática de máquina ligada (ON/OFF) sem intervenção humana, criando uma base confiável de uptime.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mt-2">
                  <li className="flex items-center gap-2 text-sm text-zinc-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    Detecção automática (sem botão/operador)
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    Métricas de tempo ligado por dia/turno
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    Independente do painel da máquina
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-4 border-t border-zinc-100 mt-auto">
                <Button variant="ghost" className="w-full justify-between bg-zinc-50 text-zinc-700 group-hover:bg-zinc-100 group-hover:text-zinc-700 transition-all font-semibold">
                  Abrir caminho 1
                  <ArrowRight className="w-4 h-4 ml-2 opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                </Button>
              </CardFooter>
            </Card>
          </Link>

          {/* Card 2 (Secondary - Orange) */}
          <Link href="/implementacoes" className="group block">
            <Card className="h-full border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:border-orange-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors">
                  <Cpu className="w-7 h-7 text-zinc-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-2xl text-zinc-950 group-hover:text-zinc-600 transition-colors">Caminho 2: Implementações & Dashboards</CardTitle>
                <CardDescription className="text-base mt-2 text-orange-500">
                  Evolução para controle inteligente de parâmetros, redução de retrabalho e análise de produtividade detalhada.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mt-2">
                  <li className="flex items-center gap-2 text-sm text-zinc-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    Tablet de setup e operação
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    Controle fino: lote, tubo, espessura e raio
                  </li>
                  <li className="flex items-center gap-2 text-sm text-zinc-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    Banco de parâmetros inteligentes e dashboards
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-4 border-t border-zinc-100 mt-auto">
                <Button variant="ghost" className="w-full justify-between bg-zinc-50 text-zinc-700 group-hover:bg-zinc-100 group-hover:text-zinc-700 transition-all font-semibold">
                  Abrir caminho 2
                  <ArrowRight className="w-4 h-4 ml-2 opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                </Button>
              </CardFooter>
            </Card>
          </Link>

        </div>
      </section>

      {/* Footer warning */}
      <div className="container mx-auto px-4 mt-20 text-center text-xs text-orange-500">
        <p className="flex items-center justify-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-500" />
          Toda instalação elétrica e modificações de hardware devem ser realizadas por empresa qualificada (NR10) e/ou integrador industrial.
        </p>
      </div>
    </main>
  );
}
