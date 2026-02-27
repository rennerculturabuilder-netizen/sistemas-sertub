"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Activity, CalendarDays, BarChart2 } from "lucide-react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";

const dailyData = [
    { name: "Seg", tempo: 5.2 },
    { name: "Ter", tempo: 6.8 },
    { name: "Qua", tempo: 4.5 },
    { name: "Qui", tempo: 7.1 },
    { name: "Sex", tempo: 6.0 },
    { name: "Sáb", tempo: 3.2 },
    { name: "Dom", tempo: 0 },
];

const turnoData = [
    { name: "Turno 1", value: 45 },
    { name: "Turno 2", value: 35 },
    { name: "Turno 3", value: 20 },
];

const statusData = [
    { name: "Ligado", value: 65 },
    { name: "Parado", value: 35 },
];

const COLORS = ["#f97316", "#fb923c", "#fdba74"];
const STATUS_COLORS = ["#f97316", "#e4e4e7"];

export function DashboardMockup() {
    return (
        <div className="w-full bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-zinc-200 font-sans">
            <div className="mb-8 border-b border-zinc-100 pb-6">
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Exemplo de Dashboard Operacional</h3>
                <p className="text-zinc-500">Modelo ilustrativo de acompanhamento do tempo de máquina ligada.</p>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <Card className="bg-zinc-50 border-zinc-100 shadow-none">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium text-zinc-500">Tempo Ligado Hoje</CardTitle>
                        <Clock className="w-4 h-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-zinc-900">6h 15m</div>
                    </CardContent>
                </Card>

                <Card className="bg-zinc-50 border-zinc-100 shadow-none">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium text-zinc-500">Turno Atual</CardTitle>
                        <Activity className="w-4 h-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-zinc-900">4h 30m</div>
                    </CardContent>
                </Card>

                <Card className="bg-zinc-50 border-zinc-100 shadow-none">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium text-zinc-500">Acumulado Semana</CardTitle>
                        <CalendarDays className="w-4 h-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-zinc-900">32h 45m</div>
                    </CardContent>
                </Card>

                <Card className="bg-zinc-50 border-zinc-100 shadow-none">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium text-zinc-500">Número de Sessões</CardTitle>
                        <BarChart2 className="w-4 h-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-zinc-900">12</div>
                    </CardContent>
                </Card>
            </div>

            {/* Charts Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Main Bar Chart */}
                <Card className="lg:col-span-2 border-zinc-100 shadow-none">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-zinc-800">Tempo Ligado (Últimos 7 dias)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[250px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={dailyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e4e7" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#71717a' }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#71717a' }} />
                                    <Tooltip
                                        cursor={{ fill: '#f4f4f5' }}
                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Bar dataKey="tempo" fill="#f97316" radius={[4, 4, 0, 0]} maxBarSize={40} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Side Pies */}
                <div className="grid grid-rows-2 gap-6">
                    <Card className="border-zinc-100 shadow-none">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-semibold text-zinc-800 text-center">Tempo Ligado vs Parado</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 flex justify-center items-center h-[120px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={statusData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={30}
                                        outerRadius={50}
                                        fill="#8884d8"
                                        paddingAngle={2}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {statusData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={STATUS_COLORS[index % STATUS_COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', fontSize: '12px' }} />
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    <Card className="border-zinc-100 shadow-none">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-semibold text-zinc-800 text-center">Distribuição p/ Turno</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 flex justify-center items-center h-[120px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={turnoData}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={50}
                                        fill="#8884d8"
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {turnoData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', fontSize: '12px' }} />
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="text-center w-full">
                <span className="text-xs text-zinc-400">Layout ilustrativo para visualização dos indicadores.</span>
            </div>
        </div>
    );
}
