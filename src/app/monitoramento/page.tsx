"use client";

import { Navbar } from "@/components/Navbar";
import { FooterNavigation } from "@/components/FooterNavigation";
import { Camera, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function MonitoramentoPage() {
    return (
        <main className="min-h-screen bg-zinc-50 pb-20 font-sans">
            <Navbar />

            <div className="container mx-auto px-4 max-w-6xl mt-0">
                <div className="w-full flex flex-col gap-16">
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
                                        <Camera className="w-16 h-16 text-orange-500" />
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 uppercase tracking-tight text-white leading-tight">
                                        Reconhecimento <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Facial</span>
                                    </h1>
                                    <p className="text-zinc-300 text-lg md:text-xl mb-16 max-w-3xl leading-relaxed">
                                        Sistema de visão computacional para controle de presença nas áreas de Entrada, Curvadora e Almoxarifado.
                                    </p>

                                    {/* Divider */}
                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-16" />

                                    <div className="bg-white/5 border border-red-500/30 p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden max-w-2xl mx-auto shadow-lg">
                                        <div className="flex flex-col items-center text-center">
                                            <AlertCircle className="w-8 h-8 text-red-400 mb-4" />
                                            <h2 className="text-2xl font-bold text-white mb-4">Substituição de Câmeras</h2>
                                            <p className="text-zinc-300 text-lg leading-relaxed">
                                                A implementação do reconhecimento facial exige troca das câmeras atuais e adequação da infraestrutura. Essa etapa deve ser realizada por empresa especializada em CFTV industrial.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                    </div>
                </div>
            </div>

            <FooterNavigation />
        </main>
    );
}
