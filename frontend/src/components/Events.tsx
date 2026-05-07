"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Users, Award, ExternalLink, X } from "lucide-react";

export default function Events() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <section id="events" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Featured <span className="text-gradient">Workshop</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Relive the highlights of our most successful event, where we brought cutting-edge AI Agent development to BMSCE.
          </motion.p>
        </div>

        {/* Featured Event Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl overflow-hidden max-w-5xl mx-auto"
        >
          <div className="grid lg:grid-cols-2">
            {/* Image/Banner Side */}
            <div className="relative h-64 lg:h-auto overflow-hidden group">
              <div className="absolute inset-0 bg-cyan-accent/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=800&fit=crop" 
                alt="Salesforce Agentforce Workshop" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Floating Badge */}
              <div className="absolute top-4 left-4 z-20 glass px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-xs font-bold text-white tracking-wider uppercase">Conducted</span>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Salesforce <span className="text-cyan-accent">Agentforce</span> Developer Workshop
              </h3>
              
              <p className="text-gray-400 mb-8 leading-relaxed">
                An intensive hands-on workshop focused on building autonomous AI agents using the Salesforce platform. Participants learned to architect, deploy, and manage intelligent workflows.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-cyan-accent">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Date</p>
                    <p className="text-sm font-semibold text-white">7 May 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-purple-accent">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-sm font-semibold text-white">BMSCE Campus</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-yellow-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Attendance</p>
                    <p className="text-sm font-semibold text-white">100+</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-green-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Outcome</p>
                    <p className="text-sm font-semibold text-white">Certifications</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setIsGalleryOpen(true)}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl border border-white/10 hover:border-cyan-accent/50 hover:bg-cyan-accent/5 transition-all duration-300 group"
              >
                <span className="font-semibold text-white group-hover:text-cyan-accent transition-colors">View Gallery</span>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-accent transition-colors" />
              </button>

            </div>
          </div>
        </motion.div>

      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#0B0F19]/90 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl max-h-[90vh] glass-card rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <h3 className="text-2xl font-bold text-white">Workshop <span className="text-cyan-accent">Gallery</span></h3>
                <button 
                  onClick={() => setIsGalleryOpen(false)}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-red-500/20 hover:text-red-400 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Modal Body - Image Grid */}
              <div className="p-6 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Placeholder Gallery Images */}
                  {[
                    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=600&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop"
                  ].map((src, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="rounded-xl overflow-hidden h-48 group cursor-pointer"
                    >
                      <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
