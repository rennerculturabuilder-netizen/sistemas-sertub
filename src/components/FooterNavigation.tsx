import Link from "next/link";
import { Button } from "@/components/ui/button";
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

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full mt-6">
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto border-zinc-300 text-zinc-700 bg-transparent hover:bg-zinc-100 hover:text-zinc-900 font-semibold text-sm h-12 px-8 rounded-full transition-all active:scale-95 uppercase tracking-widest group"
                            asChild
                        >
                            <Link href="/">
                                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                Voltar para Home
                            </Link>
                        </Button>

                        <Button
                            size="lg"
                            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm h-12 px-8 rounded-full transition-all hover:scale-105 active:scale-95 uppercase tracking-widest group shadow-md"
                            asChild
                        >
                            <Link href="/proximos-passos">
                                Próximos Passos
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
