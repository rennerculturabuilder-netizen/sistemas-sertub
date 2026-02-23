import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sertub IA | Inteligência Industrial & Gestão de Ativos",
  description: "Plataforma avançada de monitoramento, visão computacional e analytics industrial para a Sertub.",
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
