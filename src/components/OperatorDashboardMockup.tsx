"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, AlertTriangle, CheckCircle2, Factory, Timer, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OperatorDashboardMockup() {
    return (
        <div className="w-full bg-zinc-950 p-6 rounded-2xl border-4 border-zinc-800 shadow-2xl font-sans flex flex-col gap-6 text-white min-h-[600px] max-h-[80vh] overflow-y-auto overflow-x-hidden">
            {/* Header (Tablet App Bar) */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <Target className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white tracking-wide">Terminal do Operador</h2>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-xs text-zinc-400 font-medium tracking-wider uppercase">Sessão Ativa - Máq. 01</span>
                        </div>
                    </div>
                </div>
                <div className="text-right flex flex-col items-end gap-1">
                    <Badge className="bg-zinc-800 text-zinc-300 border-none px-3 py-1 font-mono text-sm">13:45</Badge>
                    <span className="text-xs text-zinc-500">Operador: João Silva</span>
                </div>
            </div>

            {/* Current Order details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 rounded-xl border border-zinc-800">
                    <Badge className="bg-orange-500/20 text-orange-400 border border-orange-500/30 px-3 py-1 uppercase tracking-widest text-xs font-bold mb-4">Ordem de Produção Atual</Badge>
                    <h3 className="text-3xl font-black text-white mb-2">#OS-2401</h3>
                    <p className="text-zinc-400 font-medium mb-6 text-lg">Tubo Inox 304 - 2" x 1.5mm - Raio 2.5</p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                        <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800/50">
                            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Ângulo</p>
                            <p className="font-mono text-lg font-bold text-white">90°</p>
                        </div>
                        <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800/50">
                            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Comprimento</p>
                            <p className="font-mono text-lg font-bold text-white">1200mm</p>
                        </div>
                        <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800/50">
                            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Pressão Sugerida</p>
                            <p className="font-mono text-lg font-bold text-white">45 bar</p>
                        </div>
                        <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800/50">
                            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Matriz Dir.</p>
                            <p className="font-mono text-lg font-bold text-white">MD-042</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 bg-zinc-900 p-6 rounded-xl border border-zinc-800 flex flex-col justify-center items-center text-center">
                    <Timer className="w-10 h-10 text-orange-500 mb-4" />
                    <p className="text-zinc-400 text-sm mb-2 uppercase tracking-wide font-medium">Tempo de Setup</p>
                    <p className="text-4xl font-mono font-bold text-white mb-2">12:34</p>
                    <Badge variant="outline" className="border-orange-500/30 text-orange-400">Dentro da meta</Badge>
                </div>
            </div>

            {/* Input Action Area */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex flex-col">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Settings2 className="w-5 h-5 text-zinc-400" />
                        Registro de Parâmetros Reais
                    </h4>
                    <div className="space-y-4 flex-1">
                        <div className="flex justify-between items-center bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                            <span className="text-zinc-400 font-medium">Pressão Utilizada (bar)</span>
                            <div className="flex gap-2">
                                <Button variant="outline" size="icon" className="h-10 w-10 border-zinc-700 bg-zinc-900 text-white">-</Button>
                                <div className="h-10 px-4 bg-black border border-zinc-800 rounded-md flex items-center justify-center font-mono text-xl font-bold min-w-[80px]">46</div>
                                <Button variant="outline" size="icon" className="h-10 w-10 border-zinc-700 bg-zinc-900 text-white">+</Button>
                            </div>
                        </div>
                        <div className="flex justify-between items-center bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                            <span className="text-zinc-400 font-medium">Velocidade (Hz)</span>
                            <div className="flex gap-2">
                                <Button variant="outline" size="icon" className="h-10 w-10 border-zinc-700 bg-zinc-900 text-white">-</Button>
                                <div className="h-10 px-4 bg-black border border-zinc-800 rounded-md flex items-center justify-center font-mono text-xl font-bold min-w-[80px]">35</div>
                                <Button variant="outline" size="icon" className="h-10 w-10 border-zinc-700 bg-zinc-900 text-white">+</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex flex-col justify-end">
                    <h4 className="text-white font-bold mb-4 text-center">Apontamento de Peça</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <Button className="h-24 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/30 flex flex-col gap-2 rounded-xl transition-all">
                            <AlertTriangle className="w-8 h-8" />
                            <span className="font-bold tracking-wider uppercase text-sm">Refugo</span>
                        </Button>
                        <Button className="h-24 bg-green-500 hover:bg-green-600 text-white flex flex-col gap-2 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all">
                            <CheckCircle2 className="w-8 h-8" />
                            <span className="font-bold tracking-wider uppercase text-sm">Peça Boa</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center mt-2">
                <Button className="w-full h-16 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg uppercase tracking-widest rounded-xl transition-all shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                    Finalizar Lote
                </Button>
            </div>
        </div>
    );
}
