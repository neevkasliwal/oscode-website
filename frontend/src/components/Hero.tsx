"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, ChevronDown } from "lucide-react";

export default function Hero() {
  const words = ["Web Development", "AI/ML", "Competitive Programming", "Open Source", "Hackathons"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const terminalLines = [
    "> initializing Oscode...",
    "> loading developers...",
    "> hackathons = enabled",
    "> innovation = active",
    "> future_engineers++"
  ];

  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => (prev < terminalLines.length ? prev + 1 : prev));
    }, 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Particles/Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-accent/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-accent/20 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column - Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Oscode
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-purple-accent">
              Build. Learn. Dominate.
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
            A coding community of BMSCE focused on development, hackathons, AI, open source, and innovation.
          </p>

          <div className="h-12 text-2xl md:text-3xl font-semibold text-white">
            <span className="text-gray-500 mr-3">Focus:</span>
            <motion.span
              key={currentWord}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-cyan-accent drop-shadow-[0_0_8px_rgba(0,245,255,0.5)] inline-block"
            >
              {words[currentWord]}
            </motion.span>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#about" className="px-8 py-3 rounded-full bg-cyan-accent text-[#0B0F19] font-bold tracking-wide hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,245,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:-translate-y-1">
              About Us
            </a>
            <a href="#events" className="px-8 py-3 rounded-full glass border border-purple-accent text-white font-bold tracking-wide hover:bg-purple-accent/10 transition-all duration-300 shadow-[0_0_15px_rgba(124,58,237,0.2)] hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] hover:-translate-y-1">
              Explore Events
            </a>
          </div>

          <div className="flex gap-6 pt-8 border-t border-white/10">
            <div>
              <p className="text-3xl font-bold text-white">2026</p>
              <p className="text-sm text-gray-500">Founded</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-accent">100+</p>
              <p className="text-sm text-gray-500">Active Members</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-accent">1</p>
              <p className="text-sm text-gray-500">Successful Workshop</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Terminal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-accent to-purple-accent rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative glass-card rounded-xl overflow-hidden border border-white/10 bg-[#0B0F19]/80 backdrop-blur-xl">
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex-1 text-center flex items-center justify-center gap-2 text-xs text-gray-400 font-mono">
                <Terminal className="w-3 h-3" /> oscode@bmsce:~
              </div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm md:text-base h-64 flex flex-col gap-2">
              {terminalLines.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: idx < visibleLines ? 1 : 0 }}
                  className={`${idx === 0 ? 'text-purple-400' : idx === terminalLines.length - 1 ? 'text-green-400 font-bold' : 'text-cyan-300'}`}
                >
                  {line}
                </motion.div>
              ))}
              {visibleLines >= terminalLines.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-3 h-5 bg-white mt-1"
                />
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-cyan-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
