import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FooterNavigation() {
    return (
        <section className="w-full bg-zinc-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl border-t border-zinc-200 pt-12">
                <div className="flex flex-col items-center text-center">
                    <p className="text-sm text-zinc-500 mb-8 max-w-xl leading-relaxed">
                        Esta proposta apresenta uma estrutura inicial de transformação operacional.
                        A implementação final será definida de acordo com as prioridades da empresa.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto border-zinc-300 text-zinc-700 hover:bg-zinc-100 font-medium tracking-wide"
                            asChild
                        >
                            <Link href="/">
                                Voltar para Home
                            </Link>
                        </Button>

                        <Button
                            size="lg"
                            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-medium tracking-wide shadow-none"
                            asChild
                        >
                            <Link href="/proximos-passos">
                                Próximos Passos
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
