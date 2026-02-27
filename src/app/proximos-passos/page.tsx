"use client";

import { Navbar } from "@/components/Navbar";
import { FooterNavigation } from "@/components/FooterNavigation";
import { motion } from "framer-motion";
import { Target, ArrowRight, Factory, Package, BarChart3, Quote } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProximosPassos() {
    return (
        <main className="min-h-screen bg-zinc-50 pb-20 font-sans">
            <Navbar />

            <div className="container mx-auto px-4 max-w-6xl mt-0">
                <div className="w-full flex flex-col gap-16">
                    {/* Header alinhado com as outras páginas */}
                    <div className="space-y-16 outline-none">
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full relative"
                        >
                            <div className="-mx-4 md:-mx-[calc(50vw-50%)] bg-gradient-to-br from-zinc-900 to-zinc-800 text-white relative overflow-hidden shadow-2xl py-20">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                                <div className="container mx-auto px-4 max-w-4xl relative z-10 flex flex-col items-center justify-center text-center">
                                    <div className="flex justify-center mb-6">
                                        <Target className="w-16 h-16 text-orange-500" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 uppercase tracking-tight text-white leading-tight">
                                        PRÓXIMOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">PASSOS</span>
                                    </h1>
                                    <p className="text-zinc-300 text-lg md:text-xl mb-4 max-w-3xl leading-relaxed">
                                        A partir da estrutura apresentada, o próximo passo é definir prioridades e alinhar a implementação de acordo com a realidade operacional da empresa.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        <section className="space-y-16">
                            {/* Bloco 1 - Curvadora */}
                            <div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
                                    <Factory className="w-6 h-6 text-orange-500" />
                                    1. Curvadora
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Card 1 */}
                                    <Card className="bg-white border-zinc-200 shadow-sm hover:border-orange-300 transition-colors">
                                        <CardHeader className="pb-4">
                                            <CardTitle className="text-xl font-bold text-zinc-900">Monitoramento de Máquina</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-4">
                                                {[
                                                    "Esse indicador é prioridade imediata?",
                                                    "O que significa ‘ligada’ na prática?",
                                                    "Existe meta de produtividade hoje?",
                                                    "É necessário diferenciar ligada vs produzindo?"
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <ArrowRight className="w-4 h-4 text-orange-500 mt-1.5 shrink-0" />
                                                        <span className="text-zinc-700 leading-relaxed font-medium">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    {/* Card 2 */}
                                    <Card className="bg-white border-zinc-200 shadow-sm hover:border-orange-300 transition-colors">
                                        <CardHeader className="pb-4">
                                            <CardTitle className="text-xl font-bold text-zinc-900">Banco Operacional + Tablet</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-4">
                                                {[
                                                    "Hoje existe histórico técnico estruturado?",
                                                    "Existe retrabalho frequente?",
                                                    "Vale iniciar junto ou em segunda fase?",
                                                    "O operador está preparado para registrar dados?"
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <ArrowRight className="w-4 h-4 text-orange-500 mt-1.5 shrink-0" />
                                                        <span className="text-zinc-700 leading-relaxed font-medium">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            {/* Bloco 2 - Almoxarifado */}
                            <div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
                                    <Package className="w-6 h-6 text-orange-500" />
                                    2. Almoxarifado
                                </h3>
                                <Card className="bg-white border-zinc-200 shadow-sm border-l-4 border-l-orange-500">
                                    <CardContent className="pt-6">
                                        <ul className="grid md:grid-cols-2 gap-6">
                                            {[
                                                "O controle atual é manual ou digital?",
                                                "Existe divergência de estoque?",
                                                "O objetivo é rastreabilidade completa ou organização básica?",
                                                "Qual impacto operacional isso gera hoje?"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <ArrowRight className="w-5 h-5 text-zinc-400 mt-1 shrink-0" />
                                                    <span className="text-zinc-800 text-lg leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Bloco 3 - Indicadores Executivos */}
                            <div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
                                    <BarChart3 className="w-6 h-6 text-orange-500" />
                                    3. Indicadores Executivos
                                </h3>
                                <Card className="bg-zinc-100 border-zinc-200 shadow-sm">
                                    <CardContent className="pt-6">
                                        <ul className="grid md:grid-cols-2 gap-6">
                                            {[
                                                "O que a diretoria realmente quer enxergar?",
                                                "Relatórios diários, semanais ou mensais?",
                                                "Deseja cruzar produção com custo?",
                                                "Existe meta clara de eficiência?"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-zinc-400 mt-2.5 shrink-0"></div>
                                                    <span className="text-zinc-800 text-lg leading-relaxed font-semibold">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                        {/* Seção Final — Posicionamento Estratégico */}
                        <section className="mt-20 border-t border-zinc-200">
                            {/* Break out of container by negative margins */}
                            <div className="-mx-4 md:-mx-[calc(50vw-50%)] bg-gradient-to-br from-zinc-900 to-zinc-800 text-white relative overflow-hidden shadow-2xl py-16">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                                <div className="container mx-auto px-4 max-w-4xl relative z-10 flex flex-col items-center justify-center text-center">
                                    <Quote className="w-12 h-12 text-orange-500/50 mb-6" />
                                    <p className="text-xl md:text-2xl leading-relaxed text-zinc-300 font-light mb-4">
                                        “A estrutura apresentada é um modelo base de transformação operacional.
                                    </p>
                                    <p className="text-xl md:text-2xl leading-relaxed text-white font-semibold">
                                        A implementação final será desenvolvida sob medida, respeitando prioridades, orçamento e maturidade operacional da empresa.”
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <FooterNavigation />
        </main>
    );
}
