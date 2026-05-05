import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { NSTCLogo } from "./Common";

export const Navbar = ({ onNavigate, currentPage }: { onNavigate: (page: string) => void, currentPage: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const links = [
    { name: "Home", id: "home" },
    { name: "Courses", id: "courses" },
    { name: "Workshops", id: "workshops" },
    { name: "Programs", id: "flagship" },
    { name: "Internships", id: "internships" },
    { name: "Pricing", id: "pricing" },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 h-nav">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => handleLinkClick('home')}
        >
          <NSTCLogo className="h-10" />
          <span className="font-display font-bold text-xl tracking-tight text-nstc-navy">NanoSchool</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <button 
              key={link.id} 
              onClick={() => handleLinkClick(link.id)}
              className={`text-sm font-medium transition-colors ${currentPage === link.id ? 'text-nstc-blue font-bold' : 'text-slate-600 hover:text-nstc-blue'}`}
            >
              {link.name}
            </button>
          ))}
          <button className="px-5 py-2 rounded-full bg-nstc-navy text-white text-sm font-semibold hover:bg-nstc-blue transition-all shadow-lg shadow-nstc-navy/20">
            Get Started
          </button>
        </div>

        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-200 p-6 md:hidden space-y-4 shadow-xl"
          >
            {links.map(link => (
              <button 
                key={link.id} 
                className="block text-lg font-medium text-slate-700 w-full text-left"
                onClick={() => handleLinkClick(link.id)}
              >
                {link.name}
              </button>
            ))}
            <button className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
