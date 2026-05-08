"use client";

import { motion } from "framer-motion";
import { BookOpen, Code, Trophy, Rocket } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <BookOpen className="w-8 h-8 text-cyan-accent" />,
      title: "Learn",
      description: "Master modern tech stacks through interactive workshops and peer-to-peer learning sessions.",
      delay: 0.1
    },
    {
      icon: <Code className="w-8 h-8 text-purple-accent" />,
      title: "Build",
      description: "Collaborate on real-world projects, open-source contributions, and robust software solutions.",
      delay: 0.2
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
      title: "Compete",
      description: "Participate in national and international hackathons, coding contests, and tech challenges.",
      delay: 0.3
    },
    {
      icon: <Rocket className="w-8 h-8 text-green-400" />,
      title: "Grow",
      description: "Develop leadership skills, network with industry professionals, and launch your tech career.",
      delay: 0.4
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            About <span className="text-gradient">OSCode</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 leading-relaxed space-y-4 text-justify"
          >
            <p className="text-white font-semibold text-xl text-center mb-6">Welcome to OSCode BMSCE - Where Innovation Meets Opportunity!</p>
            <p>We're excited to launch the official LinkedIn page of OSCode BMSCE, a dynamic student-led chapter dedicated to building a thriving tech community within our college.</p>
            <p>At OSCode BMSCE, we go beyond the classroom—organizing hackathons, tech talks, workshops, and webinars that empower students to explore, innovate, and grow in the ever-evolving world of technology.</p>
            <p>Whether you're a beginner taking your first step into tech or an enthusiast looking to sharpen your skills, OSCode is the place to learn, collaborate, and create impact.</p>
            <p className="text-cyan-accent text-center font-medium mt-6">Join us as we code, connect, and create the future—together.</p>
          </motion.div>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: card.delay, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-2xl relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/5 to-purple-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 space-y-4">
                <div className="p-3 glass inline-block rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-accent transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Our Journey
          </motion.h3>

          <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 space-y-12">
            
            {/* Timeline Item 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0 md:w-1/2 md:pr-12 md:text-right"
            >
              <div className="absolute w-4 h-4 rounded-full bg-cyan-accent shadow-[0_0_10px_#00F5FF] -left-[9px] md:-right-[9px] md:left-auto top-1 border-2 border-[#0B0F19]"></div>
              <h4 className="text-2xl font-bold text-cyan-accent">2026</h4>
              <p className="text-lg font-semibold text-white mt-2">OSCode Founded</p>
              <p className="text-gray-400 mt-2 text-sm">A visionary group of students came together to form BMSCE's most dynamic tech club.</p>
            </motion.div>

            {/* Timeline Item 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12 md:w-1/2 md:ml-auto"
            >
              <div className="absolute w-4 h-4 rounded-full bg-purple-accent shadow-[0_0_10px_#7C3AED] -left-[9px] md:-left-[9px] top-1 border-2 border-[#0B0F19]"></div>
              <h4 className="text-2xl font-bold text-purple-accent">2026</h4>
              <p className="text-lg font-semibold text-white mt-2">Salesforce Agentforce Workshop</p>
              <p className="text-gray-400 mt-2 text-sm">Successfully hosted our first major developer workshop, introducing AI agents and Salesforce development to the student body.</p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
