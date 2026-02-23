"use client";

import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
    Calculator,
    TrendingUp,
    Zap,
    Clock,
    FileText,
    ArrowRight,
    Target,
    Coins
} from "lucide-react";
import { motion } from "framer-motion";

export default function ROIPage() {
    const [setupAnterior, setSetupAnterior] = useState(45); // minutos
    const [setupNovo, setSetupNovo] = useState(15); // minutos
    const [custoHora, setCustoHora] = useState(250); // R$
    const [setupsMes, setSetupsMes] = useState(60);

    const economiaMensalManual = (setupAnterior - setupNovo) / 60 * custoHora * setupsMes;
    const economiaAnual = economiaMensalManual * 12;

    return (
        <main className="min-h-screen bg-zinc-50 pb-20 font-sans">
            <Navbar />

            <div className="container mx-auto px-4 mt-8 md:mt-16 max-w-6xl">
                <SectionHeader
                    badge="ROI - Retorno sobre Investimento"
                    title="Simulador de Economia IA"
                    subtitle="Calcule o impacto financeiro real da implementação dos sistemas GR Labs na Sertub."
                />

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    {/* Inputs Card */}
                    <Card className="bg-white border-zinc-200 shadow-sm">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calculator className="w-5 h-5 text-orange-500" />
                                Parâmetros de Cálculo
                            </CardTitle>
                            <CardDescription>Ajuste os valores para ver a projeção de economia.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <label className="font-medium text-zinc-700">Tempo de Setup Anterior (Minutos)</label>
                                    <span className="text-orange-600 font-bold">{setupAnterior} min</span>
                                </div>
                                <input
                                    type="range"
                                    min="20" max="120" step="5"
                                    value={setupAnterior}
                                    onChange={(e) => setSetupAnterior(parseInt(e.target.value))}
                                    className="w-full accent-orange-500"
                                />
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <label className="font-medium text-zinc-700">Tempo com IA/Gestão (Minutos)</label>
                                    <span className="text-green-600 font-bold">{setupNovo} min</span>
                                </div>
                                <input
                                    type="range"
                                    min="5" max="40" step="5"
                                    value={setupNovo}
                                    onChange={(e) => setSetupNovo(parseInt(e.target.value))}
                                    className="w-full accent-green-500"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-700">Custo Hora Máquina (R$)</label>
                                    <input
                                        type="number"
                                        value={custoHora}
                                        onChange={(e) => setCustoHora(parseInt(e.target.value))}
                                        className="w-full p-2 border border-zinc-200 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-700">Setups por Mês</label>
                                    <input
                                        type="number"
                                        value={setupsMes}
                                        onChange={(e) => setSetupsMes(parseInt(e.target.value))}
                                        className="w-full p-2 border border-zinc-200 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Results Card */}
                    <div className="space-y-6">
                        <Card className="bg-zinc-900 text-white border-zinc-800 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <CardHeader>
                                <CardTitle className="text-orange-400">Economia Projetada</CardTitle>
                                <CardDescription className="text-zinc-400 font-medium italic">Baseado na redução de Setup e Otimização</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <p className="text-sm text-zinc-500 uppercase tracking-widest mb-1">Impacto Mensal</p>
                                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                                        R$ {economiaMensalManual.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                    </h2>
                                </div>
                                <div className="pt-6 border-t border-zinc-800">
                                    <p className="text-sm text-zinc-500 uppercase tracking-widest mb-1">Impacto Anual</p>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500">
                                        R$ {economiaAnual.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                    </h2>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                                <Clock className="w-5 h-5 text-orange-500 mb-2" />
                                <h4 className="font-bold text-zinc-800">Tempo Liberado</h4>
                                <p className="text-2xl font-black text-orange-600">+{((setupAnterior - setupNovo) * setupsMes / 60).toFixed(1)}h</p>
                                <p className="text-xs text-zinc-500">Capacidade extra/mês</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                                <Target className="w-5 h-5 text-green-500 mb-2" />
                                <h4 className="font-bold text-zinc-800">Redução de Perdas</h4>
                                <p className="text-2xl font-black text-green-600">-22%</p>
                                <p className="text-xs text-zinc-500">Estimativa Refugo</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Benefits List */}
                <section className="mt-20">
                    <h3 className="text-2xl font-bold mb-8 text-center uppercase tracking-tight">Onde a IA ataca os custos da Sertub?</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                t: "Setup Baseado em Sucesso",
                                d: "IA sugere os parâmetros de pressão e avanço que deram certo no último lote similar, eliminando tentativas e erros.",
                                icon: <Zap className="w-6 h-6 text-orange-500" />
                            },
                            {
                                t: "Auditoria de Energia",
                                d: "Identificação de motores trabalhando fora da curva de eficiência, reduzindo o consumo elétrico desnecessário.",
                                icon: <Coins className="w-6 h-6 text-orange-500" />
                            },
                            {
                                t: "Previsão de Paradas",
                                d: "Análise de vibração e corrente detecta anomalias mecânicas antes que a máquina quebre no meio do turno.",
                                icon: <TrendingUp className="w-6 h-6 text-orange-500" />
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm border-b-4 border-b-orange-500"
                            >
                                <div className="mb-4">{item.icon}</div>
                                <h4 className="font-bold text-lg mb-2 text-zinc-900">{item.t}</h4>
                                <p className="text-sm text-zinc-600 leading-relaxed">{item.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <div className="mt-16 text-center">
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-12 rounded-full h-14 group transition-all" asChild>
                        <a href="/sistema-curvadora">
                            Ver Implementação na Prática
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Button>
                </div>
            </div>
        </main>
    );
}
