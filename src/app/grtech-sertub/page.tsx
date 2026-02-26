import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Building2,
    Cpu,
    Database,
    Network,
    Link2,
    CheckCircle2,
    XCircle,
    ShieldCheck,
    Server,
    Bot,
    Settings2,
    Combine,
    Layers,
    TrendingUp,
    Factory,
    Lock
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "GR Tech + Sertub | Transformação Tecnológica",
    description: "Transformação Tecnológica Industrial Hiperpersonalizada",
};

export default function ProjetoSertub() {
    return (
        <main className="min-h-screen bg-zinc-50 text-zinc-950 pb-20 font-sans selection:bg-zinc-200">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-zinc-100 border-b border-zinc-200">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                        <div className="flex items-center gap-3">
                            <Cpu className="w-10 h-10 text-zinc-900" />
                            <span className="text-3xl md:text-4xl font-extrabold tracking-tighter text-zinc-900">GR Tech</span>
                        </div>

                        <span className="text-3xl font-light text-zinc-400">+</span>

                        <img
                            src="/logo.png"
                            alt="Sertub Logo"
                            className="h-10 md:h-12 w-auto object-contain drop-shadow-sm grayscale contrast-125"
                        />
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-zinc-900 leading-tight">
                        Transformação Tecnológica <br className="hidden md:block" />
                        <span className="text-zinc-500">Industrial Hiperpersonalizada</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-zinc-600 font-medium mb-6 max-w-3xl mx-auto">
                        Implementação gradual de sistemas inteligentes, organizados e adaptados à realidade operacional da Sertub.
                    </h2>

                    <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
                        A GR Tech atua na Sertub estruturando dados, otimizando processos e desenvolvendo sistemas personalizados para aumentar produtividade e eficiência operacional.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 space-y-24 mt-20 max-w-5xl">

                {/* SEÇÃO 1 – Quem é a GR Tech */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <h3 className="text-sm font-bold tracking-widest text-zinc-400 uppercase">Seção 1</h3>
                        <div className="h-px flex-1 bg-zinc-200"></div>
                    </div>

                    <Card className="border-zinc-200 shadow-sm bg-white overflow-hidden">
                        <div className="md:grid md:grid-cols-5">
                            <div className="md:col-span-2 bg-zinc-900 text-zinc-50 p-8 flex flex-col justify-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-zinc-800 rounded-full opacity-50 blur-2xl"></div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Quem é a <br /> GR Tech</h2>
                                <div className="w-12 h-1 bg-zinc-700 mt-2 relative z-10"></div>
                            </div>
                            <div className="md:col-span-3 p-8">
                                <p className="text-lg text-zinc-700 leading-relaxed mb-6 font-medium">
                                    A GR Tech é uma empresa especializada em Inteligência Artificial, automação empresarial e desenvolvimento de sistemas hiperpersonalizados.
                                    <br /><br />
                                    <span className="text-zinc-500 font-normal">Nosso foco é transformar operações complexas em estruturas organizadas, eficientes e escaláveis.</span>
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { text: "Organização estratégica de dados", icon: <Database className="w-5 h-5 text-zinc-400" /> },
                                        { text: "Automação de processos internos", icon: <Settings2 className="w-5 h-5 text-zinc-400" /> },
                                        { text: "Desenvolvimento de sistemas sob medida", icon: <Combine className="w-5 h-5 text-zinc-400" /> },
                                        { text: "Estruturação de ativos digitais", icon: <Layers className="w-5 h-5 text-zinc-400" /> },
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-0.5">{item.icon}</div>
                                            <span className="text-zinc-700 text-sm font-medium">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* SEÇÃO 2 – Do Modelo Tradicional à Hiperpersonalização */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <h3 className="text-sm font-bold tracking-widest text-zinc-400 uppercase">Seção 2</h3>
                        <div className="h-px flex-1 bg-zinc-200"></div>
                    </div>

                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">Do Modelo Tradicional à Hiperpersonalização</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Card 1: Tradicional */}
                        <Card className="border-zinc-200 shadow-sm bg-white hover:border-zinc-300 transition-colors">
                            <CardHeader className="border-b border-zinc-100 bg-zinc-50/50 pb-6">
                                <div className="w-12 h-12 rounded-lg bg-zinc-100 flex items-center justify-center mb-4">
                                    <Factory className="w-6 h-6 text-zinc-500" />
                                </div>
                                <CardTitle className="text-xl text-zinc-900">Sistemas Tradicionais</CardTitle>
                                <CardDescription className="text-base mt-2 text-zinc-600">
                                    Sistemas empresariais tradicionais (CRMs e ERPs) são desenvolvidos para atender milhares de empresas simultaneamente.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <ul className="space-y-4">
                                    {[
                                        { text: "Estrutura padronizada", icon: <XCircle className="w-5 h-5 text-red-500/70" /> },
                                        { text: "Baixa adaptação à realidade específica", icon: <XCircle className="w-5 h-5 text-red-500/70" /> },
                                        { text: "A empresa precisa se adaptar ao sistema", icon: <XCircle className="w-5 h-5 text-red-500/70" /> },
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-0.5">{item.icon}</div>
                                            <span className="text-zinc-700 text-sm font-medium">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Card 2: GR Tech */}
                        <Card className="border-zinc-900 shadow-md bg-zinc-900 text-zinc-50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full opacity-30 blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                            <CardHeader className="border-b border-zinc-800 pb-6 relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 border border-zinc-700">
                                    <Link2 className="w-6 h-6 text-zinc-300" />
                                </div>
                                <CardTitle className="text-xl text-white">Modelo GR Tech – Hiperpersonalização</CardTitle>
                                <CardDescription className="text-base mt-2 text-zinc-400">
                                    A proposta da GR Tech é desenvolver sistemas adaptados à realidade operacional da Sertub.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pt-6 relative z-10">
                                <ul className="space-y-4">
                                    {[
                                        { text: "Construção sob medida", icon: <CheckCircle2 className="w-5 h-5 text-emerald-500/90" /> },
                                        { text: "Ajustável conforme evolução da empresa", icon: <CheckCircle2 className="w-5 h-5 text-emerald-500/90" /> },
                                        { text: "Baseado na operação real", icon: <CheckCircle2 className="w-5 h-5 text-emerald-500/90" /> },
                                        { text: "Foco em eficiência prática", icon: <CheckCircle2 className="w-5 h-5 text-emerald-500/90" /> },
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-0.5">{item.icon}</div>
                                            <span className="text-zinc-300 text-sm font-medium">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* SEÇÃO 3 – Implementação por Fases */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <h3 className="text-sm font-bold tracking-widest text-zinc-400 uppercase">Seção 3</h3>
                        <div className="h-px flex-1 bg-zinc-200"></div>
                    </div>

                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">Implementação por Fases</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            {
                                phase: "1",
                                title: "Estruturação de Dados",
                                desc: "Coleta e organização de dados operacionais para criar base confiável."
                            },
                            {
                                phase: "2",
                                title: "Organização Operacional",
                                desc: "Padronização de registros e estruturação de processos técnicos."
                            },
                            {
                                phase: "3",
                                title: "Sistemas Personalizados",
                                desc: "Desenvolvimento de sistemas específicos para áreas prioritárias."
                            },
                            {
                                phase: "4",
                                title: "Integração Inteligente",
                                desc: "Evolução para comunicação estruturada entre sistemas e visão unificada."
                            }
                        ].map((item, i) => (
                            <Card key={i} className="border-zinc-200 shadow-sm bg-white relative group hover:border-zinc-400 transition-all duration-300">
                                <div className="absolute top-0 left-0 w-full h-1 bg-zinc-200 group-hover:bg-zinc-900 transition-colors"></div>
                                <CardHeader className="pb-4">
                                    <span className="text-4xl font-black text-zinc-100 absolute top-4 right-4 pointer-events-none group-hover:text-zinc-50 transition-colors">0{item.phase}</span>
                                    <CardTitle className="text-lg text-zinc-900 relative z-10 mt-2">Fase {item.phase} <br /><span className="text-zinc-500 text-sm font-medium">{item.title}</span></CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-zinc-600 font-medium leading-relaxed">
                                        {item.desc}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="bg-zinc-100 border border-zinc-200 rounded-lg p-5 text-center">
                        <p className="text-zinc-600 font-medium flex items-center justify-center gap-2">
                            <TrendingUp className="w-5 h-5 text-zinc-400" />
                            A implementação é gradual. <span className="text-zinc-900 font-bold">Cada fase prepara a base da próxima.</span>
                        </p>
                    </div>
                </section>

                {/* SEÇÃO 4 – Agentes Inteligentes Personalizados */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <h3 className="text-sm font-bold tracking-widest text-zinc-400 uppercase">Seção 4</h3>
                        <div className="h-px flex-1 bg-zinc-200"></div>
                    </div>

                    <Card className="border-zinc-200 shadow-sm bg-white">
                        <CardHeader className="pb-4 flex flex-row items-start gap-4 space-y-0 border-b border-zinc-100">
                            <div className="w-14 h-14 rounded-xl bg-zinc-900 flex items-center justify-center shrink-0">
                                <Bot className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <CardTitle className="text-2xl text-zinc-900">Agentes Digitais Personalizados</CardTitle>
                                <CardDescription className="text-base mt-2 text-zinc-600 max-w-2xl">
                                    Com a base de dados estruturada, será possível desenvolver agentes digitais para apoiar áreas estratégicas da empresa.
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4">Esses agentes poderão:</h4>
                                    <ul className="space-y-3">
                                        {[
                                            "Automatizar tarefas repetitivas",
                                            "Organizar informações internas",
                                            "Gerar relatórios automáticos",
                                            "Apoiar decisões com base em dados históricos"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
                                                <span className="text-zinc-700 font-medium text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-6 flex flex-col justify-center">
                                    <p className="text-zinc-600 text-sm leading-relaxed mb-3">
                                        A criação de agentes será feita conforme necessidade e maturidade de cada setor.
                                    </p>
                                    <p className="text-zinc-900 text-sm font-bold flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-zinc-900" />
                                        Não é uma implantação genérica. É uma evolução estratégica.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* SEÇÃO 5 – Segurança e Governança de Dados */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <h3 className="text-sm font-bold tracking-widest text-zinc-400 uppercase">Seção 5</h3>
                        <div className="h-px flex-1 bg-zinc-200"></div>
                    </div>

                    <Card className="border-zinc-200 shadow-sm bg-white overflow-hidden">
                        <div className="md:grid md:grid-cols-5 md:min-h-[300px]">
                            <div className="md:col-span-2 bg-zinc-100 p-8 border-r border-zinc-200 flex flex-col justify-center">
                                <div className="w-12 h-12 rounded-lg bg-zinc-900 text-white flex items-center justify-center mb-6">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold mb-3 text-zinc-900">Segurança e Controle Total</h2>
                                <p className="text-zinc-600 font-medium text-sm leading-relaxed">
                                    Todos os dados gerados pertencem exclusivamente à Sertub.
                                </p>

                                <div className="mt-8 space-y-3">
                                    {[
                                        "Banco de dados sob controle da empresa",
                                        "Controle de acesso definido internamente",
                                        "Nenhum uso externo das informações",
                                        "GR Tech sem acesso irrestrito aos dados"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <Lock className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                                            <span className="text-zinc-700 text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="md:col-span-3 p-8 flex flex-col justify-center">
                                <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                                    <Server className="w-4 h-4" /> Infraestrutura
                                </h3>

                                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4">
                                        <h4 className="text-xs font-bold text-zinc-500 uppercase mb-2">Fase Inicial</h4>
                                        <p className="text-zinc-900 font-semibold text-sm">PostgreSQL <span className="text-zinc-400 font-normal">(Neon ou similar)</span></p>
                                    </div>
                                    <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4">
                                        <h4 className="text-xs font-bold text-zinc-500 uppercase mb-2">Fase de Expansão</h4>
                                        <p className="text-zinc-900 font-semibold text-sm">AWS <span className="text-zinc-400 font-normal">(Amazon Web Services)</span></p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {["Alta disponibilidade", "Backup automático", "Escalabilidade industrial", "Segurança corporativa"].map((badge, i) => (
                                        <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 text-zinc-700 border border-zinc-200">
                                            {badge}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-zinc-100">
                                    <p className="text-zinc-900 font-medium text-center">
                                        O objetivo é construir governança de dados e eficiência operacional sustentável.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </section>

            </div>
        </main>
    );
}
