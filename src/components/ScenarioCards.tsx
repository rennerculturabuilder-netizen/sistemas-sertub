import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Factory, Zap, ShieldCheck } from "lucide-react";

export function ScenarioCards() {
    const scenarios = [
        {
            title: "Econômico (MVP)",
            icon: <Zap className="w-6 h-6 text-yellow-500" />,
            badge: "Custo x Benefício",
            sensor: "SCT-013-000 (clamp)",
            gateway: "ESP32 / ESP8266",
            desc: "Indicado para teste de conceito e baixo custo.",
            budget: "R$ 1.500 – 2.400",
            risk: "Menos robusto para ambiente industrial agressivo.",
            highlight: false,
        },
        {
            title: "Semi-industrial",
            icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
            badge: "Recomendado",
            sensor: "Acrel AKH-0.66 ou YHDC SCT-019",
            gateway: "Raspberry Pi 4 com caixa DIN IP65",
            desc: "O melhor equilíbrio entre robustez e investimento inicial.",
            budget: "R$ 2.400 – 6.200 (média R$ 4.200)",
            risk: "Excelente para a grande maioria das indústrias médias.",
            highlight: true,
        },
        {
            title: "Industrial Completo",
            icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
            badge: "Plug & Play",
            sensor: "Schneider PowerTag / Siemens PAC",
            gateway: "Siemens IoT2040 / Advantech",
            desc: "Maior robustez, certificações completas e pronto para integrar.",
            budget: "R$ 4.500 – 13.500 (média R$ 8.500)",
            risk: "Investimento alto; hardware de prateleira confiável.",
            highlight: false,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            {scenarios.map((s, i) => (
                <Card
                    key={i}
                    className={`relative border flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${s.highlight
                        ? "border-primary shadow-[0_0_20px_rgba(249,115,22,0.15)] bg-white"
                        : "border-zinc-200 bg-white hover:border-primary/50 hover:shadow-md"
                        }`}
                >
                    {s.highlight && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                            <Badge className="bg-primary text-primary-foreground border-none">
                                {s.badge}
                            </Badge>
                        </div>
                    )}
                    <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center mb-4">
                            {s.icon}
                        </div>
                        <CardTitle>{s.title}</CardTitle>
                        <CardDescription>{s.desc}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-1">
                        <div className="space-y-2">
                            <p className="text-sm font-medium text-muted-foreground">Sensor de Corrente</p>
                            <p className="text-sm border-l-2 border-primary/50 pl-2">{s.sensor}</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm font-medium text-muted-foreground">Gateway / Processamento</p>
                            <p className="text-sm border-l-2 border-primary/50 pl-2">{s.gateway}</p>
                        </div>
                        <div className="bg-zinc-50 rounded-md p-3 mt-4 border border-zinc-200">
                            <p className="text-xs text-muted-foreground mb-1">Orçamento Médio (Hardware)</p>
                            <p className="font-semibold text-primary">{s.budget}</p>
                        </div>
                    </CardContent>
                    <CardFooter className="border-t border-zinc-200 pt-4 bg-zinc-50 rounded-b-xl">
                        <p className="text-xs text-muted-foreground italic">{s.risk}</p>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
