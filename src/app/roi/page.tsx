"use client";

import { Navbar } from "@/components/Navbar";
import { FooterNavigation } from "@/components/FooterNavigation";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Loader2, Database, ArrowLeft } from "lucide-react";

export default function ROIPage() {
    return (
        <main className="min-h-screen bg-zinc-50 pb-20 font-sans">
            <Navbar />

            <div className="container mx-auto px-4 mt-8 md:mt-16 max-w-4xl">
                <SectionHeader
                    badge="ROI - Retorno sobre Investimento"
                    title="Simulador de Economia IA"
                    subtitle="Projeção de impacto financeiro e ganho de tempo produtivo."
                />

                <div className="mt-16 bg-white rounded-[2rem] p-12 md:p-20 border border-zinc-200 shadow-xl text-center relative overflow-hidden">
                    {/* Efeitos de fundo */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-zinc-900/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Ícone Animado */}
                        <div className="w-24 h-24 bg-zinc-900 rounded-2xl flex items-center justify-center mb-8 relative shadow-2xl rotate-3">
                            <Database className="w-10 h-10 text-orange-500 -rotate-3" />
                            <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg border border-zinc-100 rotate-12">
                                <Loader2 className="w-6 h-6 text-zinc-900 animate-spin" />
                            </div>
                        </div>

                        {/* Textos */}
                        <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 mb-6 tracking-tight">
                            Em Processamento
                        </h2>

                        <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed mb-12">
                            Aguardando mais <strong className="text-zinc-900 font-bold">alimentação de dados</strong> operacionais da empresa para calcular com precisão a economia gerada, tanto em <strong className="text-orange-600 font-bold">valores financeiros</strong> quanto em <strong className="text-orange-600 font-bold">tempo</strong>.
                        </p>

                        {/* Botão de Voltar */}
                        <Button size="lg" className="bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-8 rounded-full hover:-translate-y-1 shadow-lg hover:shadow-xl transition-all duration-300 h-14" asChild>
                            <Link href="/">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Voltar para o Início
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            <FooterNavigation />
        </main>
    );
}
