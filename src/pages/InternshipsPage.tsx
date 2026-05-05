import { motion } from "motion/react";
import { Sparkles, Briefcase, Zap, Users, ArrowRight, Microscope, Building, Rocket } from "lucide-react";
import { SectionHeading, Section } from "../components/Common";

export const InternshipsPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <div className="bg-white">
      <header className="relative pt-32 pb-20 overflow-hidden bg-emerald-950 text-white">
        <div className="absolute inset-0 opacity-20">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-400 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="section-container text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-8">
              <Briefcase className="w-3 h-3" />
              Nano Internships
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-tight mb-8">
              Real Projects. <br />
              <span className="italic font-normal text-emerald-400">Real Experience.</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed mb-12">
              Bridge the gap between academic learning and industrial application with domain-linked internships across AI, Nano, and Bio.
            </p>

            <button className="px-8 py-4 rounded-full bg-emerald-500 text-white font-bold hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20">
              Browse Open Roles
            </button>
          </motion.div>
        </div>
      </header>

      <Section className="py-24">
        <div className="section-container">
          <SectionHeading 
            badge="Internship Ecosystem"
            title="Connect with Global Opportunities"
            subtitle="Our internship program connects talented learners with research labs, startups, and established enterprises."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Microscope, title: "Research-Focused", desc: "Work on cutting-edge scientific problems in advanced nanotechnology labs." },
              { icon: Building, title: "Industry-Linked", desc: "Gain experience in corporate R&D and product development environments." },
              { icon: Rocket, title: "Startup-Ready", desc: "Join fast-paced deep-tech startups and help build the innovations of tomorrow." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-500 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
