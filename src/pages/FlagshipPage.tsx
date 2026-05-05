import { motion } from "motion/react";
import { Sparkles, Award, Zap, Users, ArrowRight, ShieldCheck, Trophy, Target } from "lucide-react";
import { SectionHeading, Section } from "../components/Common";

export const FlagshipPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <div className="bg-white">
      <header className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 to-nstc-navy text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>

        <div className="section-container text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest mb-8">
              <Trophy className="w-3 h-3" />
              Flagship Programs
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-tight mb-8">
              Premium Pathways. <br />
              <span className="italic font-normal text-amber-400">Total Transformation.</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed mb-12">
              Our most comprehensive programs combining structured curriculum, elite mentorship, and hands-on capstone projects for maximum career impact.
            </p>

            <div className="flex justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-amber-500 text-nstc-navy font-bold hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20">
                Apply for Cohort 2026
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      <Section className="py-24">
        <div className="section-container">
          <SectionHeading 
            badge="The Flagship Experience"
            title="Designed for High-Performance Learners"
            subtitle="Flagship programs go beyond traditional courses to provide a complete career ecosystem."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { icon: Target, title: "Outcome-Driven", desc: "Every module is designed to build a specific, high-value capability relevant to the current industry." },
              { icon: Users, title: "Elite Mentorship", desc: "Direct access to domain experts from top research labs and global corporations." },
              { icon: ShieldCheck, title: "Verified Credentials", desc: "Globally recognized certifications backed by NSTC's prestige in nanotechnology." },
              { icon: Zap, title: "Project Incubation", desc: "Turn your capstone projects into real-world solutions or research papers." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-nstc-navy/5 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white text-nstc-navy flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                  <item.icon className="w-7 h-7 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
