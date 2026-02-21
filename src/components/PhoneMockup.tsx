import { CheckCircle, Smile, Bell, MapPin, ShieldCheck, Clock } from "lucide-react";

export function PhoneMockup() {
    return (
        <div className="relative flex justify-center items-center w-full max-w-sm mx-auto h-[600px] mt-10 md:mt-0 perspective-1000">

            {/* Glow effect behind phone */}
            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full scale-75 z-0" />

            {/* Main Phone Body */}
            <div className="relative z-10 w-[280px] h-[560px] bg-orange-900 rounded-[40px] p-3 shadow-2xl border-[4px] border-orange-800 mockup-float">

                {/* Notch area */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-orange-900 rounded-b-xl z-30" />

                {/* Screen */}
                <div className="w-full h-full bg-orange-950 rounded-[32px] overflow-hidden flex flex-col relative border border-orange-800">

                    <div className="absolute inset-0 bg-gradient-to-b from-orange-900 to-orange-950 pointer-events-none" />

                    {/* Header */}
                    <div className="flex justify-between items-center p-5 pt-8 text-white relative z-20">
                        <span className="font-semibold">Sertub.ID</span>
                        <Bell className="w-5 h-5 text-orange-400" />
                    </div>

                    {/* Face Scanner */}
                    <div className="flex-1 flex items-center justify-center relative z-20">
                        <div className="w-48 h-48 border-[3px] border-primary rounded-full flex items-center justify-center relative shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                            {/* Animated Dashed Border (simulated with CSS / SVG in complete version, simplified here) */}
                            <div className="absolute inset-[-10px] border-2 border-primary/40 border-dashed rounded-full animate-[spin_10s_linear_infinite]" />

                            {/* Scanning Line */}
                            <div className="absolute w-40 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent rounded-full animate-[scan_2s_ease-in-out_infinite] blur-[1px]" />

                            <Smile className="w-16 h-16 text-primary/80" />
                        </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="p-6 text-center text-white relative z-20 bg-orange-900/50 backdrop-blur-md rounded-t-3xl border-t border-orange-800">
                        <span className="block text-4xl font-bold font-mono tracking-tighter tabular-nums mb-2">08:00:15</span>
                        <div className="flex items-center justify-center gap-2 text-emerald-400 font-medium">
                            <CheckCircle className="w-4 h-4" />
                            Ponto registrado
                        </div>
                    </div>

                </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute z-20 flex items-center gap-3 px-4 py-3 bg-white border border-zinc-200 rounded-xl shadow-xl text-sm font-medium text-zinc-700 animate-[float_3s_ease-in-out_infinite] top-[15%] -left-[10%] max-w-[200px] whitespace-nowrap">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Geolocalização ativa</span>
            </div>

            <div className="absolute z-20 flex items-center gap-3 px-4 py-3 bg-white border border-zinc-200 rounded-xl shadow-xl text-sm font-medium text-zinc-700 animate-[float_3.5s_ease-in-out_infinite_animation-delay-1s] top-[45%] -right-[15%] max-w-[200px] whitespace-nowrap">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                <span>Liveness Detection</span>
            </div>

            <div className="absolute z-20 flex items-center gap-3 px-4 py-3 bg-white border border-zinc-200 rounded-xl shadow-xl text-sm font-medium text-zinc-700 animate-[float_4s_ease-in-out_infinite_animation-delay-2s] bottom-[20%] left-0 max-w-[200px] whitespace-nowrap">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span>Modo offline</span>
            </div>

            {/* Styles for animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes scan {
          0%, 100% { top: 10%; opacity: 0; }
          10% { opacity: 1; }
          50% { top: 90%; }
          90% { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .mockup-float {
          animation: float 6s ease-in-out infinite;
        }
      `}} />
        </div>
    );
}
