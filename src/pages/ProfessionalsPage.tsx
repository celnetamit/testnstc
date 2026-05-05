import { motion } from "motion/react";
import { Briefcase, Zap, Target, TrendingUp, ShieldCheck, Globe, CheckCircle2 } from "lucide-react";
import { SectionHeading, Section, FAQ } from "../components/Common";

export const ProfessionalsPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-20">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="section-container text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-8">
              <Briefcase className="w-3 h-3" />
              For Working Professionals
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-tight mb-8">
              Upskill. Specialize. <br />
              <span className="italic font-normal text-blue-400">Stay Future-Ready.</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed mb-12">
              Structured pathways designed for continuous professional growth across AI, Nano, and Bio domains. Build deeper specialization and domain relevance.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20">
                Explore Professional Courses
              </button>
              <button className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all">
                Join Professional Workshops
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Why This Page Matters */}
      <Section className="py-24">
        <div className="section-container">
          <SectionHeading 
            badge="Career Resilience"
            title="Professional Growth Cannot Be Left to Chance"
            subtitle="Industries are changing, technologies are advancing, and staying relevant requires more than just experience — it requires continuous learning."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Structured Courses", desc: "Build stronger domain understanding and sharpen your expertise in a focused, professional format." },
              { icon: Zap, title: "Expert-Led Workshops", desc: "High-impact learning experiences with immediate relevance to current industry trends." },
              { icon: TrendingUp, title: "Upskilling Pathways", desc: "Expand your capability for leadership and innovation in future-facing deep-tech domains." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-500/20 hover:shadow-2xl transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Domains */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[4rem] bg-slate-200 overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000" alt="Professional working" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white text-center p-6 shadow-2xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest mt-2">Specializations Available</div>
              </div>
            </div>
            <div>
              <SectionHeading 
                badge="Specialization"
                title="Choose Your Domain for Focused Growth"
                subtitle="Select the area most relevant to your role, ambitions, and future career opportunities."
              />
              <div className="space-y-6">
                {[
                  { domain: "AI", title: "Artificial Intelligence", desc: "Real-world and future-facing relevance for developers and leaders." },
                  { domain: "Nano", title: "Nanotechnology", desc: "Innovation-driven scientific and technical growth for engineers." },
                  { domain: "Bio", title: "Biotechnology", desc: "Interdisciplinary pathways connected to healthcare and life sciences." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <span className="font-bold text-xs">{item.domain}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <Section className="py-24">
        <div className="section-container">
          <SectionHeading 
            badge="Target Audience"
            title="Designed for Different Stages of Professional Growth"
            subtitle="We support people at different stages of their career and capability journey."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Early-Career", desc: "Build stronger direction and a future-ready profile." },
              { title: "Mid-Career", desc: "Seek relevance, specialization, and stronger positioning." },
              { domain: "Shifters", desc: "Move into new areas such as AI, Nano, or Bio." },
              { title: "Growth Experts", desc: "Remain ahead and expand your long-term value." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-blue-500 transition-all text-center">
                <h4 className="text-lg font-bold mb-3">{item.title || item.domain}</h4>
                <p className="text-slate-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading badge="FAQ" title="Professional FAQ" />
          <FAQ items={[
            { question: "What is the For Working Professionals page on NanoSchool?", answer: "It is a dedicated audience landing page where professionals can explore courses, workshops, memberships, and upskilling pathways." },
            { question: "What does NanoSchool offer for professionals?", answer: "We offer courses for working professionals, professional workshops, career upskilling pathways, memberships, and certifications." },
            { question: "Who is this page designed for?", answer: "It is designed for early-career professionals, mid-career professionals, domain shifters, and growth-oriented experts." },
            { question: "Can I explore different domains?", answer: "Yes. Professionals can explore structured pathways across AI, Nano, and Bio based on their career goals." }
          ]} />
        </div>
      </Section>
    </div>
  );
};
