import { motion } from "motion/react";
import { BookOpen, Users, Briefcase, Zap, Star, Globe, CheckCircle2 } from "lucide-react";
import { SectionHeading, Section, FAQ } from "../components/Common";

export const StudentsPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden bg-emerald-950 text-white">
        <div className="absolute inset-0 opacity-20">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-400 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="section-container text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-8">
              <Star className="w-3 h-3" />
              For Students
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-tight mb-8">
              Learn. Grow. <br />
              <span className="italic font-normal text-emerald-400">Build Your Future.</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed mb-12">
              Explore structured pathways across AI, Nano, and Bio. Designed for future-ready growth, academic confidence, and practical exposure.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-emerald-500 text-white font-bold hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20">
                Explore Student Courses
              </button>
              <button className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all">
                Join Student Workshops
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Pathways */}
      <Section className="py-24">
        <div className="section-container">
          <SectionHeading 
            badge="Learning Ecosystem"
            title="A Complete Student Growth Pathway"
            subtitle="We help students move from curiosity to capability through structured opportunities across deep-science domains."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "Courses for Students", desc: "Build structured foundations and conceptual clarity in emerging scientific fields." },
              { icon: Users, title: "Student Workshops", desc: "Gain focused, high-impact exposure to real ideas in an interactive, applied format." },
              { icon: Briefcase, title: "Student Internships", desc: "Connect learning with practical experience through guided project-based engagement." },
              { icon: Zap, title: "Student Memberships", desc: "Stay connected for continuous growth, community access, and long-term momentum." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-emerald-500/20 hover:shadow-2xl transition-all group">
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

      {/* Why NanoSchool for Students */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                 <div className="aspect-[3/4] rounded-3xl bg-emerald-100 overflow-hidden shadow-xl">
                   <img src="https://images.unsplash.com/photo-1523050853063-913c3e961da8?auto=format&fit=crop&q=80&w=600" alt="Student" className="w-full h-full object-cover" />
                 </div>
              </div>
              <div className="space-y-4">
                 <div className="aspect-square rounded-3xl bg-slate-200 overflow-hidden shadow-xl">
                   <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600" alt="Study" className="w-full h-full object-cover" />
                 </div>
                 <div className="aspect-[3/4] rounded-3xl bg-emerald-100 overflow-hidden shadow-xl">
                   <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" alt="Collaboration" className="w-full h-full object-cover" />
                 </div>
              </div>
            </div>
            <div>
              <SectionHeading 
                badge="Why Us"
                title="Moving Beyond Traditional Learning"
                subtitle="Classroom learning alone is often not enough. Students need exposure, guidance, and access to practical opportunities."
              />
              <div className="space-y-4">
                {[
                  "Build stronger conceptual foundations",
                  "Prepare for advanced research opportunities",
                  "Gain visibility through certificates and badges",
                  "Connect with real scientific and professional roles",
                  "Access structured specialization early",
                  "Grow with continuous support and membership"
                ].map(p => (
                  <div key={p} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="font-medium text-slate-700 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading badge="FAQ" title="Student FAQ" />
          <FAQ items={[
            { question: "What is the For Students page on NanoSchool?", answer: "The For Students page is a dedicated audience landing page where students can explore courses, workshops, internships, and structured learning pathways." },
            { question: "What opportunities do you offer?", answer: "We offer courses for students, student workshops, student internships, memberships, certifications, and domain-based learning across AI, Nano, and Bio." },
            { question: "Who is the student page designed for?", answer: "It is designed for students at different stages, including early-stage learners, ambitious students, and research-oriented scholars." },
            { question: "Can students explore different domains?", answer: "Yes. Students can explore structured pathways across AI, Nano, and Bio depending on their goals and interests." }
          ]} />
        </div>
      </Section>
    </div>
  );
};
