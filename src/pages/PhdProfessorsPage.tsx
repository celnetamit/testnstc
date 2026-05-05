import { motion } from "motion/react";
import { Microscope, BookOpen, GraduationCap, Zap, Globe, MessageSquare, CheckCircle2 } from "lucide-react";
import { SectionHeading, Section, FAQ } from "../components/Common";

export const PhdProfessorsPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-20">
           <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-emerald-500 rounded-full blur-[150px] translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="section-container text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-8">
              <Microscope className="w-3 h-3" />
              For PhD Scholars & Professors
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-tight mb-8">
              Advanced Learning. <br />
              <span className="italic font-normal text-emerald-400">Faculty Growth.</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed mb-12">
              Deepen academic expertise, explore interdisciplinary research, and enhance faculty capability across AI, Nano, and Bio.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-emerald-600 text-white font-bold hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-500/20">
                Explore Faculty Workshops
              </button>
              <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold hover:bg-white/20 transition-all">
                View PhD Programs
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Pathways */}
      <Section className="py-24">
        <div className="section-container">
          <SectionHeading 
            badge="Academic Ecosystem"
            title="Recognition That Reflects Learning and Progress"
            subtitle="Shaping the future of science, research, and innovation through structured academic collaboration."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: GraduationCap, title: "Workshops for Professors", desc: "Designed for subject enrichment, emerging domain awareness, and interdisciplinary expansion." },
              { icon: Microscope, title: "PhD Scholar Programs", desc: "Advanced learning pathways for deeper research alignment and future-focused growth." },
              { icon: BookOpen, title: "Faculty Development", desc: "Long-term strengthening of educational quality and academic modernization initiatives." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-emerald-500 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{item.title}</h3>
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
            <div>
              <SectionHeading 
                badge="Domains"
                title="Advanced Growth Across Deep-Science"
                subtitle="Build focused expertise while remaining connected to broader scientific developments."
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "AI in Research",
                  "Applied Nanotechnology",
                  "Interdisciplinary Biology",
                  "Faculty Enrichment",
                  "Research Awareness",
                  "Academic Innovation"
                ].map(p => (
                  <div key={p} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="font-medium text-slate-700 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] rounded-3xl bg-emerald-100 overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600" alt="Lab" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-3xl bg-slate-200 overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600" alt="Microscope" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square rounded-3xl bg-slate-200 overflow-hidden shadow-xl">
                   <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" alt="Tech" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[3/4] rounded-3xl bg-emerald-100 overflow-hidden shadow-xl">
                   <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=600" alt="Experiment" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <Section className="py-24">
        <div className="section-container">
          <SectionHeading 
            badge="Collaborate"
            title="Beyond Learning — Opportunities to Contribute"
            subtitle="Engage as a mentor, knowledge partner, or course creator in our growing ecosystem."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Mentors", desc: "Support learners through guidance and academic insight." },
              { icon: Globe, title: "Knowledge Partners", desc: "Contribute to learning ecosystems through thought leadership." },
              { icon: BookOpen, title: "Course Creators", desc: "Help shape learning pathways with domain-specific content." },
              { icon: MessageSquare, title: "Collaborators", desc: "Work with us on workshops and institutional programs." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-100 hover:border-emerald-500/20 hover:shadow-xl transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading badge="FAQ" title="Academic FAQ" />
          <FAQ items={[
            { question: "What is the For PhD Scholars & Professors page on NanoSchool?", answer: "The For PhD Scholars & Professors page is a dedicated audience landing page where research scholars and faculty can explore workshops, advanced programs, and collaboration opportunities." },
            { question: "What does NanoSchool offer for professors?", answer: "We offer workshops for professors, faculty development pathways, interdisciplinary learning opportunities, and collaborative initiatives." },
            { question: "What are PhD scholar programs?", answer: "These are structured learning pathways designed to support advanced academic growth, research relevance, and future-focused capability building." },
            { question: "Can I contribute to NanoSchool?", answer: "Yes. We welcome experts to engage as mentors, knowledge partners, and course creators." }
          ]} />
        </div>
      </Section>
    </div>
  );
};
