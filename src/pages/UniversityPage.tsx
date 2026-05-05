import { motion } from "motion/react";
import { GraduationCap, Users, Globe, Award, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";
import { SectionHeading, Section, FAQ } from "../components/Common";

export const UniversityPage = () => {
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
              <GraduationCap className="w-3 h-3" />
              University Partnerships
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-tight mb-8">
              Shaping the Future <br />
              <span className="italic font-normal text-blue-400">of Academic Growth.</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed mb-12">
              Collaborate with NanoSchool to build stronger learning ecosystems for students and faculty through structured academic collaboration and co-branded certificates.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20">
                Become a University Partner
              </button>
              <button className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all">
                Explore Partnership Models
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Partnership Models */}
      <Section className="py-24">
        <div className="section-container">
          <SectionHeading 
            badge="Institutional Value"
            title="University Partnerships Built for Growth"
            subtitle="We help universities strengthen student growth, faculty capability, and institutional relevance through purposeful collaboration."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "University Partnerships", desc: "Structured collaborations designed to create visible academic value for students and faculty." },
              { icon: Users, title: "Workshop Partner Model", desc: "Bring high-quality, expert-led learning experiences to your campus through focused domain workshops." },
              { icon: ShieldCheck, title: "Co-Branded Certificates", desc: "Add recognition and value to collaborative programs through verified joint certification models." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-500/20 hover:shadow-2xl transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white text-blue-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Faculty and Students */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading 
                badge="Impact"
                title="Creating Better Academic Outcomes"
                subtitle="Our partnerships complement higher education with specialized domain exposure and applied learning models."
              />
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-display font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    For Students
                  </h4>
                  <p className="text-slate-500 text-sm mb-4">Make specialized learning and future-facing opportunities accessible through domain-led courses and expert-led workshops.</p>
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    For Faculty
                  </h4>
                  <p className="text-slate-500 text-sm">Support educators with exposure, upskilling, and interdisciplinary awareness through structured faculty development pathways.</p>
                </div>
              </div>
            </div>
            <div className="p-12 rounded-[4rem] bg-white border border-slate-200 shadow-2xl relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl rotate-12">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-8">Partnership Benefits</h3>
              <div className="space-y-4">
                {[
                  "Stronger student exposure to emerging fields",
                  "Faculty capability enhancement",
                  "Institutional differentiation and branding",
                  "Domain-led program opportunities",
                  "Deeper industry-academia connection",
                  "Co-branded recognition and trust"
                ].map(p => (
                  <div key={p} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-slate-700 text-xs">{p}</span>
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
          <SectionHeading badge="FAQ" title="University FAQ" />
          <FAQ items={[
            { question: "What is the For Universities page on NanoSchool?", answer: "The For Universities page is a dedicated B2B audience page where institutions can explore partnerships, workshop collaboration, and faculty development." },
            { question: "What partnership models do you offer?", answer: "We offer workshop partner models, faculty development collaborations, co-branded certificate initiatives, and student access pathways." },
            { question: "What are co-branded certificates?", answer: "These are recognition models issued as part of eligible collaborative programs between NanoSchool and a university partner." },
            { question: "How can universities benefit?", answer: "Institutions can strengthen student learning, support faculty, and improve relevance through structured collaboration." }
          ]} />
        </div>
      </Section>
    </div>
  );
};
