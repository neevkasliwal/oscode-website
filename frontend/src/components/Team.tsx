"use client";

import { motion } from "framer-motion";
import { Code, Briefcase } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Anamika Dubey",
      position: "Leader",
      image: "/anamika_dubey.png",
      skills: ["Leadership", "Strategy", "Vision"],
      linkedin: "#",
      github: "#"
    },
    {
      name: "Hithesh",
      position: "Co Leader",
      image: "/hithesh.png",
      skills: ["Co-Leadership", "Coordination", "Team Building"],
      linkedin: "#",
      github: "#"
    },
    {
      name: "Priyanshi Singh",
      position: "Marketing Head",
      image: "/priyanshi_singh.png",
      skills: ["Marketing", "Branding", "Outreach"],
      linkedin: "#",
      github: "#"
    },
    {
      name: "Divyansh Duggad",
      position: "Event Management Head",
      image: "/divyansh_duggad.png",
      skills: ["Event Planning", "Logistics", "Execution"],
      linkedin: "#",
      github: "#"
    },
    {
      name: "Theeksha R",
      position: "Sponsorship Head",
      image: "/theeksha_r.png",
      skills: ["Sponsorships", "Partnerships", "Networking"],
      linkedin: "#",
      github: "#"
    },
    {
      name: "Bhumika S Patil",
      position: "Community Moderator",
      image: "/bhumika_s_patil.png",
      skills: ["Community", "Engagement", "Support"],
      linkedin: "#",
      github: "#"
    }
  ];

  return (
    <section id="team" className="py-24 bg-[#080B13] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-accent/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Meet The <span className="text-gradient">Core Team</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            The passionate minds driving OSCode forward, dedicated to fostering a culture of innovation and excellence at BMSCE.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -15, rotateX: 5, rotateY: -5 }}
              style={{ transformStyle: "preserve-3d" }}
              className={`glass-card rounded-2xl overflow-hidden relative group cursor-pointer ${
                index >= 3 ? "lg:col-span-1 lg:ml-auto lg:mr-auto" : "" // Centers the bottom row if 5 items
              }`}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              
              <div className="relative z-10 p-6 flex flex-col items-center">
                {/* Image */}
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-cyan-accent/50 transition-colors duration-500 mb-6 relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-accent transition-colors">
                  {member.name}
                </h3>
                <p className="text-purple-accent font-medium mb-4">{member.position}</p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {member.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 text-xs rounded-full glass border-white/5 text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Socials */}
                <div className="flex gap-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <a href={member.linkedin} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-cyan-accent hover:text-[#0B0F19] transition-colors">
                    <Briefcase className="w-5 h-5" />
                  </a>
                  <a href={member.github} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-purple-accent hover:text-white transition-colors">
                    <Code className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
