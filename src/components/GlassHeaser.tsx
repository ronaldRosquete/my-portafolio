"use client";

import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { personalInfo } from "@/lib/data";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function GlassHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { id: "about", label: "🤵 About Me" },
    { id: "experiencie", label: "💼 Experiencie" },
    { id: "projects", label: "🚀 Projects" },
    { id: "skills", label: "🛠️ Skills" },
    { id: "education", label: "🎓 Education" },
  ];
  
  const scrollToSection = (id: string, offset: number = 80) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      className="sticky top-0 z-50 border-b border-border/40
                 bg-background/70 dark:bg-background/40
                 backdrop-blur-sm supports-backdrop-filter:bg-background/60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <div className="flex h-16 items-center justify-between">
          <motion.a
            href="/"
            className="text-lg font-mono font-semibold hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {personalInfo.logo}
          </motion.a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, idx) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm px-3 py-1 rounded-md text-foreground/70 hover:text-foreground transition"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <AnimatedThemeToggler />

            {/* MOBILE BUTTON */}
            <motion.button
              className="md:hidden p-2 text-foreground"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>

        {/* MOBILE NAV */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden py-4 px-4 border-t border-border/10
                         backdrop-blur-md bg-background/80 dark:bg-background/40"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex flex-col space-y-3">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-foreground/70 hover:text-foreground transition-colors py-1"
                    onClick={toggleMenu}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
