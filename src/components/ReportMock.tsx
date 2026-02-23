"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Clock, Activity, AlertCircle, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ReportMock() {
    const data = [
        { day: "Seg", time: 4.5 },
        { day: "Ter", time: 6.2 },
        { day: "Qua", time: 5.8 },
        { day: "Qui", time: 7.1 },
        { day: "Sex", time: 6.5 },
        { day: "Sáb", time: 3.0 },
        { day: "Dom", time: 0 },
    ];

    return (
        <Card className="border-zinc-200 bg-white shadow-sm w-full max-w-2xl mx-auto my-12">
            <CardHeader className="border-b border-zinc-100 bg-zinc-50/50 rounded-t-xl">
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-xl flex items-center gap-2">
                            <Activity className="w-5 h-5 text-orange-500" />
                            Analytics Industrial - Curvadora C01
                        </CardTitle>
                        <CardDescription>Performance de produção // Semana 08 de 2026</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-orange-200 text-orange-700 bg-orange-50">SISTEMA ATIVO</Badge>
                </div>
            </CardHeader>

            <CardContent className="pt-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    <div className="bg-white border border-zinc-200 p-4 rounded-xl shadow-sm">
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Disponibilidade</p>
                        <p className="text-2xl font-black text-zinc-900">94.2%</p>
                        <div className="w-full h-1 bg-zinc-100 mt-2 rounded-full overflow-hidden">
                            <div className="w-[94%] h-full bg-green-500" />
                        </div>
                    </div>
                    <div className="bg-white border border-zinc-200 p-4 rounded-xl shadow-sm">
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Ciclo Médio</p>
                        <p className="text-2xl font-black text-zinc-900">18.5s</p>
                        <p className="text-[10px] text-green-500 font-bold mt-1">▲ OTIMIZADO</p>
                    </div>
                    <div className="bg-white border border-zinc-200 p-4 rounded-xl shadow-sm">
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Produção Real</p>
                        <p className="text-2xl font-black text-zinc-900">1.240</p>
                        <p className="text-[10px] text-zinc-400 font-medium mt-1">Peças OK / Turno</p>
                    </div>
                    <div className="bg-white border border-orange-200 p-4 rounded-xl shadow-sm bg-orange-50/20">
                        <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-1">Refugo IA</p>
                        <p className="text-2xl font-black text-zinc-900">1.8%</p>
                        <p className="text-[10px] text-orange-600 font-bold mt-1">▼ REDUÇÃO DE 15%</p>
                    </div>
                </div>

                <div className="h-64 w-full mb-10">
                    <p className="text-xs font-bold text-zinc-500 mb-4 uppercase flex items-center gap-2">
                        <TrendingUp className="w-3 h-3" /> Volume de Dbras por Turno (Mensurável)
                    </p>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 12 }} fontStyle="bold" />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 12 }} />
                            <Tooltip
                                cursor={{ fill: '#f4f4f5', radius: 4 }}
                                contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '12px', color: '#ffffff' }}
                                itemStyle={{ color: '#f97316' }}
                            />
                            <Bar dataKey="time" radius={[6, 6, 0, 0]} maxBarSize={45}>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.time > 6 ? '#f97316' : '#e4e4e7'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="border-t border-zinc-100 pt-6">
                    <p className="text-xs font-bold text-zinc-500 mb-4 uppercase">Histórico Recente de Lotes (Dados IA)</p>
                    <div className="space-y-2">
                        {[
                            { id: "LOT-849", mat: "Tubo Inox 3/4\"", status: "OK", waste: "0.5%" },
                            { id: "LOT-850", mat: "Alumínio 1\"", status: "OK", waste: "1.2%" },
                            { id: "LOT-851", mat: "Aço Carbono 1.5\"", status: "AVISO", waste: "4.8%" },
                        ].map((lot, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-zinc-50 rounded-lg border border-zinc-100 text-xs text-zinc-600">
                                <span className="font-bold text-zinc-900">{lot.id}</span>
                                <span className="w-24 truncate">{lot.mat}</span>
                                <Badge variant="secondary" className={`text-[9px] ${lot.status === 'OK' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>{lot.status}</Badge>
                                <span className="font-mono">Perda: {lot.waste}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
