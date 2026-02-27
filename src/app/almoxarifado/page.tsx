"use client";

import { Navbar } from "@/components/Navbar";
import { FooterNavigation } from "@/components/FooterNavigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
    Package,
    CheckCircle2,
    Target,
    Layers,
    ShieldCheck,
    TrendingDown,
    Box,
    LineChart,
    Settings2,
    Barcode,
    QrCode,
    Search,
    Filter,
    Plus,
    ArrowUpDown
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AlmoxarifadoPage() {
    return (
        <main className="min-h-screen bg-zinc-50 pb-20 font-sans">
            <Navbar />

            <div className="container mx-auto px-4 max-w-5xl mt-0">
                <div className="w-full flex flex-col gap-12">

                    <div className="space-y-16 outline-none">
                        {/* CARD 1 — TÍTULO / VISÃO GERAL */}
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
                                        <Package className="w-16 h-16 text-orange-500" />
                                    </div>
                                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 uppercase tracking-tight text-white leading-tight">
                                        SISTEMA <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">ALMOXARIFADO</span>
                                    </h1>
                                    <p className="text-zinc-300 text-lg md:text-2xl max-w-3xl leading-relaxed font-medium">
                                        Organização, controle e rastreabilidade dos insumos industriais.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        {/* CARD 2 — OBJETIVO DA IMPLEMENTAÇÃO */}
                        <section>
                            <Card className="bg-white border-zinc-200 shadow-sm overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-[40px] translate-x-1/2 -translate-y-1/2" />
                                <CardHeader className="pb-4 pt-8 md:px-8">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="bg-orange-100 p-2.5 rounded-xl">
                                            <Target className="w-6 h-6 text-orange-600" />
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-zinc-900">Objetivo Estratégico</CardTitle>
                                    </div>
                                    <CardDescription className="text-zinc-600 text-lg mt-4 leading-relaxed font-medium">
                                        Implantar uma base estruturada de controle de estoque, garantindo:
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="md:px-8 pb-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                        {[
                                            "Cadastro completo de itens",
                                            "Controle de entrada e saída",
                                            "Identificação de quem retira",
                                            "Saldo atualizado em tempo real",
                                            "Relatórios operacionais básicos"
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-3 items-center bg-zinc-50 p-4 rounded-xl border border-zinc-100 relative overflow-hidden group hover:border-orange-200 transition-colors">
                                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-zinc-200 group-hover:border-orange-200 transition-colors">
                                                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                                                </div>
                                                <span className="font-semibold text-zinc-800">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* CARD 4 — METODOLOGIA EM 4 FASES */}
                        <section className="mt-12">
                            <h3 className="text-2xl font-bold text-zinc-900 mb-8 max-w-2xl flex flex-col">
                                Metodologia em 4 Fases
                                <span className="text-zinc-500 font-medium block text-lg mt-2 tracking-tight">Evolução estruturada: do físico à inteligência de dados</span>
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                                {/* Fase 1 */}
                                <Card className="bg-white border-zinc-200 shadow-sm flex flex-col h-full hover:border-orange-200 transition-colors">
                                    <CardHeader className="pb-4">
                                        <Badge className="bg-zinc-100 text-zinc-600 w-fit mb-4 text-xs font-bold px-3 py-1 border-none uppercase tracking-wider">Fase 1</Badge>
                                        <CardTitle className="text-lg font-bold text-zinc-900 leading-tight">Organização Física e Inventário</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <ul className="space-y-4">
                                            {[
                                                "Estruturação do espaço",
                                                "Contagem inicial",
                                                "Padronização de nomenclatura",
                                                "Definição de responsável"
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-3 items-start text-sm text-zinc-600 font-medium">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-1.5 shrink-0" />
                                                    <span className="leading-snug">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>

                                {/* Fase 2 */}
                                <Card className="bg-white border-zinc-200 shadow-sm flex flex-col h-full hover:border-orange-200 transition-colors">
                                    <CardHeader className="pb-4">
                                        <Badge className="bg-zinc-100 text-zinc-600 w-fit mb-4 text-xs font-bold px-3 py-1 border-none uppercase tracking-wider">Fase 2</Badge>
                                        <CardTitle className="text-lg font-bold text-zinc-900 leading-tight">Implantação do Sistema Base</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <ul className="space-y-4">
                                            {[
                                                "Cadastro digital dos itens",
                                                "Controle de entradas",
                                                "Controle de saídas",
                                                "Relatórios simples"
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-3 items-start text-sm text-zinc-600 font-medium">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-300 mt-1.5 shrink-0" />
                                                    <span className="leading-snug">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>

                                {/* Fase 3 */}
                                <Card className="bg-white border-zinc-200 shadow-sm flex flex-col h-full hover:border-orange-200 transition-colors">
                                    <CardHeader className="pb-4">
                                        <Badge className="bg-zinc-100 text-zinc-600 w-fit mb-4 text-xs font-bold px-3 py-1 border-none uppercase tracking-wider">Fase 3</Badge>
                                        <CardTitle className="text-lg font-bold text-zinc-900 leading-tight">Identificação de Retirada</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <ul className="space-y-4">
                                            {[
                                                "Registro por colaborador",
                                                "Identificação por login ou reconhecimento facial",
                                                "Histórico individual de movimentação"
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-3 items-start text-sm text-zinc-600 font-medium">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-1.5 shrink-0" />
                                                    <span className="leading-snug">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>

                                {/* Fase 4 */}
                                <Card className="bg-white border-zinc-200 shadow-sm flex flex-col h-full hover:border-orange-200 transition-colors">
                                    <CardHeader className="pb-4">
                                        <Badge className="bg-zinc-100 text-zinc-600 w-fit mb-4 text-xs font-bold px-3 py-1 border-none uppercase tracking-wider">Fase 4</Badge>
                                        <CardTitle className="text-lg font-bold text-zinc-900 leading-tight">Evolução Gerencial</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <ul className="space-y-4">
                                            {[
                                                "Relatórios por setor",
                                                "Alertas de estoque mínimo",
                                                "Indicadores de consumo",
                                                "Base para decisões estratégicas"
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-3 items-start text-sm text-zinc-600 font-medium">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-1.5 shrink-0" />
                                                    <span className="leading-snug">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                        {/* MOCKUP DO SISTEMA */}
                        <section className="mt-16">
                            <h3 className="text-2xl font-bold text-zinc-900 mb-8 max-w-2xl flex flex-col">
                                Interface da Plataforma
                                <span className="text-zinc-500 font-medium block text-lg mt-2 tracking-tight">Visão gerencial do inventário em tempo real</span>
                            </h3>
                            <div className="bg-zinc-900 rounded-[2rem] p-4 border-[8px] border-zinc-800 shadow-2xl flex flex-col overflow-hidden text-white relative md:h-[550px]">
                                <div className="bg-zinc-800 px-4 py-3 flex items-center justify-between border-b text-xs border-zinc-700 rounded-t-lg">
                                    <div className="flex items-center gap-2">
                                        <Package className="w-4 h-4 text-orange-500" />
                                        <span className="font-bold">SERTUB Almoxarifado</span>
                                    </div>
                                    {/* Menu Navigation Mockup */}
                                    <div className="hidden md:flex gap-4 text-zinc-400 font-medium ml-8 flex-1">
                                        <span className="text-white bg-zinc-700/50 px-3 py-1 rounded-md cursor-pointer">Inventário</span>
                                        <span className="hover:text-zinc-200 px-3 py-1 cursor-pointer transition-colors">Ordens de Saída</span>
                                        <span className="hover:text-zinc-200 px-3 py-1 cursor-pointer transition-colors">Relatórios</span>
                                    </div>
                                    <div className="flex gap-4 items-center pl-4 text-zinc-400 border-l border-zinc-700 ml-auto md:ml-0">
                                        <div className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/50 flex items-center justify-center text-orange-400 font-bold text-[10px]">
                                            GR
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 p-4 md:p-6 bg-zinc-950 overflow-hidden flex flex-col gap-4">

                                    {/* Toolbar */}
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
                                        <div className="flex items-center gap-2 bg-zinc-900 rounded-lg p-2.5 border border-zinc-800 w-full md:w-80 shadow-inner focus-within:border-zinc-700 transition-colors">
                                            <Search className="w-4 h-4 text-zinc-500" />
                                            <input type="text" disabled placeholder="Buscar código, nome ou lote..." className="bg-transparent border-none outline-none text-sm text-zinc-200 placeholder-zinc-600 w-full cursor-not-allowed" />
                                        </div>
                                        <div className="flex items-center gap-2 w-full sm:w-auto">
                                            <button className="flex items-center gap-2 px-3 h-10 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white text-sm font-medium transition-colors">
                                                <Filter className="w-4 h-4" /> Filtros
                                            </button>
                                            <button className="flex items-center gap-2 px-4 h-10 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold shadow-md transition-colors">
                                                <Plus className="w-4 h-4" /> Novo Item
                                            </button>
                                        </div>
                                    </div>

                                    {/* Data Table */}
                                    <div className="flex-1 overflow-hidden border border-zinc-800 rounded-xl bg-zinc-900/50 flex flex-col shadow-sm">
                                        {/* Table Header */}
                                        <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 border-b border-zinc-800 text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest bg-zinc-900/80">
                                            <div className="col-span-2 flex items-center gap-1.5 cursor-pointer hover:text-zinc-300">CÓDIGO <ArrowUpDown className="w-3 h-3" /></div>
                                            <div className="col-span-4 flex items-center gap-1.5 cursor-pointer hover:text-zinc-300">DESCRIÇÃO <ArrowUpDown className="w-3 h-3" /></div>
                                            <div className="col-span-2 text-center cursor-pointer hover:text-zinc-300">CATEGORIA</div>
                                            <div className="col-span-2 text-right cursor-pointer hover:text-zinc-300">QTD / MÍNIMO</div>
                                            <div className="col-span-2 text-center">STATUS</div>
                                        </div>

                                        {/* Table Body */}
                                        <div className="flex-1 overflow-y-auto custom-scrollbar">
                                            {[
                                                { id: "MEC-042", name: "Rolamento DB NSK 6204", cat: "Mecânica", qty: 12, min: 10, status: "NORMAL", color: "text-green-400 bg-green-400/10 border-green-500/20" },
                                                { id: "EPI-105", name: "Luva de Vaqueta (Par)", cat: "EPI", qty: 3, min: 15, status: "CRÍTICO", color: "text-red-400 bg-red-400/10 border-red-500/20" },
                                                { id: "INS-088", name: "Disco de Desbaste 7\" Norton", cat: "Insumos", qty: 45, min: 20, status: "NORMAL", color: "text-green-400 bg-green-400/10 border-green-500/20" },
                                                { id: "FER-012", name: "Alicate Amperímetro Fluke 325", cat: "Ferramental", qty: 1, min: 1, status: "EMPRESTADO", color: "text-amber-400 bg-amber-400/10 border-amber-500/20" },
                                                { id: "EPI-201", name: "Máscara PFF2 c/ Válvula", cat: "EPI", qty: 50, min: 50, status: "ESTÁVEL", color: "text-green-400 bg-green-400/10 border-green-500/20" },
                                                { id: "INS-112", name: "Eletrodo AWS E7018 3.2mm (Kg)", cat: "Insumos", qty: 15, min: 25, status: "REPOR", color: "text-orange-400 bg-orange-400/10 border-orange-500/20" },
                                                { id: "MEC-098", name: "Correia Industrial A-38", cat: "Mecânica", qty: 6, min: 8, status: "REPOR", color: "text-orange-400 bg-orange-400/10 border-orange-500/20" },
                                            ].map((row, i) => (
                                                <div key={i} className={`flex flex-col lg:grid lg:grid-cols-12 gap-2 lg:gap-4 px-4 lg:px-6 py-4 border-b border-zinc-800/60 items-start lg:items-center text-sm hover:bg-zinc-800/40 transition-colors ${i % 2 === 0 ? '' : 'bg-zinc-900/30'}`}>

                                                    {/* Mobile Card Layout vs Desktop Grid */}
                                                    <div className="lg:col-span-2 text-zinc-500 font-mono text-xs w-full lg:w-auto flex justify-between lg:block">
                                                        <span className="lg:hidden font-bold uppercase tracking-wider text-[10px]">Código:</span>
                                                        {row.id}
                                                    </div>

                                                    <div className="lg:col-span-4 font-bold text-zinc-200 truncate w-full mt-1 lg:mt-0">
                                                        {row.name}
                                                    </div>

                                                    <div className="lg:col-span-2 text-left lg:text-center text-zinc-400 text-xs w-full lg:w-auto mt-2 lg:mt-0 flex gap-2 lg:block">
                                                        <span className="lg:hidden font-bold uppercase tracking-wider text-[10px] text-zinc-600">Categoria:</span>
                                                        <span className="bg-zinc-800/80 border border-zinc-700/50 px-2 py-0.5 rounded-md">{row.cat}</span>
                                                    </div>

                                                    <div className="lg:col-span-2 text-left lg:text-right font-mono text-zinc-300 w-full lg:w-auto mt-2 lg:mt-0 flex justify-between lg:block border-t border-zinc-800/50 lg:border-none pt-3 lg:pt-0">
                                                        <span className="lg:hidden font-bold uppercase tracking-wider text-[10px] text-zinc-600">Qtd / Min:</span>
                                                        <div>
                                                            <span className={row.qty <= row.min ? "text-red-400 font-bold" : "text-white font-bold"}>{row.qty}</span>
                                                            <span className="text-zinc-600"> / {row.min}</span>
                                                        </div>
                                                    </div>

                                                    <div className="lg:col-span-2 flex justify-start lg:justify-center w-full lg:w-auto mt-2 lg:mt-0">
                                                        <div className={`text-[10px] font-bold px-2.5 py-1 rounded-md border ${row.color}`}>
                                                            {row.status}
                                                        </div>
                                                    </div>

                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Coletor scan mockup overlay */}
                                <div className="absolute top-1/2 -translate-y-1/2 right-4 md:bottom-12 md:top-auto md:right-12 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.4)] border-4 border-zinc-900 group cursor-pointer hover:scale-110 transition-transform">
                                    <Barcode className="w-6 h-6 text-white group-hover:animate-pulse" />
                                </div>
                            </div>
                        </section>

                        {/* CARD 5 — RESULTADO ESPERADO */}
                        <section className="mt-16 border-t border-zinc-200 pt-16">
                            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-[2rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                                    <div className="md:w-1/3">
                                        <h3 className="text-3xl font-extrabold text-white mb-2 leading-tight">Resultado Esperado</h3>
                                        <div className="text-orange-400 font-bold tracking-wider uppercase text-xs px-3 py-1 border border-orange-500/30 rounded-full w-fit bg-orange-500/10 mt-4">
                                            Governança Operacional Industrial
                                        </div>
                                    </div>

                                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                                        {[
                                            { t: "Rastreabilidade completa das retiradas", i: <ShieldCheck className="w-5 h-5 text-orange-400" /> },
                                            { t: "Redução de perdas invisíveis", i: <TrendingDown className="w-5 h-5 text-orange-400" /> },
                                            { t: "Maior previsibilidade de reposição", i: <Box className="w-5 h-5 text-orange-400" /> },
                                            { t: "Base estruturada para crescimento", i: <Layers className="w-5 h-5 text-orange-400" /> },
                                            { t: "Dados concretos para gestão", i: <LineChart className="w-5 h-5 text-orange-400" /> }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                                {item.i}
                                                <span className="text-white font-medium text-sm leading-tight">{item.t}</span>
                                            </div>
                                        ))}
                                    </div>
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
