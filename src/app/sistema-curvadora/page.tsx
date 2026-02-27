"use client";

import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import { DiagramSVG } from "@/components/DiagramSVG";
import { ScenarioCards } from "@/components/ScenarioCards";
import { ReportMock } from "@/components/ReportMock";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
    AlertCircle,
    Target,
    CheckCircle2,
    Zap,
    Factory,
    ShieldAlert,
    Lightbulb,
    Settings2,
    TrendingDown,
    BarChart3,
    AlertTriangle,
    History,
    FileCheck,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SistemaCurvadoraPage() {
    return (
        <main className="min-h-screen bg-zinc-50 pb-20 font-sans">
            <Navbar />

            <div className="container mx-auto px-4 max-w-6xl mt-0">
                <div className="w-full flex flex-col gap-16">
                    {/* FASE 1 CONTENT as HEADER */}
                    <div className="space-y-16 outline-none">
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full relative"
                        >
                            {/* Break out of container by negative margins */}
                            <div className="-mx-4 md:-mx-[calc(50vw-50%)] bg-gradient-to-br from-zinc-900 to-zinc-800 text-white relative overflow-hidden shadow-2xl py-20">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                                <div className="container mx-auto px-4 max-w-4xl relative z-10 flex flex-col items-center justify-center text-center">
                                    <div className="flex justify-center mb-6">
                                        <Factory className="w-16 h-16 text-orange-500" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 uppercase tracking-tight text-white leading-tight">
                                        SISTEMA <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">CURVADORA</span>
                                    </h1>
                                    <p className="text-zinc-300 text-lg md:text-xl mb-16 max-w-3xl leading-relaxed">
                                        Monitoramento em tempo real e evolução para gestão digital completa do processo de curvamento.
                                    </p>

                                    {/* Divider */}
                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-16" />

                                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                                        Fase 1: Monitoramento <br /><span className="text-zinc-400 text-xl font-normal mt-2 block">Tempo de máquina em funcionamento</span>
                                    </h2>
                                </div>
                            </div>
                        </motion.section>

                        <section>
                            <h3 className="text-2xl font-bold mb-8">Fluxo de Monitoramento</h3>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {[
                                    { num: "01", title: "Detecção", desc: "Sensor de corrente instalado no motor principal detecta o fluxo de energia." },
                                    { num: "02", title: "Interpretação", desc: "Gateway de hardware processa os dados e traduz em status ON/OFF." },
                                    { num: "03", title: "Transmissão", desc: "Eventos com Timestamp são enviados para o sistema via rede local." },
                                    { num: "04", title: "Consolidação", desc: "O software gera relatórios de disponibilidade e tempo de máquina." }
                                ].map((step, i) => (
                                    <div key={i} className="relative p-6 bg-white rounded-xl shadow-sm border border-zinc-200">
                                        <div className="text-4xl font-extrabold text-orange-500/10 absolute top-4 right-4">{step.num}</div>
                                        <h4 className="text-lg font-bold mb-2 relative z-10 text-zinc-900">{step.title}</h4>
                                        <p className="text-sm text-zinc-600 relative z-10">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold mb-6">Arquitetura da Solução</h3>
                            <DiagramSVG />
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold mb-2">Opções de Hardware</h3>
                            <p className="text-muted-foreground mb-6">Diferentes níveis de investimento e robustez para o ambiente fabril.</p>
                            <ScenarioCards />
                        </section>

                        <section>
                            <ReportMock />
                        </section>

                        <section className="border border-orange-100 bg-orange-50/30 p-6 md:p-8 rounded-xl shadow-sm relative overflow-hidden">
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full hidden md:block mt-1 shadow-sm">
                                    <Zap className="w-6 h-6 text-orange-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-zinc-900">Evolução de Hardware (Fase 1.5)</h3>
                                    <p className="text-zinc-600 mb-4 leading-relaxed">
                                        Para curvadoras hidráulicas onde a bomba fica ligada constante, a evolução consiste em adicionar um segundo canal de medição ou sensor de vibração para diferenciar <span className="text-zinc-900 font-bold">"Ligada"</span> de <span className="text-zinc-900 font-bold">"Curvando"</span>.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="mt-20 border-t border-zinc-200">
                            {/* Break out of container by negative margins */}
                            <div className="-mx-4 md:-mx-[calc(50vw-50%)] bg-gradient-to-br from-zinc-900 to-zinc-800 text-white relative overflow-hidden shadow-2xl py-16">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                                <div className="container mx-auto px-4 max-w-4xl relative z-10 flex flex-col items-center justify-center text-center">
                                    <Badge className="bg-orange-500/20 text-orange-400 mb-6 border border-orange-500/30 px-4 py-1">Próximo Nível</Badge>
                                    <h2 className="text-2xl md:text-4xl font-bold mb-6 tracking-tight">
                                        Fase 2: Gestão Inteligente <br /><span className="text-zinc-400 text-xl font-normal mt-2 block">e Dashboards Operacionais</span>
                                    </h2>
                                    <p className="text-zinc-300 text-lg md:text-xl mb-12 max-w-3xl leading-relaxed">
                                        Após consolidar o monitoramento automático, o sistema evolui para o controle total do processo. Digitalize o setup, reduza o refugo e transforme a experiência do operador em dados acionáveis.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left w-full mt-2">
                                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                            <Lightbulb className="w-8 h-8 text-orange-400 mb-4" />
                                            <h4 className="font-bold mb-2">Setup Digital</h4>
                                            <p className="text-sm text-zinc-500">Parâmetros sugeridos pelo sistema baseados no histórico de sucesso.</p>
                                        </div>
                                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                            <BarChart3 className="w-8 h-8 text-orange-400 mb-4" />
                                            <h4 className="font-bold mb-2">Dashboards Reais</h4>
                                            <p className="text-sm text-zinc-500">Indicadores de produtividade por turno, lote e material em tempo real.</p>
                                        </div>
                                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                            <CheckCircle2 className="w-8 h-8 text-orange-400 mb-4" />
                                            <h4 className="font-bold mb-2">Refugo Zero</h4>
                                            <p className="text-sm text-zinc-500">Controle rigoroso de perdas e identificação de gargalos no material.</p>
                                        </div>
                                    </div>

                                    <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-12 px-8 rounded-full transition-all hover:scale-105 active:scale-95 group" onClick={() => {
                                        const fase2Content = document.getElementById('fase2-content');
                                        fase2Content?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }}>
                                        Explorar Fase 2
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* FASE 2 CONTENT */}
                    <div id="fase2-content" className="space-y-16 outline-none">
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="border-zinc-200 bg-white shadow-sm hover:shadow-md hover:border-orange-300 transition-all">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-2xl">
                                        <Lightbulb className="w-6 h-6 text-yellow-500" />
                                        Gestão de Parâmetros
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        Elimine a dependência da memória do operador. Com dados estruturados, o setup torna-se padronizado e digital.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                                        <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-100 flex flex-col items-center text-center">
                                            <CheckCircle2 className="w-8 h-8 text-green-500 mb-2" />
                                            <span className="text-sm font-semibold">Zero Retrabalho</span>
                                        </div>
                                        <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-100 flex flex-col items-center text-center">
                                            <CheckCircle2 className="w-8 h-8 text-green-500 mb-2" />
                                            <span className="text-sm font-semibold">Setup Padronizado</span>
                                        </div>
                                        <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-100 flex flex-col items-center text-center">
                                            <CheckCircle2 className="w-8 h-8 text-green-500 mb-2" />
                                            <span className="text-sm font-semibold">Economia de Tubos</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.section>

                        <section>
                            <h3 className="text-2xl font-bold mb-6">IHM Operacional (Exemplo Tablet)</h3>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    {[
                                        { s: "1", t: "Identificação", d: "Login do operador via PIN ou Biometria." },
                                        { s: "2", t: "Seleção do Lote", d: "Escolha da Ordem de Produção ativa." },
                                        { s: "3", t: "Material", d: "Tubo, Espessura e Raio de curvatura." },
                                        { s: "4", t: "Registrar Parâmetros", d: "Pressão, avanço e ajustes finos." },
                                        { s: "5", t: "Controle de Qualidade", d: "Status OK ou motivo de perda." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold shrink-0">{item.s}</div>
                                            <div>
                                                <h4 className="font-bold">{item.t}</h4>
                                                <p className="text-sm text-muted-foreground">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-zinc-900 rounded-[2rem] p-4 border-[8px] border-zinc-800 shadow-2xl aspect-[4/3] flex flex-col overflow-hidden text-white">
                                    <div className="bg-orange-500 p-3 flex justify-between text-xs font-bold">
                                        <span>OPERADOR: JOÃO</span>
                                        <span>SETUB CURVADORA</span>
                                        <span>OP #849</span>
                                    </div>
                                    <div className="flex-1 p-4 space-y-4 bg-zinc-800/50">
                                        <div className="bg-zinc-900 p-3 rounded border border-zinc-700">
                                            <span className="text-[10px] text-orange-400 font-bold uppercase">Setup Recomendado</span>
                                            <p className="text-sm mt-1">Pressão: 80 Bar | Avanço: 42 | Ângulo: +1.5°</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3 mt-4">
                                            <div className="bg-zinc-700 p-4 rounded text-center text-xs font-bold border border-zinc-600">GRAVAR DADOS</div>
                                            <div className="bg-green-600 p-4 rounded text-center text-xs font-bold border border-green-700">PEÇA OK</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold mb-6 text-zinc-900">Dashboards de Decisão (IA Insights)</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                <Card className="bg-white border-zinc-200">
                                    <CardHeader className="pb-2">
                                        <TrendingDown className="w-6 h-6 text-green-500 mb-2" />
                                        <CardTitle className="text-lg">Tempo de Setup</CardTitle>
                                        <CardDescription>Redução mensal no tempo de acerto de máquina.</CardDescription>
                                    </CardHeader>
                                </Card>
                                <Card className="bg-white border-zinc-200">
                                    <CardHeader className="pb-2">
                                        <AlertTriangle className="w-6 h-6 text-yellow-500 mb-2" />
                                        <CardTitle className="text-lg">Refugo por Lote</CardTitle>
                                        <CardDescription>Identifique problemas em materiais ou espessuras.</CardDescription>
                                    </CardHeader>
                                </Card>
                                <Card className="bg-white border-zinc-200">
                                    <CardHeader className="pb-2">
                                        <BarChart3 className="w-6 h-6 text-orange-500 mb-2" />
                                        <CardTitle className="text-lg">Produtividade</CardTitle>
                                        <CardDescription>Comparações por turno baseadas em dados reais.</CardDescription>
                                    </CardHeader>
                                </Card>
                            </div>

                            {/* Enhanced Dashboard Section */}
                            <div className="mt-8">
                                <ReportMock />
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold mb-6">Roadmap de Implementação</h3>
                            <div className="relative pl-8 border-l-2 border-zinc-200 space-y-12">
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-orange-500 border-4 border-white shadow-sm" />
                                    <h4 className="font-bold text-lg">Fase 3: Digitalização da IHM</h4>
                                    <p className="text-muted-foreground">Implantação do tablet e coleta sistemática de parâmetros de dobra.</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-zinc-200 border-4 border-white shadow-sm" />
                                    <h4 className="font-bold text-lg">Fase 4: Inteligência Preditiva</h4>
                                    <p className="text-muted-foreground">Sistema sugere setups baseados no histórico de sucesso para cada material.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Checklist de Viabilidade */}
                <section className="mt-20 mb-16">
                    <h3 className="text-2xl font-bold mb-6">Checklist de Viabilidade Técnica</h3>
                    <Card className="bg-white shadow-sm border-zinc-200 overflow-hidden">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1" className="px-6 border-b-zinc-100">
                                <AccordionTrigger className="hover:text-orange-500 py-6">Infraestrutura Elétrica (NR10)</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground space-y-2 pb-6">
                                    <p>• Espaço físico no quadro elétrico atual para o gateway e sensores.</p>
                                    <p>• Aterramento compatível e disjuntor de proteção dedicado para o gateway.</p>
                                    <p>• Identificação das fases e tensões (220V/380V/440V).</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="px-6 border-b-zinc-100">
                                <AccordionTrigger className="hover:text-orange-500 py-6">Rede e Conectividade</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground space-y-2 pb-6">
                                    <p>• Disponibilidade de Cabo Ethernet (preferível) ou Wi-Fi estável no ponto da máquina.</p>
                                    <p>• Configuração de IP fixo na rede fabril para o gateway.</p>
                                    <p>• Liberação de portas para comunicação Cloud (HTTP/MQTT).</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Card>
                </section>

            </div>
        </main>
    );
}
