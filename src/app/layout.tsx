import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Curvadora Sertub | Plano de Monitoramento & Evolução",
  description: "Monitoramento de tempo real de máquina ligada e controle operacional de processo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-foreground bg-background selection:bg-primary/30`}>
        {children}
      </body>
    </html>
  );
}
