import { motion } from "motion/react";
import { Users, ShieldCheck, Zap, Award, Globe, Building, GraduationCap, Briefcase, Heart, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeading, Section, FAQ } from "../components/Common";
import { useState } from "react";

export const MembershipsPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="section-container text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-indigo-200 text-xs font-bold uppercase tracking-widest mb-8">
              <Users className="w-3 h-3" />
              NanoSchool Memberships
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-tight mb-8">
              Designed for Continuous <br />
              <span className="italic font-normal text-indigo-400">Growth & Community.</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl text-slate-400 leading-relaxed mb-12">
              NanoSchool’s memberships are built for learners, professionals, and institutions who want more than one-time access. A foundation for long-term engagement across AI, Nano, and Bio.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-indigo-500 text-white font-bold hover:bg-indigo-400 transition-all shadow-xl shadow-indigo-500/20">
                Join as Individual Member
              </button>
              <button className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-all">
                Join as Institution
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Why Memberships Matter */}
      <Section className="py-24">
        <div className="section-container">
          <SectionHeading 
            badge="The Membership Model"
            title="More Than Access. A Relationship."
            subtitle="The strongest growth comes from continuity — the ability to keep learning and stay connected."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="space-y-8">
                <div className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <Zap className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="text-xl font-display font-bold mb-2">Build Momentum</h4>
                      <p className="text-slate-500 text-sm">A membership helps transform scattered interest into a focused journey of capability building and future readiness.</p>
                   </div>
                </div>
                <div className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Globe className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="text-xl font-display font-bold mb-2">Ecosystem Visibility</h4>
                      <p className="text-slate-500 text-sm">Stay close to new programs, workshops, internships, and research-specific opportunities.</p>
                   </div>
                </div>
                <div className="flex gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Heart className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="text-xl font-display font-bold mb-2">Community Connection</h4>
                      <p className="text-slate-500 text-sm">Connect with researchers, professionals, mentors, and fellow learners across the globe.</p>
                   </div>
                </div>
             </div>
             <div className="relative">
                <div className="absolute -inset-4 bg-indigo-500/10 blur-3xl rounded-full" />
                <div className="relative bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-2xl">
                   <h3 className="text-2xl font-display font-bold mb-6">What Members Get</h3>
                   <ul className="space-y-4">
                      {[
                        "Curated learning opportunities",
                        "Priority updates about workshops",
                        "Community engagement access",
                        "Member-only resources",
                        "Internship visibility",
                        "Domain updates across AI, Nano, Bio"
                      ].map(item => (
                        <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-indigo-500" /> {item}
                        </li>
                      ))}
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* Membership Types */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="section-container">
          <SectionHeading 
            badge="Categories"
            title="Memberships for Every Stage"
            subtitle="Whether you're a student building a foundation or a professional seeking domain relevance."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Student", desc: "For guided learning, early growth, and career-readiness exposure.", icon: GraduationCap, color: "indigo" },
              { title: "Professional", desc: "For continuous upskilling, specialization, and professional relevance.", icon: Briefcase, color: "blue" },
              { title: "Learning", desc: "For individuals planning long-term growth and exploring multiple domains.", icon: Zap, color: "amber" },
              { title: "Premium", desc: "For a higher-value, more complete experience with deeper engagement.", icon: Award, color: "emerald" }
            ].map((m, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-indigo-500 transition-all group">
                <div className={`w-12 h-12 rounded-2xl bg-${m.color}-50 text-${m.color}-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                  <m.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">{m.title} Membership</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{m.desc}</p>
                <button className="text-indigo-600 font-bold text-sm inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Explore <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Section className="py-24 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <SectionHeading 
              badge="Annual Plans"
              title="Affordable Membership Plans"
              subtitle="Memberships provide ecosystem access, updates, and community engagement."
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { type: "Individual / Student", price: "2,500", gst: "18%", total: "2,950", color: "indigo" },
               { type: "Institutional", price: "10,000", gst: "18%", total: "11,800", color: "slate" },
               { type: "Corporate", price: "20,000", gst: "18%", total: "23,600", color: "nstc-navy" }
             ].map((p, i) => (
               <div key={i} className={`p-10 rounded-[2.5rem] border border-slate-200 hover:shadow-2xl transition-all relative overflow-hidden ${p.type === 'Corporate' ? 'bg-slate-900 text-white border-none' : 'bg-white'}`}>
                  <h4 className="text-lg font-display font-bold mb-8">{p.type} Membership</h4>
                  <div className="flex items-baseline gap-2 mb-2">
                     <span className="text-4xl font-display font-bold">₹{p.total}</span>
                     <span className={`text-sm ${p.type === 'Corporate' ? 'text-slate-400' : 'text-slate-500'}`}>/ year</span>
                  </div>
                  <div className={`text-xs mb-8 ${p.type === 'Corporate' ? 'text-slate-400' : 'text-slate-400'}`}>Includes {p.gst} GST (Base: ₹{p.price})</div>
                  <button className={`w-full py-4 rounded-xl font-bold transition-all ${p.type === 'Corporate' ? 'bg-white text-slate-900 hover:bg-slate-200' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}>
                    Select Membership
                  </button>
               </div>
             ))}
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
             <p className="text-slate-500 text-sm">
                <strong>Important Note:</strong> Membership provides access to the NanoSchool ecosystem, updates, and opportunities. Specific courses, workshops, and flagship programs may have separate pricing.
             </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading badge="FAQ" title="Membership FAQ" />
          <FAQ items={[
            { question: "What is the Memberships page on NanoSchool?", answer: "It is NanoSchool’s central subscription and community page for students, professionals, institutions, and corporate partners." },
            { question: "How are memberships different from one-time programs?", answer: "Memberships support continuous access, community engagement, and long-term visibility, while one-time programs focus on specific learning experiences." },
            { question: "Does membership include courses or workshops?", answer: "Membership provides ecosystem access and updates. Specific programs like courses and workshops often have separate pricing depending on the selected track." },
            { question: "Can institutions or companies take membership?", answer: "Yes. We offer dedicated Institutional and Corporate memberships to stay connected with NanoSchool’s learning and partnership ecosystem." }
          ]} />
        </div>
      </Section>
    </div>
  );
};
