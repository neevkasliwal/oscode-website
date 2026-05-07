"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Briefcase, AtSign, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#05070A]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Have a question, want to collaborate, or just want to say hi? We'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-cyan-accent flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a href="mailto:oscode.cse@bmsce.ac.in" className="text-lg font-medium text-white hover:text-cyan-accent transition-colors">
                    oscode.cse@bmsce.ac.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-purple-accent flex-shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/oscode-bmsce-5702a6403/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-purple-accent transition-colors break-all">
                    OSCode BMSCE
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-pink-500 flex-shrink-0">
                  <AtSign className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Instagram</p>
                  <a href="https://instagram.com/oscode_bmsce" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-pink-400 transition-colors">
                    @oscode_bmsce
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-yellow-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Address</p>
                  <p className="text-lg font-medium text-white">
                    B M S College of Engineering<br/>
                    Bull Temple Road, Basavanagudi<br/>
                    Bengaluru - 560019
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contacts */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass p-4 rounded-xl border border-white/5 hover:border-cyan-accent/30 transition-colors group">
                <p className="text-cyan-accent font-semibold mb-1">President</p>
                <p className="text-white font-medium">Aarav Sharma</p>
                <div className="flex items-center gap-2 mt-2 text-gray-400 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
              </div>
              <div className="glass p-4 rounded-xl border border-white/5 hover:border-purple-accent/30 transition-colors group">
                <p className="text-purple-accent font-semibold mb-1">Vice President</p>
                <p className="text-white font-medium">Priya Patel</p>
                <div className="flex items-center gap-2 mt-2 text-gray-400 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 98765 43211</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-accent/10 rounded-full blur-[50px]"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-accent focus:ring-1 focus:ring-purple-accent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-cyan-accent to-purple-accent text-white font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : status === "success" ? (
                    <span>Message Sent!</span>
                  ) : status === "error" ? (
                    <span>Error. Try Again.</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
