import { motion } from "motion/react";
import { Building2, Users, Briefcase, Zap, BarChart3, Globe, CheckCircle2 } from "lucide-react";
import { SectionHeading, Section, FAQ } from "../components/Common";

export const IndustryPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-20">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />
        </div>

        <div className="section-container text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-8">
              <Building2 className="w-3 h-3" />
              Industry Partnerships
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-tight mb-8">
              Talent, Training, and <br />
              <span className="italic font-normal text-indigo-400">Future-Ready Growth.</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed mb-12">
              Collaborate with NanoSchool to build stronger talent pipelines, custom training pathways, and workforce development models across AI, Nano, and Bio.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-500/20">
                Become a Hiring Partner
              </button>
              <button className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all">
                Explore Custom Training
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Why Industry Partnerships Matter */}
      <Section className="py-24">
        <div className="section-container">
          <SectionHeading 
            badge="Strategic Value"
            title="Because the Future of Industry Depends on Better Talent"
            subtitle="Traditional hiring and training models are often not enough. We help organizations bridge the gap between capability and readiness."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Hiring Partner Model", desc: "Access domain-focused emerging talent building capability through our structured pathways." },
              { icon: Zap, title: "Custom Training", desc: "Build targeted learning solutions tailored to your team's specific goals and capability gaps." },
              { icon: Briefcase, title: "Train and Hire", desc: "Combine capability building with talent selection for smarter, role-aligned recruitment." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-indigo-500/20 hover:shadow-2xl transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* B2B Solutions */}
      <section className="py-24 bg-indigo-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500 rounded-full blur-[150px] opacity-10 translate-x-1/2 -translate-y-1/2" />
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6">Workforce Development</div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">Capability Building Across Deep-Science Domains</h2>
              <div className="space-y-8">
                {[
                  { domain: "AI", desc: "Applied learning, automation, and data-driven workflows for technical teams." },
                  { domain: "Nano", desc: "Scientific capability, materials innovation, and characterization awareness." },
                  { domain: "Bio", desc: "Healthcare, biotech, pharma, and interdisciplinary clinical systems training." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 font-bold text-indigo-400">
                      {item.domain}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.domain} Training</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10">
              <h3 className="text-2xl font-display font-bold mb-8">Request Industry Proposal</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Organization Name" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 outline-none transition-all" />
                <input type="email" placeholder="Professional Email" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 outline-none transition-all" />
                <select className="w-full px-6 py-4 rounded-xl bg-slate-900 border border-white/10 focus:border-indigo-500 outline-none transition-all text-slate-400">
                  <option>Select Interest Area</option>
                  <option>Hiring Partner</option>
                  <option>Custom Training</option>
                  <option>Train and Hire</option>
                </select>
                <textarea placeholder="Tell us about your workforce needs..." rows={4} className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 outline-none transition-all"></textarea>
                <button className="w-full py-4 rounded-xl bg-indigo-500 text-white font-bold hover:bg-indigo-400 transition-all shadow-xl shadow-indigo-500/20">Send Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <Section className="py-24">
        <div className="section-container">
          <SectionHeading 
            badge="The Advantage"
            title="Why Organizations Choose NanoSchool"
            subtitle="We offer a more connected, strategic, and future-oriented approach to workforce development."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BarChart3, title: "Talent Alignment", desc: "Connect learning pathways with actual hiring and capability needs." },
              { icon: Globe, title: "Ecosystem Access", desc: "Connect with learners, institutions, faculty, and mentors in one environment." },
              { icon: CheckCircle2, title: "Workforce Readiness", desc: "Programs designed for practical growth and real-world relevance." },
              { icon: Zap, title: "Flexible Collaboration", desc: "Scale from pilot initiatives to deep long-term strategic partnerships." }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 rounded-[2rem] bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 mx-auto group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading badge="FAQ" title="Industry FAQ" />
          <FAQ items={[
            { question: "What is the hiring partner model?", answer: "The hiring partner model allows organizations to connect with learners and emerging talent building capability through structured NanoSchool pathways." },
            { question: "Do you provide custom training?", answer: "Yes. NanoSchool offers course-only, workshop-only, and blended packages tailored to your organization's specific goals." },
            { question: "What is train-and-hire?", answer: "Train-and-hire is a collaboration model where organizations combine capability building with talent selection to create stronger alignment." },
            { question: "Is industry pricing fixed?", answer: "Industry pricing is typically customized based on learner count, domain focus, and training scope." }
          ]} />
        </div>
      </Section>
    </div>
  );
};
