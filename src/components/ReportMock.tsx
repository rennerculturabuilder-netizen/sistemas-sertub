"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Clock, Activity, AlertCircle } from "lucide-react";

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
            <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                    <Activity className="w-5 h-5 text-orange-500" />
                    Exemplo de Relatório (Mock)
                </CardTitle>
                <CardDescription>Visão semanal de tempo da máquina ligada</CardDescription>
            </CardHeader>

            <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 flex flex-col items-center text-center">
                        <span className="text-muted-foreground text-xs mb-1 uppercase tracking-wider font-semibold">Hoje</span>
                        <span className="text-2xl font-bold text-zinc-800">6h 32m</span>
                        <span className="text-xs text-green-500 mt-1 flex items-center gap-1">+12% vs ontem</span>
                    </div>
                    <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 flex flex-col items-center text-center">
                        <span className="text-muted-foreground text-xs mb-1 uppercase tracking-wider font-semibold">Sessões</span>
                        <span className="text-2xl font-bold text-zinc-800">4</span>
                        <span className="text-xs text-muted-foreground mt-1">ligamentos</span>
                    </div>
                    <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 flex flex-col items-center text-center">
                        <span className="text-muted-foreground text-xs mb-1 uppercase tracking-wider font-semibold">Última</span>
                        <span className="text-lg font-bold text-zinc-800">14:10–15:02</span>
                        <span className="text-xs text-orange-500 mt-1 font-medium">Duração: 52m</span>
                    </div>
                    <div className="bg-zinc-50 rounded-lg p-4 border border-orange-300 flex flex-col items-center text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-1">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                        </div>
                        <span className="text-muted-foreground text-xs mb-1 uppercase tracking-wider font-semibold">Paradas</span>
                        <span className="text-2xl font-bold text-zinc-800">3</span>
                        <span className="text-xs text-muted-foreground mt-1">(curtas &lt;5m)</span>
                    </div>
                </div>

                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 12 }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 12 }} />
                            <Tooltip
                                cursor={{ fill: '#f4f4f5' }}
                                contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e4e4e7', borderRadius: '8px', color: '#09090b' }}
                                itemStyle={{ color: '#f97316' }}
                            />
                            <Bar dataKey="time" radius={[4, 4, 0, 0]} maxBarSize={40}>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.time > 6 ? '#f97316' : '#a1a1aa'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
