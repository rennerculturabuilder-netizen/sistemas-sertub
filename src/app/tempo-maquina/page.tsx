import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import { DiagramSVG } from "@/components/DiagramSVG";
import { ScenarioCards } from "@/components/ScenarioCards";
import { ReportMock } from "@/components/ReportMock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertCircle, Target, CheckCircle2, Zap } from "lucide-react";

export default function TempoMaquinaPage() {
    return (
        <main className="min-h-screen bg-zinc-50 pb-20 font-sans">
            <Navbar />

            <div className="container mx-auto px-4 mt-8 md:mt-16 max-w-6xl">
                <SectionHeader
                    badge="Caminho 1"
                    title="Tempo da Máquina Ligada"
                    subtitle="Medição exata da disponibilidade da máquina sem interferência da operação."
                />

                {/* 1) Resumo executivo */}
                <section className="mb-16">
                    <Card className="border-l-4 border-l-primary bg-white shadow-sm">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                Resumo Executivo
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                                        <Target className="w-5 h-5 text-muted-foreground" />
                                        O que o dono/gestor quer:
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Saber exatamente o tempo que a máquina esteve ligada por turno ou dia de forma automática, sem depender que o operador aperte botões na IHM.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg flex items-center gap-2 mb-2">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        O que entregamos:
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Eventos automáticos de `ON_START` e `ON_STOP` baseados no consumo de energia (corrente), gerando cálculo de Uptime exato por período.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-primary/10 border border-primary/20 rounded-md p-3 text-sm flex gap-2 items-start text-primary-foreground/80">
                                <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <p>
                                    <strong className="text-primary font-semibold">Observação Crítica:</strong> Esta etapa mede quando a máquina está LIGADA. Para distinguir entre "Máquina Ligada" vs "Máquina Produzindo/Curvando", há uma evolução futura explicada nas limitações.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* 2) Como funciona (steps) */}
                <section className="mb-16">
                    <h3 className="text-2xl font-bold mb-8">Como funciona</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { num: "01", title: "Detecção", desc: "Sensor de corrente instalado no motor ou bomba principal detecta fluxo de energia." },
                            { num: "02", title: "Interpretação", desc: "Gateway de hardware lê os dados, aplica histerese contra ruídos e traduz em status ON/OFF." },
                            { num: "03", title: "Transmissão", desc: "Eventos contendo Timestamp e Status são enviados para o sistema por rede local via HTTP/MQTT." },
                            { num: "04", title: "Consolidação", desc: "O software processa os eventos e gera os relatórios de tempo ligado vs parado." }
                        ].map((step, i) => (
                            <div key={i} className="relative p-6 bg-white rounded-xl shadow-sm border border-zinc-200">
                                <div className="text-4xl font-extrabold text-primary/10 absolute top-4 right-4">{step.num}</div>
                                <h4 className="text-lg font-bold mb-2 relative z-10">{step.title}</h4>
                                <p className="text-sm text-muted-foreground relative z-10">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3) Arquitetura visual */}
                <section className="mb-16">
                    <h3 className="text-2xl font-bold mb-6">Arquitetura da Solução</h3>
                    <DiagramSVG />
                </section>

                {/* 4) Opções de Hardware */}
                <section className="mb-16">
                    <h3 className="text-2xl font-bold mb-2">Opções de Hardware</h3>
                    <p className="text-muted-foreground mb-6">Diferentes níveis de investimento e robustez baseados no ambiente da marcenaria/indústria.</p>
                    <ScenarioCards />

                    <div className="bg-white shadow-sm rounded-lg p-5 border border-zinc-200 mt-6">
                        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Componentes comuns necessários p/ todos</h4>
                        <ul className="flex flex-wrap gap-4 text-sm text-foreground/80">
                            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Caixa plástica/metálica (IP54/IP65)</li>
                            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Trilho DIN</li>
                            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Fonte 12V/24V Industrial</li>
                            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Fiação, bornes e proteção (Disjuntor/Fusível)</li>
                        </ul>
                    </div>
                </section>

                {/* 5) Checklist Técnico */}
                <section className="mb-16">
                    <h3 className="text-2xl font-bold mb-6">Checklist de Viabilidade Ténica</h3>
                    <Card className="bg-white shadow-sm border-zinc-200">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1" className="px-6 border-b-zinc-200">
                                <AccordionTrigger className="hover:text-primary">Análise da Máquina</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground space-y-2 pb-4">
                                    <p>• Qual é a tensão de alimentação? (220V, 380V, 440V? Trifásico?)</p>
                                    <p>• Qual a corrente nominal do motor principal/bomba?</p>
                                    <p>• A bomba hidráulica fica ligada constantemente ou apenas no momento da dobra?</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="px-6 border-b-zinc-200">
                                <AccordionTrigger className="hover:text-primary">Instalação Elétrica (NR10)</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground space-y-2 pb-4">
                                    <p>• Há espaço físico no quadro elétrico atual para o gateway e sensor?</p>
                                    <p>• Existe necessidade de um quadro adicional acoplado?</p>
                                    <p>• Há de fato um aterramento compatível e um disjuntor de proteção dedicado pro circuito do Gateway?</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="px-6 border-b-zinc-200">
                                <AccordionTrigger className="hover:text-primary">Rede e Conectividade</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground space-y-2 pb-4">
                                    <p>• Haverá conectividade via Cabo Ethernet (preferível) ou Wi-Fi?</p>
                                    <p>• É possível reservar um IP fixo na rede fabril para este gateway?</p>
                                    <p>• Se os eventos forem mandados para a Cloud, as portas de saída HTTP(s)/MQTT estão liberadas?</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4" className="px-6 border-none border-b-zinc-200">
                                <AccordionTrigger className="hover:text-primary">O que é "Operação"?</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground space-y-2 pb-4">
                                    <p>• Definir claramente com o setor de PCP a regra: o que o sistema deverá considerar máquina ligada?</p>
                                    <p>• Em paradas muito curtas (ex: 20 segundos para trocar o tubo), deve registrar parada ou ignorar (histerese de tempo)?</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Card>
                </section>

                {/* 6) Mock UI */}
                <section className="mb-16">
                    <ReportMock />
                </section>

                {/* 7) Limitações e evolução rápida */}
                <section className="mb-16 border border-zinc-200 bg-white p-6 md:p-8 rounded-xl shadow-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />

                    <div className="flex items-start gap-4">
                        <div className="bg-primary/20 p-3 rounded-full hidden md:block mt-1">
                            <Zap className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-3 text-foreground">Limitações do Passo 1 & Evolução Rápida</h3>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                Em curvadoras hidráulicas, muitas vezes a bomba principal permanece <span className="text-foreground font-semibold">ligada</span> mesmo quando não há tubos sendo dobrados. A medição de corrente isolada trará o <span className="italic">Uptime Geral</span>, o que já garante valor e disciplina, mas pode não refletir exatamente a <span className="italic">Produtividade Efetiva</span>.
                            </p>
                            <h4 className="font-semibold text-sm uppercase text-muted-foreground tracking-wider mb-2 mt-6">Como melhorar depois (Fase 1.5):</h4>
                            <ul className="space-y-2 text-sm text-foreground/80">
                                <li className="flex gap-2">
                                    <span className="text-primary font-bold">1.</span>
                                    Adicionar um segundo canal de medição de corrente em algo que só funciona durante a dobra (ex: motor de avanço, se elétrico).
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-primary font-bold">2.</span>
                                    Integração de um sensor externo de ciclo ou sensor de vibração para diferenciar "Ligada (Idle)" de "Produzindo".
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
