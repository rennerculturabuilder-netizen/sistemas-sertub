import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function FooterNavigation() {
    return (
        <section className="w-full bg-zinc-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl border-t border-zinc-200 pt-12">
                <div className="flex flex-col items-center text-center">
                    <p className="text-sm text-zinc-500 mb-8 max-w-xl leading-relaxed">
                        Esta proposta apresenta uma estrutura inicial de transformação operacional.
                        A implementação final será definida de acordo com as prioridades da empresa.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mt-6">
                        <Link
                            href="/"
                            className="text-sm font-bold uppercase tracking-widest transition-all px-8 py-3 rounded-full flex items-center gap-2 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 w-full sm:w-auto justify-center group shadow-sm hover:shadow-md"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            Voltar para Home
                        </Link>

                        <Link
                            href="/proximos-passos"
                            className="text-sm font-bold uppercase tracking-widest transition-all px-8 py-3 rounded-full flex items-center gap-2 bg-orange-500 text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/40 w-full sm:w-auto justify-center group hover:scale-105"
                        >
                            Próximos Passos
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
