"use client";

import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
    Database,
    Lightbulb,
    Settings2,
    CheckCircle2,
    TrendingDown,
    BarChart3,
    ClipboardCheck,
    History,
    AlertTriangle,
    FileCheck
} from "lucide-react";

export default function ImplementacoesPage() {
    return (
        <main className="min-h-screen bg-zinc-50 pb-20 font-sans">
            <Navbar />

            <div className="container mx-auto px-4 mt-8 md:mt-16 max-w-6xl">
                <SectionHeader
                    badge="Caminho 2"
                    title="Implementações & Dashboards"
                    subtitle="A evolução para controle operacional inteligente e padronização do processo na Sertub."
                />

                {/* 1) Por que isso importa */}
                <section className="mb-16">
                    <Card className="border-zinc-200 bg-white shadow-sm hover:shadow-md hover:border-orange-300 transition-all">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-2xl">
                                <Lightbulb className="w-6 h-6 text-yellow-500" />
                                Por que isso importa?
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Atualmente a operação de curvamento pode depender fortemente da <span className="text-foreground font-semibold">memória e experiência do operador</span>. Quando há troca de turno ou de profissional, perde-se eficiência até "acertar" a máquina novamente para a mesma peça.
                            </p>
                            <div className="bg-zinc-100 rounded-lg border border-zinc-200 p-4 mt-4">
                                <p className="font-medium text-zinc-600">Com dados estruturados e histórico digital:</p>
                                <ul className="mt-2 space-y-2 text-sm text-foreground/80">
                                    <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-green-500" /> Redução drástica de retrabalho</li>
                                    <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-green-500" /> Padronização de setup entre diferentes operadores</li>
                                    <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-green-500" /> Economia mensurável de matéria-prima (tubos perdidos)</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* 2) Fluxo do Tablet */}
                <section className="mb-16">
                    <h3 className="text-2xl font-bold mb-6">Fluxo do Tablet (IHM Operacional)</h3>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Steps */}
                        <div className="space-y-6">
                            {[
                                { step: 1, title: "Identificação", desc: "Operador se identifica (NFC, biometria facial ou PIN)." },
                                { step: 2, title: "Seleção do Lote", desc: "Seleciona na tela a Ordem de Produção / Lote atual." },
                                { step: 3, title: "Detalhes do Material", desc: "Seleciona Tubo, Espessura e Raio de curvatura." },
                                { step: 4, title: "Parâmetros Atuais", desc: "Registra os parâmetros (pressão, avanço, ângulo) usados na máquina." },
                                { step: 5, title: "Resultado da Peça", desc: "Marca no tablet se a peça ficou OK, necessitou Ajuste ou foi Retrabalho/Perda." },
                                { step: 6, title: "Evolução do Histórico", desc: "Sistema grava e passa a sugerir a melhor configuração no próximo setup." }
                            ].map((item, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    key={item.step}
                                    className="flex gap-4"
                                >
                                    <div className="w-8 h-8 rounded-full bg-zinc-50 border border-orange-300 flex items-center justify-center font-bold text-zinc-600 shrink-0">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">{item.title}</h4>
                                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mock Tablet UI */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-900 border-[8px] border-gray-800 rounded-[2rem] shadow-2xl overflow-hidden aspect-[4/3] flex flex-col relative"
                        >
                            <div className="bg-orange-500 p-4 flex justify-between items-center text-white">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">O1</div>
                                    <span className="font-medium text-sm">João | Turno A</span>
                                </div>
                                <div className="font-bold text-lg tracking-wider">SERTUB OS</div>
                                <div className="text-sm font-medium">10:45 AM</div>
                            </div>

                            <div className="flex-1 bg-[#1e293b] p-6 flex flex-col gap-4">
                                <div className="bg-[#0f172a] p-4 rounded-xl border border-gray-700">
                                    <span className="text-xs text-orange-500 font-bold uppercase tracking-widest">SETUP ATUAL</span>
                                    <div className="text-white text-lg font-medium mt-1">Lote: #84920 - Tubo Ø 2" E. 1.2mm Raio 45</div>
                                </div>

                                <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-xl flex gap-4 mt-2">
                                    <Lightbulb className="w-6 h-6 text-green-400 shrink-0" />
                                    <div>
                                        <span className="text-xs text-green-400 font-bold uppercase">RECOMENDAÇÃO DO SISTEMA</span>
                                        <p className="text-white/90 text-sm mt-1">
                                            Última vez que fizemos Tubo Ø 2", espessura 1.2mm (Lote #83100), o melhor resultado de primeira peça sem enrugar foi com <strong className="text-white">Avanço: 42, Pressão: 80 Bar, Ângulo Extra: +1.5°</strong>.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-auto">
                                    <div className="bg-[#334155] hover:bg-[#475569] cursor-pointer p-4 rounded-xl border border-gray-600 flex flex-col items-center justify-center gap-2 transition-colors">
                                        <Settings2 className="w-6 h-6 text-white" />
                                        <span className="text-sm text-white font-medium">Gravar Parâmetros</span>
                                    </div>
                                    <div className="bg-green-600 hover:bg-green-500 cursor-pointer p-4 rounded-xl border border-green-700 flex flex-col items-center justify-center gap-2 transition-colors">
                                        <CheckCircle2 className="w-6 h-6 text-white" />
                                        <span className="text-sm text-white font-medium">Registrar Primeira Peça OK</span>
                                    </div>
                                </div>
                            </div>
                            {/* Home button notch */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-16 bg-gray-700 rounded-l-full" />
                        </motion.div>
                    </div>
                </section>

                {/* 3) Modelo de Dados */}
                <section className="mb-16">
                    <h3 className="text-2xl font-bold mb-6">Modelo de Dados</h3>
                    <div className="bg-white border border-zinc-200 shadow-sm rounded-xl p-8 overflow-x-auto">
                        <div className="min-w-[700px] flex items-center justify-center gap-2">
                            <div className="bg-[#334155] p-3 rounded-lg text-xs font-mono border border-[#475569]">Operador</div>
                            <div className="w-8 h-px bg-border" />
                            <div className="bg-[#334155] p-3 rounded-lg text-xs font-mono border border-[#475569]">Lote</div>
                            <div className="w-8 h-px bg-border" />
                            <div className="bg-[#334155] p-3 rounded-lg text-xs font-mono border border-[#475569]">Tubo</div>
                            <div className="w-4 h-px bg-border" />
                            <div className="bg-[#334155] p-3 rounded-lg text-xs font-mono border border-[#475569]">Espessura</div>
                            <div className="w-4 h-px bg-border" />
                            <div className="bg-[#334155] p-3 rounded-lg text-xs font-mono border border-[#475569]">Raio</div>
                            <div className="w-12 h-px bg-orange-300 relative">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-zinc-600 bg-white px-1">&rarr;</div>
                            </div>
                            <div className="bg-zinc-100 p-4 rounded-xl border-2 border-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.1)] flex flex-col gap-2">
                                <div className="text-center font-bold text-sm text-zinc-600 uppercase tracking-wide border-b border-zinc-200 pb-2">Evento de Produção</div>
                                <div className="grid grid-cols-2 gap-2 mt-2">
                                    <Badge variant="outline" className="bg-zinc-50 text-[10px]">Parâmetros Usados</Badge>
                                    <Badge variant="outline" className="bg-zinc-50 text-[10px]">Resultado (OK/NOK)</Badge>
                                    <Badge variant="outline" className="bg-zinc-50 text-[10px]">Tempo de Setup</Badge>
                                    <Badge variant="outline" className="bg-zinc-50 text-[10px]">Motivo Retrabalho</Badge>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4) Dashboards Futuros */}
                <section className="mb-16">
                    <h3 className="text-2xl font-bold mb-6">Visões de Dashboards Futuros</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="bg-white shadow-sm border-zinc-200 hover:border-orange-300 transition-colors">
                            <CardHeader className="pb-2">
                                <TrendingDown className="w-6 h-6 text-green-500 mb-2" />
                                <CardTitle className="text-base">Setup Médio por Tubo</CardTitle>
                                <CardDescription className="text-xs">Tempo gasto no "acerto" inicial reduzindo mês a mês em peças difíceis.</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="bg-white shadow-sm border-zinc-200 hover:border-orange-300 transition-colors">
                            <CardHeader className="pb-2">
                                <AlertTriangle className="w-6 h-6 text-yellow-500 mb-2" />
                                <CardTitle className="text-base">Retrabalho por Lote</CardTitle>
                                <CardDescription className="text-xs">Identificar rapidamente quais fornecedores de tubo ou espessuras geram mais refugo.</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="bg-white shadow-sm border-zinc-200 hover:border-orange-300 transition-colors">
                            <CardHeader className="pb-2">
                                <BarChart3 className="w-6 h-6 text-orange-500 mb-2" />
                                <CardTitle className="text-base">Produtividade por Turno</CardTitle>
                                <CardDescription className="text-xs">Comparações transparentes baseadas em paradas e motivos justificados via IHM.</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="bg-white shadow-sm border-zinc-200 hover:border-orange-300 transition-colors">
                            <CardHeader className="pb-2">
                                <History className="w-6 h-6 text-accent mb-2" />
                                <CardTitle className="text-base">Histórico de "Melhor Peça"</CardTitle>
                                <CardDescription className="text-xs">O "Receituário" perfeito acessível a qualquer operador (democratização do conhecimento).</CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </section>

                {/* 5) Roadmap e Ganhos */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <section>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <FileCheck className="w-6 h-6 text-orange-500" />
                            Ganhos Esperados
                        </h3>
                        <ul className="space-y-4 text-muted-foreground">
                            <li className="flex gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                                <p><strong className="text-foreground">Menos tentativa e erro.</strong> Basear o setup inicial em dados reais de sucessos anteriores.</p>
                            </li>
                            <li className="flex gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                                <p><strong className="text-foreground">Menos desperdício de matéria-prima.</strong> "Pular" a fase onde tubos são estragados procurando a pressão ideal.</p>
                            </li>
                            <li className="flex gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                                <p><strong className="text-foreground">Setup mais rápido.</strong> Redução drástica do tempo de troca de lote ou ferramenta.</p>
                            </li>
                            <li className="flex gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                                <p><strong className="text-foreground">Padronização do Chão de Fábrica.</strong> Menos dependência do "caderninho" do operador sênior.</p>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold mb-6">Roadmap de Ação</h3>
                        <div className="relative pl-6 border-l-2 border-border space-y-8">
                            <div className="relative">
                                <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full border-4 border-zinc-100 bg-orange-500" />
                                <h4 className="font-bold text-foreground">Fase 1: Tempo Ligado</h4>
                                <p className="text-sm text-muted-foreground mt-1">Implementação de sensores básicos e gateway (Caminho 1).</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full border-4 border-zinc-100 bg-orange-400" />
                                <h4 className="font-bold text-foreground">Fase 2: Ligada vs Produzindo</h4>
                                <p className="text-sm text-muted-foreground mt-1">Evolução do hardware para detectar ciclo de dobra / vibração.</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full border-4 border-zinc-100 bg-orange-400" />
                                <h4 className="font-bold text-foreground">Fase 3: IHM de Chão de Fábrica</h4>
                                <p className="text-sm text-muted-foreground mt-1">Deploy do tablet e começo da alimentação do banco de dados operacional.</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full border-4 border-zinc-100 bg-orange-400" />
                                <h4 className="font-bold text-foreground">Fase 4: Inteligência & Dashboards</h4>
                                <p className="text-sm text-muted-foreground mt-1">Painéis gerenciais, metas de turno e sugestões de setup automatizadas.</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Footer info */}
                <div className="border-t border-border/50 pt-8 mt-12 mb-8 text-center">
                    <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
                        Esta página apresenta uma visão e arquitetura evolutiva de software e hardware. A implementação real dependerá de diagnóstico aprofundado do processo e provas de conceito (PoC) validadas em campo na marcenaria/planta.
                    </p>
                </div>

            </div>
        </main>
    );
}
