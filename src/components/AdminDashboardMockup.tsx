"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Users, ClipboardList, TrendingUp, AlertCircle, FileCheck2, Timer } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const productionData = [
    { name: "Seg", refugo: 12, sucesso: 145 },
    { name: "Ter", refugo: 8, sucesso: 160 },
    { name: "Qua", refugo: 15, sucesso: 130 },
    { name: "Qui", refugo: 5, sucesso: 180 },
    { name: "Sex", refugo: 10, sucesso: 150 },
];

const efficiencyData = [
    { time: "08:00", value: 85 },
    { time: "10:00", value: 88 },
    { time: "12:00", value: 75 },
    { time: "14:00", value: 92 },
    { time: "16:00", value: 95 },
];

export function AdminDashboardMockup() {
    return (
        <div className="w-full bg-slate-50 p-4 md:p-6 rounded-xl border border-slate-200 shadow-sm font-sans flex flex-col gap-6 max-h-[80vh] overflow-y-auto overflow-x-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                    <h2 className="text-xl font-bold gap-2 flex items-center text-slate-900">
                        <TrendingUp className="w-5 h-5 text-orange-500" />
                        Painel Administrativo da Curvadora
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">Visão geral de ordens, produtividade e métricas de qualidade.</p>
                </div>
                <div className="flex gap-2">
                    <Badge variant="outline" className="bg-white">Refugo Semanal: 4%</Badge>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-none">OEE: 88%</Badge>
                </div>
            </div>

            {/* Top Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { title: "Ordens Ativas", val: "12", icon: ClipboardList, color: "text-blue-500" },
                    { title: "Eficiência Atual", val: "92%", icon: Timer, color: "text-orange-500" },
                    { title: "Operadores Logados", val: "3", icon: Users, color: "text-indigo-500" },
                    { title: "Peças Produzidas", val: "1.240", icon: FileCheck2, color: "text-emerald-500" },
                ].map((stat, i) => (
                    <Card key={i} className="shadow-none border-slate-200">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium text-slate-500">{stat.title}</CardTitle>
                            <stat.icon className={`w-4 h-4 ${stat.color}`} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-slate-900">{stat.val}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Card className="col-span-1 lg:col-span-2 shadow-none border-slate-200">
                    <CardHeader>
                        <CardTitle className="text-base font-semibold text-slate-800">Resultado de Produção (Semana)</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[250px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={productionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                                <RechartsTooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Bar dataKey="sucesso" name="Peças Boas" stackId="a" fill="#10b981" radius={[0, 0, 4, 4]} />
                                <Bar dataKey="refugo" name="Refugo" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card className="col-span-1 shadow-none border-slate-200 flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-base font-semibold text-slate-800">Eficiência Hoje (%)</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[250px] flex-1">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={efficiencyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                                <YAxis axisLine={false} tickLine={false} domain={[50, 100]} tick={{ fontSize: 12, fill: '#64748b' }} />
                                <RechartsTooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Line type="monotone" dataKey="value" stroke="#f97316" strokeWidth={3} dot={{ r: 4, fill: "#f97316" }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Last Orders Table mockup */}
            <Card className="shadow-none border-slate-200 overflow-hidden">
                <CardHeader className="bg-slate-50/50 border-b border-slate-100">
                    <CardTitle className="text-base font-semibold text-slate-800">Últimas Ordens de Serviço</CardTitle>
                </CardHeader>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-500 bg-slate-50 border-b border-slate-200 uppercase">
                            <tr>
                                <th className="px-4 py-3 font-medium">Ordem</th>
                                <th className="px-4 py-3 font-medium">Material</th>
                                <th className="px-4 py-3 font-medium">Status</th>
                                <th className="px-4 py-3 font-medium">Progresso</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { id: "OS-2401", mat: "Tubo Inox 2\"", st: "Em Produção", color: "bg-blue-100 text-blue-700", prog: "75%" },
                                { id: "OS-2402", mat: "Tubo Aço 1.5\"", st: "Finalizada", color: "bg-green-100 text-green-700", prog: "100%" },
                                { id: "OS-2403", mat: "Tubo Cobre 1/2\"", st: "Pausada", color: "bg-amber-100 text-amber-700", prog: "30%" },
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                                    <td className="px-4 py-3 font-medium text-slate-900">{row.id}</td>
                                    <td className="px-4 py-3 text-slate-600">{row.mat}</td>
                                    <td className="px-4 py-3">
                                        <Badge className={`${row.color} border-none font-medium hover:${row.color}`}>{row.st}</Badge>
                                    </td>
                                    <td className="px-4 py-3 text-slate-600 font-medium">{row.prog}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
}
