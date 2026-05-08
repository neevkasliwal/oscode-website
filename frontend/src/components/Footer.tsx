"use client";

import Link from "next/link";
import { AtSign, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0F19] pt-20 pb-10 border-t border-white/10 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-accent to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="#home" className="flex items-center gap-2 group">
              <svg 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-8 h-8 fill-cyan-accent group-hover:fill-purple-accent transition-colors duration-300"
              >
                <path d="M11.959.447A11.938 11.938 0 000 12.407c0 5.576 3.874 10.097 7.783 11.114.193.05.392-.05.467-.234l2.771-6.822a.396.396 0 00-.246-.528C9.365 15.47 8.53 14.32 8.48 12.4c-.024-1.828 1.5-3.45 3.561-3.447 1.931.003 3.479 1.632 3.479 3.453 0 .966-.203 1.687-.575 2.238-.371.552-.922.951-1.695 1.239a.396.396 0 00-.23.515l2.685 6.903a.396.396 0 00.465.24C20.163 22.534 24 18.062 24 12.406 24 5.804 18.603.447 11.959.447zm0 .791c6.22 0 11.25 4.997 11.25 11.168 0 5.138-3.423 9.208-6.895 10.272L13.9 16.47c.703-.308 1.302-.79 1.702-1.384.477-.708.709-1.602.709-2.68 0-2.266-1.898-4.24-4.27-4.244-2.48-.004-4.382 1.976-4.352 4.25.023 1.995.934 3.492 2.451 4.13L7.648 22.66C4.251 21.592.791 17.458.791 12.406A11.13 11.13 0 0111.959 1.238zm10.617 20.149a1.03 1.03 0 000 2.058 1.03 1.03 0 000-2.058zm0 .162c.48 0 .865.388.865.867a.856.856 0 01-.271.623l-.172-.342a.847.847 0 00-.111-.178.263.263 0 00-.114-.084.301.301 0 00.17-.117.356.356 0 00.061-.21c0-.13-.038-.227-.113-.292-.076-.064-.192-.095-.346-.095h-.41v1.343h.181v-.568h.2c.072 0 .128.015.17.045a.48.48 0 01.129.18l.171.343.157.001a.878.878 0 01-.567.216.865.865 0 010-1.732zm-.26.322h.229c.088 0 .155.018.2.059.044.04.066.099.066.177 0 .079-.022.14-.067.18-.044.04-.111.06-.2.06h-.228z"/>
              </svg>
              <span className="text-2xl font-bold tracking-wider text-white">
                OS<span className="text-cyan-accent">CODE</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm">
              Build. Learn. Dominate. The premier coding community of BMSCE focused on development, hackathons, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Team", "Events", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-accent hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:oscode.cse@bmsce.ac.in" className="flex items-center gap-3 text-gray-400 hover:text-cyan-accent transition-colors group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>oscode.cse@bmsce.ac.in</span>
              </a>
              <a href="https://instagram.com/oscode_bmsce" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-purple-accent transition-colors group">
                <AtSign className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>@oscode_bmsce</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>B M S College of Engineering<br />Bengaluru - 560019</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} OSCode BMSCE. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Built with <span className="text-purple-accent animate-pulse">passion</span> by OSCode
          </p>
        </div>
      </div>
    </footer>
  );
}
