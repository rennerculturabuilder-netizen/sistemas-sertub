const fs = require('fs');
const path = 'c:\\\\Users\\\\renne\\\\dev\\\\sertub-sistemas\\\\src\\\\app\\\\sistema-curvadora\\\\page.tsx';
let content = fs.readFileSync(path, 'utf8');

const startIndex = content.indexOf('                    {/* FASE 2 CONTENT */}');
const endIndex = content.indexOf('                {/* Checklist de Viabilidade */}', startIndex);

if (startIndex === -1 || endIndex === -1) {
    console.log('Could not find boundaries.');
    process.exit(1);
}

const before = content.substring(0, startIndex);
const after = content.substring(endIndex);

const newBlock = `                    {/* FASE 2 CONTENT */}
                    <div id="fase2-content" className="space-y-16 outline-none">
                        
                        {/* Header Fase 2 */}
                        <div className="text-center max-w-3xl mx-auto pt-10">
                            <Badge className="bg-orange-100 text-orange-600 mb-6 border border-orange-200 px-4 py-1.5 uppercase tracking-widest text-xs font-bold">Fase 2</Badge>
                            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight mb-6">
                                Organização Digital <br />da Curvadora
                            </h2>
                            <p className="text-xl text-zinc-600 leading-relaxed font-medium">
                                Depois de medir o tempo da máquina ligada, começamos a organizar o que acontece nela.
                            </p>
                            
                            <div className="mt-8 bg-zinc-50 border border-zinc-200 p-8 rounded-2xl shadow-sm text-left relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-[40px] translate-x-1/2 -translate-y-1/2" />
                                <p className="text-lg text-zinc-800 font-semibold mb-6">Agora não é só "máquina ligada". É:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "O que foi produzido",
                                        "Quem produziu",
                                        "Como foi feito",
                                        "Qual foi o resultado"
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-3 items-center">
                                            <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <span className="text-zinc-700 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-6 border-t border-zinc-200">
                                    <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest leading-relaxed">
                                        <span className="text-orange-600">A curvadora começa a ter histórico.</span><br/>
                                        Começa a ter rastreabilidade.<br/>
                                        Começa a ter memória.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Cards de Sistema */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* CARD 1 : Admin */}
                            <Card className="bg-white border-zinc-200 shadow-sm flex flex-col h-full hover:border-orange-300 transition-colors">
                                <CardHeader className="pb-4 pt-8">
                                    <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-zinc-900 leading-tight">Card 1 <br/><span className="text-xl font-bold text-orange-600">Sistema do Administrador</span></CardTitle>
                                    <CardDescription className="text-sm mt-2 text-zinc-500 font-medium uppercase tracking-wider">
                                        (Acesso pelo computador)
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex flex-col flex-1 px-4 lg:px-8 pb-8">
                                    <h4 className="text-lg font-bold text-zinc-800 mb-4 flex items-center gap-2">
                                        <BarChart3 className="w-5 h-5 text-orange-500" />
                                        O painel de controle da operação
                                    </h4>
                                    <p className="text-sm text-zinc-600 leading-relaxed font-medium mb-8">
                                        O responsável pela produção passa a ter visão completa da curvadora. Ele consegue:
                                    </p>
                                    
                                    <div className="space-y-4 mb-10 flex-1">
                                        {[
                                            "Criar ordens de serviço",
                                            "Acompanhar produções em andamento",
                                            "Ver histórico completo de cada lote",
                                            "Identificar retrabalho",
                                            "Analisar desempenho por operador",
                                            "Consultar parâmetros usados anteriormente"
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-3 items-start bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                                                <span className="text-sm text-zinc-700 font-medium">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 text-sm">
                                        <p className="font-bold text-zinc-900 mb-4">O que isso gera?</p>
                                        <div className="space-y-2 mb-6">
                                            {[
                                                "Controle real da operação",
                                                "Decisão baseada em dados",
                                                "Histórico organizado",
                                                "Redução de erros recorrentes"
                                            ].map((item, i) => (
                                                <div key={i} className="flex gap-2 items-center">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                    <span className="font-medium text-orange-900">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-orange-600 font-black uppercase tracking-wider text-xs">É onde a curvadora vira processo.</p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* CARD 2 : Operador */}
                            <Card className="bg-white border-zinc-200 shadow-sm flex flex-col h-full hover:border-orange-300 transition-colors">
                                <CardHeader className="pb-4 pt-8">
                                    <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-zinc-900 leading-tight">Card 2 <br/><span className="text-xl font-bold text-orange-600">Sistema do Operador</span></CardTitle>
                                    <CardDescription className="text-sm mt-2 text-zinc-500 font-medium uppercase tracking-wider">
                                        (Tablet ao lado da máquina)
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex flex-col flex-1 px-4 lg:px-8 pb-8">
                                    <h4 className="text-lg font-bold text-zinc-800 mb-4 flex items-center gap-2">
                                        <Target className="w-5 h-5 text-orange-500" />
                                        Simples. Direto. Funcional.
                                    </h4>
                                    <p className="text-sm text-zinc-600 leading-relaxed font-medium mb-8">
                                        O operador não precisa de complexidade. <br/>Ele recebe a ordem de serviço no tablet e visualiza:
                                    </p>
                                    
                                    <div className="grid grid-cols-2 gap-3 mb-8">
                                        {[
                                            "Tipo de tubo",
                                            "Espessura",
                                            "Raio / curvatura",
                                            "Especificações do pedido"
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-2 items-center bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                                                <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0" />
                                                <span className="text-xs text-zinc-700 font-semibold">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mb-10 flex-1">
                                        <p className="text-sm font-bold text-zinc-900 mb-4">Durante a produção, ele registra:</p>
                                        <div className="space-y-3">
                                            {[
                                                "Parâmetros utilizados",
                                                "Ajustes realizados",
                                                "Observações importantes"
                                            ].map((item, i) => (
                                                <div key={i} className="flex gap-3 items-center bg-orange-50/50 p-3 rounded-lg border border-orange-100/50">
                                                    <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                                    <span className="text-sm text-zinc-700 font-medium">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-zinc-900 p-6 rounded-2xl text-sm border border-zinc-800 shadow-lg">
                                        <p className="font-bold text-white mb-2 flex items-center gap-2">
                                            <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            Rápido e prático
                                        </p>
                                        <p className="text-zinc-400">Tudo centralizado de forma ágil para não atrasar a produção.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Bloco de Inspeção e Resultados */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                            {/* Inspeção */}
                            <div className="bg-white border text-left border-zinc-200 p-8 rounded-2xl shadow-sm relative overflow-hidden h-full flex flex-col">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500"></div>
                                <h4 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
                                    <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    Etapa Final – Inspeção
                                </h4>
                                <p className="text-zinc-600 font-medium mb-6">Após a produção, o inspetor acessa o sistema, verifica a qualidade e marca:</p>
                                
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-green-50 border border-green-200 p-4 rounded-xl flex items-center justify-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                                        <span className="font-bold text-green-900 text-lg">OK</span>
                                    </div>
                                    <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-center justify-center gap-3">
                                        <AlertTriangle className="w-6 h-6 text-amber-600" />
                                        <span className="font-bold text-amber-900 text-sm leading-tight">Ajuste / Retrabalho</span>
                                    </div>
                                </div>
                                <p className="text-sm font-bold text-zinc-500 mt-auto uppercase tracking-widest">A informação fica salva no histórico.</p>
                            </div>

                            {/* O que nasce aqui */}
                            <div className="bg-white border text-left border-zinc-200 p-8 rounded-2xl shadow-sm relative overflow-hidden h-full flex flex-col">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-[40px] translate-x-1/2 -translate-y-1/2" />
                                <h4 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
                                    <TrendingDown className="w-6 h-6 text-orange-500" />
                                    O que nasce aqui?
                                </h4>
                                <div className="bg-zinc-900 text-white p-5 rounded-xl border border-zinc-800 mb-6 shadow-inner">
                                    <p className="text-sm font-black uppercase text-zinc-500 mb-2">Um banco de dados técnico.</p>
                                    <p className="text-sm font-medium leading-relaxed">
                                        No futuro, o sistema pode indicar:<br/>
                                        <span className="text-orange-400 italic">"Na última vez que esse tubo foi produzido, o melhor resultado foi com esses parâmetros."</span>
                                    </p>
                                </div>
                                <p className="font-bold text-zinc-900 mb-4 text-sm mt-auto">Isso significa:</p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Menos tentativa e erro",
                                        "Menos desperdício",
                                        "Mais padronização",
                                        "Mais eficiência"
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-2 items-center">
                                            <CheckCircle2 className="w-4 h-4 text-orange-500" />
                                            <span className="font-semibold text-zinc-700 text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Resultado da Fase 2 */}
                        <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-800 to-zinc-900 text-white rounded-[2rem] p-10 md:p-14 text-center mt-16 shadow-2xl relative overflow-hidden border border-zinc-700">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500" />
                            
                            <h3 className="text-2xl md:text-3xl font-bold mb-10 flex items-center justify-center gap-3">
                                <Target className="w-8 h-8 text-orange-500" />
                                Resultado da Fase 2
                            </h3>
                            
                            <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl font-medium text-zinc-300">
                                <p className="text-white font-bold">A máquina continua a mesma. Mas o processo evolui.</p>
                                
                                <div className="flex flex-col md:flex-row gap-6 justify-center items-center py-6">
                                    <div className="bg-zinc-800/80 px-6 py-4 rounded-xl w-full md:w-auto text-left border border-zinc-700">
                                        <span className="text-red-400 line-through text-sm block mb-1 font-bold">Sai o controle manual</span>
                                        <span className="text-white text-base">Entra organização digital</span>
                                    </div>
                                    <div className="bg-zinc-800/80 px-6 py-4 rounded-xl w-full md:w-auto text-left border border-zinc-700">
                                        <span className="text-red-400 line-through text-sm block mb-1 font-bold">Sai o "acho que foi assim"</span>
                                        <span className="text-white text-base">Entra histórico registrado</span>
                                    </div>
                                </div>

                                <p className="text-orange-400 font-bold text-xl md:text-2xl pt-4">
                                    A curvadora deixa de ser apenas uma máquina.<br/>
                                    <span className="text-white">Ela passa a ser um sistema inteligente em construção.</span>
                                </p>
                            </div>
                        </div>
                    </div>
`;

fs.writeFileSync(path, before + newBlock + '\n' + after, 'utf8');
console.log('Update successful');
"
