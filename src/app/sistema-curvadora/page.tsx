"use client";

import { Navbar } from "@/components/Navbar";
import { FooterNavigation } from "@/components/FooterNavigation";
import { SectionHeader } from "@/components/SectionHeader";
import { DiagramSVG } from "@/components/DiagramSVG";


import { DashboardMockup } from "@/components/DashboardMockup";
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
    ArrowRight,
    ExternalLink, Network, Wrench
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
                            <h3 className="text-2xl font-bold mb-8">Como o Monitoramento Funciona</h3>

                            {/* Horizontal Flow Container */}
                            <div className="flex flex-col md:flex-row gap-4 relative">
                                {/* Connecting Line for Desktop */}
                                <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] h-0.5 bg-zinc-200 z-0"></div>

                                {[
                                    { num: "1", title: "Detecção na Máquina", desc: "Um sensor de corrente será instalado no motor principal para identificar quando a máquina está ligada ou desligada." },
                                    { num: "2", title: "Processamento Local", desc: "Um gateway interpreta automaticamente o sinal do sensor e registra o status de funcionamento." },
                                    { num: "3", title: "Envio para o Sistema", desc: "As informações são enviadas para o sistema da empresa e armazenadas de forma estruturada." },
                                    { num: "4", title: "Dashboard e Relatórios", desc: "Será desenvolvido um dashboard para acompanhamento de tempo ligado, sessões e disponibilidade da máquina." }
                                ].map((step, i) => (
                                    <div key={i} className="flex-1 relative z-10 flex flex-col items-center text-center">
                                        <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xl mb-4 shadow-md ring-4 ring-zinc-50">
                                            {step.num}
                                        </div>
                                        <div className="bg-white p-5 rounded-xl shadow-sm border border-zinc-200 h-full w-full relative">
                                            {i < 3 && <ArrowRight className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-300" />}
                                            <h4 className="text-lg font-bold mb-3 text-zinc-900">{step.title}</h4>
                                            <p className="text-sm text-zinc-600 leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </section>

                        <section className="space-y-16">
                            <DashboardMockup />

                            {/* NOVO BLOCO: Kits para Implantação */}
                            <div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-8">Kits recomendados (Fase 1 – Máquina Ligada)</h3>

                                {/* Cards de Orçamento e Validação */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                                    {/* CARD A: ORÇAMENTO */}
                                    <Card className="bg-white border-zinc-200 shadow-sm flex flex-col h-full hover:border-orange-300 transition-colors">
                                        <CardHeader className="pb-4 pt-8">
                                            <Badge className="bg-zinc-100 text-zinc-600 hover:bg-zinc-200 w-fit mb-4 text-xs font-semibold">Estimativa preliminar</Badge>
                                            <CardTitle className="text-xl font-bold text-zinc-900 leading-tight">Orçamento de Referência <br /><span className="text-sm font-semibold text-zinc-500">— Fase 1 (Máquina Ligada)</span></CardTitle>
                                            <CardDescription className="text-sm mt-3 text-zinc-600 leading-relaxed font-medium">
                                                Este orçamento é uma referência para estimar investimento. A definição final depende de validação técnica no quadro elétrico e alinhamento com Marcelo (responsável pela máquina) e eletricista NR10.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex flex-col flex-1 px-4 lg:px-6 pb-6">
                                            <div className="text-center bg-orange-50 border border-orange-100 py-4 rounded-xl mb-6 shadow-sm">
                                                <div className="text-[10px] uppercase font-bold text-orange-600 tracking-wider mb-1">Total Estimado</div>
                                                <div className="text-3xl font-extrabold text-orange-600">R$ 2.210</div>
                                            </div>

                                            <div className="flex-1">
                                                <Accordion type="single" collapsible className="w-full">
                                                    {[
                                                        {
                                                            name: "TOMZN TO194E-9SY — Multimedidor Trifásico + TC 200A",
                                                            price: "R$ 471",
                                                            href: "https://www.mercadolivre.com.br/multimedidor-grandezas-eletricas-energia-trifasico-com-tc/up/MLBU602248891",
                                                            note: "Selecionar TC 200A no momento da compra."
                                                        },
                                                        {
                                                            name: "EIC-ETH485 — Conversor Ethernet → RS485 Modbus",
                                                            price: "R$ 332",
                                                            href: "https://www.mercadolivre.com.br/conversor-ethernet-rs485-485-gateway-modbus-c-nota-fiscal/up/MLBU754015583",
                                                            note: null
                                                        },
                                                        {
                                                            name: "Cabo Discabos RS485 Blindado 12m — 22 AWG",
                                                            price: "R$ 199",
                                                            href: "https://www.mercadolivre.com.br/cabo-para-automacao-residencia-blindado-protocolo-rs-485-12m/up/MLBU1426064444",
                                                            note: null
                                                        },
                                                        {
                                                            name: "Kit NextPi — Raspberry Pi 4 4GB + SD 128GB",
                                                            price: "R$ 1.208",
                                                            href: "https://produto.mercadolivre.com.br/MLB-4507421806-kit-raspberry-pi-4-4gb-case-cooler-fonte-hdmi-128gb-nf-_JM",
                                                            note: null
                                                        }
                                                    ].map((prod, idx) => (
                                                        <AccordionItem value={`oa-${idx}`} key={idx} className="border-b-zinc-100 px-0">
                                                            <AccordionTrigger className="hover:text-orange-500 text-left text-sm font-semibold text-zinc-800 py-4 data-[state=open]:text-orange-600 outline-none group hover:no-underline [&[data-state=open]>div>svg]:rotate-90">
                                                                <div className="flex items-center justify-between w-full gap-2 relative pl-6">
                                                                    <svg className="w-3.5 h-3.5 absolute left-0 top-1/2 -translate-y-1/2 text-zinc-400 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                                                    <span className="leading-snug">
                                                                        {prod.name}
                                                                    </span>
                                                                    <span className="shrink-0 text-zinc-500 font-medium whitespace-nowrap hidden sm:inline-block">{prod.price}</span>
                                                                </div>
                                                            </AccordionTrigger>
                                                            <AccordionContent className="text-zinc-600 space-y-4 pb-4 pl-6">
                                                                <div className="sm:hidden font-medium text-orange-600 text-sm mb-2">{prod.price}</div>
                                                                {prod.note && (
                                                                    <div className="bg-amber-50 text-amber-900 px-3 py-2 rounded text-xs font-semibold">Nota: {prod.note}</div>
                                                                )}
                                                                <Button asChild variant="outline" size="sm" className="w-full mt-2 font-semibold hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50 transition-colors group">
                                                                    <a href={prod.href} target="_blank" rel="noopener noreferrer">
                                                                        Ver produto no MercadoLivre
                                                                        <ExternalLink className="w-3.5 h-3.5 ml-2 text-zinc-400 group-hover:text-orange-500" />
                                                                    </a>
                                                                </Button>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    ))}
                                                </Accordion>
                                            </div>

                                            <div className="mt-8 pt-4 border-t border-zinc-100">
                                                <div className="text-center text-xs text-zinc-600 font-semibold mb-3">
                                                    Fluxo: Medidor → RS485 → Gateway → Ethernet → Raspberry Pi → API → Dashboard.
                                                </div>
                                                <div className="text-center text-[11px] text-zinc-400 max-w-[280px] mx-auto">
                                                    Valores referenciais. Podem variar conforme disponibilidade e frete.
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* CARD B: VALIDAÇÃO */}
                                    <Card className="bg-zinc-50 border-zinc-200 shadow-sm flex flex-col h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-100 via-zinc-50 to-white relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-[40px] translate-x-1/2 -translate-y-1/2" />
                                        <CardHeader className="pb-4 pt-8">
                                            <Badge className="bg-orange-100 text-orange-800 border-none w-fit mb-4 text-xs font-bold px-3 py-1">Obrigatório antes da compra</Badge>
                                            <CardTitle className="text-xl font-bold text-zinc-900 leading-tight">Notas de Validação <br /><span className="text-sm font-semibold text-zinc-500">(Marcelo + Infraestrutura)</span></CardTitle>
                                            <CardDescription className="text-sm mt-3 text-zinc-600 leading-relaxed font-medium">
                                                Antes de comprar qualquer item, precisamos validar as condições reais da máquina e do ambiente para garantir compatibilidade e instalação segura.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex flex-col flex-1 px-4 lg:px-6 pb-6 relative z-10">

                                            <div className="space-y-8 flex-1">
                                                {/* Bloco 1 */}
                                                <div>
                                                    <h5 className="font-bold text-zinc-900 text-[13px] uppercase tracking-wider flex items-center gap-2 mb-4">
                                                        <Settings2 className="w-4 h-4 text-orange-500" />
                                                        Dados da máquina (com Marcelo)
                                                    </h5>
                                                    <div className="space-y-3">
                                                        {[
                                                            "Tensão da máquina: 220V / 380V / 440V (trifásico)",
                                                            "Corrente nominal do motor (A) ou potência (kW/CV)",
                                                            "Existe inversor de frequência ou soft-starter?",
                                                            "A bomba hidráulica fica ligada continuamente quando a máquina está “ligada”?",
                                                            "Melhor ponto de medição no quadro (antes/depois do contator, qual circuito do motor)"
                                                        ].map((item, i) => (
                                                            <div key={i} className="flex gap-2.5 items-start">
                                                                <div className="w-4 h-4 rounded border-2 border-zinc-300 bg-white mt-0.5 shrink-0" />
                                                                <span className="text-sm text-zinc-700 leading-snug">{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Bloco 2 */}
                                                <div>
                                                    <h5 className="font-bold text-zinc-900 text-[13px] uppercase tracking-wider flex items-center gap-2 mb-4">
                                                        <Network className="w-4 h-4 text-orange-500" />
                                                        Infraestrutura de rede (ambiente)
                                                    </h5>
                                                    <div className="space-y-3">
                                                        {[
                                                            "Há sinal de Wi-Fi estável perto da curvadora?",
                                                            "Existe ponto de rede Ethernet disponível?",
                                                            "Se não houver ponto, dá para puxar cabo? (rota e distância)",
                                                            "Existe necessidade de IP fixo / DHCP na rede da empresa?",
                                                            "Restrição de acesso (firewall/porta) para enviar dados ao sistema?"
                                                        ].map((item, i) => (
                                                            <div key={i} className="flex gap-2.5 items-start">
                                                                <div className="w-4 h-4 rounded border-2 border-zinc-300 bg-white mt-0.5 shrink-0" />
                                                                <span className="text-sm text-zinc-700 leading-snug">{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Bloco 3 */}
                                                <div>
                                                    <h5 className="font-bold text-zinc-900 text-[13px] uppercase tracking-wider flex items-center gap-2 mb-4">
                                                        <Wrench className="w-4 h-4 text-orange-500" />
                                                        Instalação física e elétrica (NR10)
                                                    </h5>
                                                    <div className="space-y-3">
                                                        {[
                                                            "Espaço disponível no quadro para instalar medidor DIN",
                                                            "Caixa de proteção (IP) para o gateway / organização do cabeamento",
                                                            "Necessidade de fonte 12V/24V no quadro (se aplicável)",
                                                            "Proteção contra surtos e aterramento adequados",
                                                            "Distância aproximada entre medidor e gateway (usar 12m como referência do cabo)"
                                                        ].map((item, i) => (
                                                            <div key={i} className="flex gap-2.5 items-start">
                                                                <div className="w-4 h-4 rounded border-2 border-zinc-300 bg-white mt-0.5 shrink-0" />
                                                                <span className="text-sm text-zinc-700 leading-snug">{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                        </CardContent>
                                    </Card>
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

            <FooterNavigation />
        </main>
    );
}
