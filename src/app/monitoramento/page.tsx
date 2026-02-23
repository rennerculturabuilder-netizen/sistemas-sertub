import { Navbar } from "@/components/Navbar";
import { ShieldAlert, Camera, ScanFace } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function MonitoramentoPage() {
    return (
        <main className="min-h-screen bg-zinc-50 text-zinc-950 pb-20 font-sans">
            <Navbar />

            <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-zinc-200 bg-zinc-100 flex items-center">
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <div className="flex justify-center mb-6">
                        <Camera className="w-16 h-16 text-orange-500" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-zinc-950 uppercase">
                        Monitoramento de <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Câmeras</span>
                    </h1>
                    <p className="text-lg text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Sistema de visão computacional e reconhecimento facial para segurança e gestão.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 mt-16 max-w-5xl">
                <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 md:p-12 rounded-3xl border border-zinc-200 shadow-xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

                    <div>
                        <Badge className="bg-orange-500 mb-4 px-3 py-1">Roadmap IA</Badge>
                        <h2 className="text-3xl font-bold mb-6 text-zinc-900 leading-tight">Visão Computacional & <br />Seguranca Preditiva</h2>
                        <ul className="space-y-4">
                            {[
                                { t: "Identificação Inteligente", d: "Reconhecimento facial para controle de acesso a áreas restritas e máquinas." },
                                { t: "Detecção de EPIs", d: "IA que verifica automaticamente o uso de capacetes, óculos e luvas em tempo real." },
                                { t: "Rastreamento de Processo", d: "Monitoramento por vídeo para identificar paradas de linha e gargalos visuais." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3">
                                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                                        <ScanFace className="w-4 h-4 text-orange-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-zinc-800">{item.t}</h4>
                                        <p className="text-sm text-zinc-500 leading-relaxed">{item.d}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative aspect-square bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group shadow-2xl">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555255707-c0796c88b116?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mb-4 border border-orange-500/30">
                                <ScanFace className="w-8 h-8 text-orange-400 animate-pulse" />
                            </div>
                            <span className="text-orange-400 font-mono text-xs mb-2 tracking-widest uppercase">Cam_01 // Live Feed</span>
                            <div className="space-y-1">
                                <p className="text-white font-bold text-sm">SCANNING_ENVIRONMENT...</p>
                                <p className="text-orange-500/80 font-mono text-[10px]">OBJECT_DETECTION: ACTIVE</p>
                            </div>
                        </div>
                        {/* UI Overlay Sim */}
                        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-orange-500/50" />
                        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-orange-500/50" />
                        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-orange-500/50" />
                        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-orange-500/50" />
                    </div>
                </div>
            </section>

        </main>
    );
}
