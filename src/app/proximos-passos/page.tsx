import { Navbar } from "@/components/Navbar";

export default function ProximosPassos() {
    return (
        <main className="min-h-screen bg-zinc-50 font-sans text-zinc-900 pb-24">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-24 px-6 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-950 via-slate-950 to-slate-950"></div>
                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8">
                        Próximos Passos
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto">
                        A partir da estrutura apresentada, o próximo passo é definir prioridades e alinhar a implementação de acordo com a realidade operacional da empresa.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-6 pt-20 max-w-5xl space-y-24">

                {/* Bloco 1 - Curvadora */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-10 border-b border-slate-200 pb-4 uppercase tracking-widest text-sm">
                        1. Curvadora
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-10 rounded-sm border-t-4 border-blue-900 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-8 tracking-tight">Monitoramento de Máquina</h3>
                            <ul className="space-y-6">
                                {[
                                    "Esse indicador é prioridade imediata?",
                                    "O que significa ‘ligada’ na prática?",
                                    "Existe meta de produtividade hoje?",
                                    "É necessário diferenciar ligada vs produzindo?"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="w-1.5 h-1.5 rounded-none bg-blue-900 mt-2 shrink-0"></div>
                                        <span className="text-slate-700 leading-relaxed font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-10 rounded-sm border-t-4 border-blue-900 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-8 tracking-tight">Banco Operacional + Tablet</h3>
                            <ul className="space-y-6">
                                {[
                                    "Hoje existe histórico técnico estruturado?",
                                    "Existe retrabalho frequente?",
                                    "Vale iniciar junto ou em segunda fase?",
                                    "O operador está preparado para registrar dados?"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="w-1.5 h-1.5 rounded-none bg-blue-900 mt-2 shrink-0"></div>
                                        <span className="text-slate-700 leading-relaxed font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bloco 2 - Almoxarifado */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-10 border-b border-slate-200 pb-4 uppercase tracking-widest text-sm">
                        2. Almoxarifado
                    </h2>
                    <div className="bg-white p-10 md:p-12 rounded-sm border-l-4 border-slate-900 shadow-sm max-w-4xl mx-auto">
                        <ul className="space-y-6">
                            {[
                                "O controle atual é manual ou digital?",
                                "Existe divergência de estoque?",
                                "O objetivo é rastreabilidade completa ou organização básica?",
                                "Qual impacto operacional isso gera hoje?"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-none bg-slate-900 mt-2.5 shrink-0"></div>
                                    <span className="text-slate-800 text-lg leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bloco 3 - Indicadores Executivos */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-10 border-b border-slate-200 pb-4 uppercase tracking-widest text-sm">
                        3. Indicadores Executivos
                    </h2>
                    <div className="bg-slate-100 p-10 md:p-12 rounded-sm max-w-4xl mx-auto">
                        <ul className="space-y-6">
                            {[
                                "O que a diretoria realmente quer enxergar?",
                                "Relatórios diários, semanais ou mensais?",
                                "Deseja cruzar produção com custo?",
                                "Existe meta clara de eficiência?"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-none bg-slate-400 mt-2.5 shrink-0"></div>
                                    <span className="text-slate-800 text-lg leading-relaxed font-semibold">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </section>

            {/* Seção Final — Posicionamento Estratégico */}
            <section className="container mx-auto px-6 pt-24 max-w-5xl">
                <div className="bg-slate-900 text-white p-12 md:p-16 text-center shadow-xl border-t-4 border-blue-600">
                    <p className="text-xl md:text-2xl leading-relaxed text-slate-300 font-light">
                        “A estrutura apresentada é um modelo base de transformação operacional.
                    </p>
                    <p className="text-xl md:text-2xl leading-relaxed text-white font-semibold mt-4">
                        A implementação final será desenvolvida sob medida, respeitando prioridades, orçamento e maturidade operacional da empresa.”
                    </p>
                </div>
            </section>

        </main>
    );
}
