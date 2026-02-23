import { Factory, Mail, Globe, Linkedin, MessageSquare } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-zinc-950 text-white pt-16 pb-8 border-t border-zinc-800">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                            <img src="/logo.png" alt="Sertub Logo" className="h-10 w-auto brightness-0 invert" />
                            <div className="h-8 w-px bg-zinc-800" />
                            <img src="/gr-labs-white.png" alt="GR Labs Logo" className="h-8 w-auto" />
                        </div>
                        <p className="text-zinc-400 text-sm max-w-sm leading-relaxed mb-6">
                            Transformando a indústria através de dados acionáveis e inteligência artificial preditiva.
                            Uma iniciativa em parceria com a GR Labs.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
                                <Globe className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-orange-500">Sistemas</h4>
                        <ul className="space-y-4 text-sm text-zinc-400">
                            <li><Link href="/sistema-curvadora" className="hover:text-white transition-colors">Sistema Curvadora</Link></li>
                            <li><Link href="/monitoramento" className="hover:text-white transition-colors">Monitoramento Industrial</Link></li>
                            <li><Link href="/almoxarifado" className="hover:text-white transition-colors">Gestão Almoxarifado</Link></li>
                            <li><Link href="/roi" className="hover:text-white transition-colors">Simulador de ROI</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-orange-500">Contato</h4>
                        <ul className="space-y-4 text-sm text-zinc-400">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-orange-500" />
                                suporte@grlabs.com
                            </li>
                            <li className="flex items-center gap-2">
                                <MessageSquare className="w-4 h-4 text-orange-500" />
                                WhatsApp Industrial
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
                    <p>© 2026 Sertub Soluções Integradas & GR Labs. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-zinc-300">Privacidade</a>
                        <a href="#" className="hover:text-zinc-300">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
