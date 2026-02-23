import { Navbar } from "@/components/Navbar";
import { ShieldAlert, Package, Settings, BarChart3, Search, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AlmoxarifadoPage() {
    return (
        <main className="min-h-screen bg-zinc-50 text-zinc-950 pb-20 font-sans">
            <Navbar />

            <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-zinc-200 bg-zinc-100 flex items-center">
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <div className="flex justify-center mb-6">
                        <Package className="w-16 h-16 text-orange-500" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-zinc-950 uppercase">
                        Sistema <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Almoxarifado</span>
                    </h1>
                    <p className="text-lg text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Gestão inteligente e monitoramento de ativos do almoxarifado.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 mt-16 max-w-5xl">
                <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 md:p-12 rounded-3xl border border-zinc-200 shadow-xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

                    <div>
                        <Badge className="bg-orange-500 mb-4 px-3 py-1">Roadmap IA</Badge>
                        <h2 className="text-3xl font-bold mb-6 text-zinc-900 leading-tight">Gestão de Ativos & <br />Previsão de Demanda</h2>
                        <ul className="space-y-4">
                            {[
                                { t: "Inventário Autônomo", d: "IA que analisa padrões de consumo e sugere reestoque antes da falta crítica." },
                                { t: "Rastreabilidade Digital", d: "Localização e gestão de ferramentas de alto valor via IoT integrado ao sistema." },
                                { t: "Análise de Desperdício", d: "Identificação de gargalos no uso de materiais e ferramentas por turno ou equipe." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3">
                                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                                        <BarChart3 className="w-4 h-4 text-orange-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-zinc-800">{item.t}</h4>
                                        <p className="text-sm text-zinc-500 leading-relaxed">{item.d}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-6 shadow-inner relative overflow-hidden">
                        <div className="flex items-center justify-between mb-6">
                            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Dashboard Preview</h4>
                            <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-orange-500" />
                                <div className="w-2 h-2 rounded-full bg-zinc-300" />
                                <div className="w-2 h-2 rounded-full bg-zinc-300" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="h-12 bg-white rounded border border-zinc-200 flex items-center px-4 justify-between">
                                <div className="flex items-center gap-2">
                                    <Search className="w-4 h-4 text-zinc-400" />
                                    <div className="w-24 h-2 bg-zinc-100 rounded" />
                                </div>
                                <div className="w-8 h-4 bg-orange-100 rounded" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="h-24 bg-white rounded border border-zinc-200 p-3">
                                    <div className="w-full h-1 bg-green-500 mb-2" />
                                    <div className="w-12 h-6 bg-zinc-50 rounded mb-1" />
                                    <div className="w-8 h-2 bg-zinc-100 rounded" />
                                </div>
                                <div className="h-24 bg-white rounded border border-zinc-200 p-3">
                                    <div className="w-full h-1 bg-orange-500 mb-2" />
                                    <div className="w-12 h-6 bg-zinc-50 rounded mb-1" />
                                    <div className="w-8 h-2 bg-zinc-100 rounded" />
                                </div>
                            </div>
                            <div className="p-3 bg-orange-50 border border-orange-100 rounded">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="w-20 h-3 bg-orange-200 rounded animate-pulse" />
                                    <Clock className="w-3 h-3 text-orange-400" />
                                </div>
                                <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
                                    <div className="w-3/4 h-full bg-orange-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
