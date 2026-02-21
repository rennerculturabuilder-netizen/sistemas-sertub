import React from "react";
import { CheckCircle2, ChevronRight, AlertCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function DiagramSVG() {
    return (
        <div className="w-full overflow-x-auto py-8">
            <div className="min-w-[700px] flex items-center justify-between gap-4 p-8 bg-white rounded-xl border border-zinc-200 shadow-sm">

                {/* Step 1 */}
                <div className="flex flex-col items-center gap-3 w-40">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14c-1.46 0-2.29 1.76-1.14 2.65l6 4.67a2 2 0 0 0 2.28 0l6-4.67c1.15-.89.32-2.65-1.14-2.65H4z" /><path d="M12 2v6" /><path d="M12 22v-4" /></svg>
                    </div>
                    <div className="text-center">
                        <h4 className="font-semibold text-sm">Sensor TC</h4>
                        <p className="text-xs text-muted-foreground">Mede corrente</p>
                    </div>
                </div>

                <ArrowRight className="w-6 h-6 text-muted-foreground animate-pulse" />

                {/* Step 2 */}
                <div className="flex flex-col items-center gap-3 w-40">
                    <div className="w-16 h-16 rounded-lg bg-white border-2 border-zinc-200 flex items-center justify-center shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="M2 12h2" /><path d="M20 12h2" /></svg>
                    </div>
                    <div className="text-center">
                        <h4 className="font-semibold text-sm">Gateway IoT</h4>
                        <p className="text-xs text-muted-foreground">Interpreta ON/OFF</p>
                    </div>
                </div>

                <ArrowRight className="w-6 h-6 text-muted-foreground animate-pulse" />

                {/* Step 3 */}
                <div className="flex flex-col items-center gap-3 w-40">
                    <div className="w-16 h-16 rounded-xl bg-white border-2 border-zinc-200 flex items-center justify-center shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /></svg>
                    </div>
                    <div className="text-center">
                        <h4 className="font-semibold text-sm">API / App</h4>
                        <p className="text-xs text-muted-foreground">Recebe eventos via HTTP/MQTT</p>
                    </div>
                </div>

                <ArrowRight className="w-6 h-6 text-muted-foreground animate-pulse" />

                {/* Step 4 */}
                <div className="flex flex-col items-center gap-3 w-40">
                    <div className="w-16 h-16 rounded-xl bg-primary border-2 border-primary flex items-center justify-center text-primary-foreground shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
                    </div>
                    <div className="text-center">
                        <h4 className="font-semibold text-sm">Relatórios</h4>
                        <p className="text-xs text-muted-foreground">Tempo ligado, sessões</p>
                    </div>
                </div>

            </div>
            <p className="text-xs text-muted-foreground text-center mt-4 italic flex items-center justify-center gap-1">
                <AlertCircle className="w-3 h-3" />
                A instalação deve ser feita por profissional qualificado (NR10).
            </p>
        </div>
    );
}
