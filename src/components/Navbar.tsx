"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Menu, Activity, Factory, Cpu, Fingerprint, Calculator, Package, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

export function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
    });

    const navItems = [
        { name: "Reconhecimento Facial", href: "/monitoramento", icon: <Fingerprint className="w-4 h-4" /> },
        { name: "Sistema Curvadora", href: "/sistema-curvadora", icon: <Activity className="w-4 h-4" /> },
        { name: "Almoxarifado", href: "/almoxarifado", icon: <Package className="w-4 h-4" /> },
        { name: "ROI", href: "/roi", icon: <Calculator className="w-4 h-4" /> },
        { name: "Saiba Mais", href: "/grtech-sertub", icon: <Info className="w-4 h-4" /> },
    ];

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={isHidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-0 left-0 right-0 z-50 bg-zinc-200/95 backdrop-blur-md border-b border-zinc-300 h-20 shadow-sm"
            >
                <div className="container mx-auto px-4 h-full flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {pathname !== "/" && (
                            <Button variant="ghost" size="icon" asChild className="mr-2 hidden md:flex">
                                <Link href="/">
                                    <ArrowLeft className="w-5 h-5" />
                                </Link>
                            </Button>
                        )}
                        <Link href="/" className="flex items-center group">
                            <img
                                src="/logo-preta.png"
                                alt="GR Labs Logo"
                                className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-2">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`
                                        text-xs font-bold uppercase tracking-wider transition-all px-4 py-2 rounded-full flex items-center gap-2
                                        ${isActive
                                            ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                                            : "text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900"
                                        }
                                    `}
                                >
                                    <span>{item.icon}</span>
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile Toggle */}
                    <div className="flex md:hidden items-center gap-2">
                        {pathname !== "/" && (
                            <Button variant="ghost" size="icon" asChild>
                                <Link href="/">
                                    <ArrowLeft className="w-5 h-5" />
                                </Link>
                            </Button>
                        )}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <Menu className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed inset-x-0 top-20 z-40 bg-zinc-200 border-b border-zinc-300 md:hidden shadow-xl"
                    >
                        <nav className="flex flex-col p-4 gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center gap-3 p-3 rounded-md transition-colors ${pathname === item.href
                                        ? "bg-primary/10 text-primary font-medium"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                        }`}
                                >
                                    {item.icon}
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Spacer for fixed header */}
            <div className="h-20" />
        </>
    );
}
