import { motion } from "motion/react";
import { Sparkles, BookOpen, Globe, Briefcase, GraduationCap, Microscope, Zap, Users, Award } from "lucide-react";
import { SectionHeading, Section, FAQ, PricingTable } from "../components/Common";
import { useState } from "react";
import { useRouter } from "../components/Router";

const PRICE_BUNDLE = [
  { offer: "5-Course Pack", student: "7,499", phd: "8,999", faculty: "9,999", professional: "10,999" },
  { offer: "10-Course Pack", student: "18,999", phd: "22,999", faculty: "25,999", professional: "27,999" },
  { offer: "20-Course Pack", student: "28,999", phd: "35,999", faculty: "39,999", professional: "42,999" },
  { offer: "50-Course Access", student: "47,999", phd: "56,999", faculty: "61,999", professional: "64,999" },
  { offer: "100+ Course Access", student: "79,999", phd: "94,999", faculty: "1,04,999", professional: "1,09,999" },
];

const PRICE_LIBRARY_INDIA = [
  { offer: "1 Domain Library Pass", student: "9,999", phd: "14,999", faculty: "16,999", professional: "19,999" },
  { offer: "3-Domain Library Pass", student: "19,999", phd: "29,999", faculty: "34,999", professional: "39,999" },
  { offer: "Full Annual Library Pass", student: "24,999", phd: "39,999", faculty: "44,999", professional: "49,999" },
  { offer: "Full Annual + Certificates", student: "34,999", phd: "49,999", faculty: "56,999", professional: "64,999" },
];

const PRICE_LIBRARY_INTL = [
  { offer: "1 Domain Library Pass", student: "250", phd: "350", faculty: "400", professional: "500" },
  { offer: "3-Domain Library Pass", student: "500", phd: "700", faculty: "850", professional: "1,000" },
  { offer: "Full Annual Library Pass", student: "700", phd: "950", faculty: "1,100", professional: "1,300" },
  { offer: "Full Annual + Certificates", student: "950", phd: "1,200", faculty: "1,400", professional: "1,700" },
];

export const CoursesPage = () => {
  const [pricingRegion, setPricingRegion] = useState<"india" | "intl">("india");
  const { navigate } = useRouter();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
        </div>

        <div className="section-container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nstc-light border border-blue-100 text-nstc-navy text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles className="w-3 h-3 text-nstc-blue" />
              Programs / Courses
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-tight mb-8 text-slate-950 max-w-4xl mx-auto">
              Online Courses Built for <br />
              <span className="italic font-normal text-nstc-blue">Deep-Science Learning.</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed mb-12">
              Explore Nanoschool’s online courses across AI, Nano, and Bio. Discover domain courses designed for students, researchers, and industry through structured, future-ready learning pathways.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-slate-950 text-white font-semibold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-950/20">
                Explore AI Courses
              </button>
              <button className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-900 font-semibold hover:border-nstc-blue hover:text-nstc-blue transition-all">
                Explore Nano Courses
              </button>
              <button className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-900 font-semibold hover:border-nstc-blue hover:text-nstc-blue transition-all">
                Explore Bio Courses
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main content continues... */}
      {/* I'll keep the rest as it was but without the prop */}
      <Section className="py-24 border-b border-slate-100">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading 
                badge="The Nanoschool Difference"
                title="More Than Content. Structured Learning for Real Capability."
                subtitle="Each course is built to support meaningful progression, stronger conceptual understanding, and greater alignment with research and industry needs."
              />
              <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
                <p>Today’s learners need more than scattered tutorials or generic course catalogs. They need structured pathways that help them build understanding in fields that are shaping the future.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {[
                    "Foundational learning",
                    "Advanced understanding",
                    "Practical relevance",
                    "Interdisciplinary awareness"
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-nstc-light text-nstc-blue flex items-center justify-center shrink-0">
                         <Zap className="w-3 h-3" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "Structured Progression", desc: "Move from basics to deeper understanding with clarity." },
                { title: "Domain Relevance", desc: "Built around real deep-science domains instead of broad categories." },
                { title: "Practical Orientation", desc: "Designed to support application, not just passive understanding." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-nstc-blue/30 transition-all">
                  <h4 className="font-display font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Domain Sections */}
      <section className="py-24 bg-slate-50">
        <div className="section-container">
          <SectionHeading 
            badge="Ecosystem"
            title="A Course Ecosystem Built Around Deep-Science Domains"
            subtitle="Explore our curated learning pathways across AI, Nanotechnology, and Biology."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI */}
            <div className="p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">AI Courses</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">Designed for learners who want structured understanding and stronger capability in artificial intelligence.</p>
              <ul className="space-y-3 mb-10">
                {["AI Fundamentals", "Structured AI Learning", "Applied AI Capability"].map(f => (
                  <li key={f} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <div className="w-1 h-1 rounded-full bg-indigo-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-2xl bg-slate-950 text-white font-bold hover:bg-indigo-600 transition-all">
                Explore AI
              </button>
            </div>

            {/* Nano */}
            <div className="p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Microscope className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Nano Courses</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">Help learners build meaningful understanding in nanotechnology through structured pathways.</p>
              <ul className="space-y-3 mb-10">
                {["Nanoscience Basics", "Scientific Depth", "Innovation Context"].map(f => (
                  <li key={f} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <div className="w-1 h-1 rounded-full bg-blue-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-2xl bg-slate-950 text-white font-bold hover:bg-blue-600 transition-all">
                Explore Nano
              </button>
            </div>

            {/* Bio */}
            <div className="p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Bio Courses</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">Structured pathways in biology for conceptual clarity and interdisciplinary growth.</p>
              <ul className="space-y-3 mb-10">
                {["Bio Fundamentals", "Research Learning", "Future Capability"].map(f => (
                  <li key={f} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <div className="w-1 h-1 rounded-full bg-emerald-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-2xl bg-slate-950 text-white font-bold hover:bg-emerald-600 transition-all">
                Explore Bio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholders Section */}
      <section className="section-container py-24">
        <SectionHeading 
          badge="Who It's For"
          title="Courses Designed for Every Type of Learner"
          subtitle="Nanoschool’s courses are built for a diverse community of learners and institutions."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { icon: GraduationCap, title: "Students", desc: "Build strong foundations and domain clarity." },
            { icon: Microscope, title: "PhD/Profs", desc: "Deepen domain understanding and research." },
            { icon: Zap, title: "Professionals", desc: "Upskill through focused and flexible learning." },
            { icon: Users, title: "Universities", desc: "Support student learning and faculty development." },
            { icon: Award, title: "Industry", desc: "Workforce development and capability models." }
          ].map((persona, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 text-center hover:border-nstc-blue transition-colors">
              <div className="w-12 h-12 rounded-xl bg-slate-50 text-nstc-navy flex items-center justify-center mx-auto mb-4">
                <persona.icon className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-slate-900 mb-2 text-sm">{persona.title}</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">{persona.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <Section id="pricing" className="bg-white py-24 border-t border-slate-100">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <SectionHeading 
              badge="Pricing"
              title="Flexible Course Pricing & Access"
              subtitle="Choose individual courses, bundles, or library passes based on your goals."
            />
            
            <div className="flex bg-slate-100 p-1 rounded-xl">
              <button 
                className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold transition-all ${pricingRegion === 'india' ? 'bg-white text-nstc-navy shadow-sm' : 'text-slate-500 hover:bg-white/50'}`}
                onClick={() => setPricingRegion('india')}
              >
                India (₹)
              </button>
              <button 
                className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold transition-all ${pricingRegion === 'intl' ? 'bg-white text-nstc-navy shadow-sm' : 'text-slate-500 hover:bg-white/50'}`}
                onClick={() => setPricingRegion('intl')}
              >
                <Globe className="w-4 h-4" />
                Intl ($)
              </button>
            </div>
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-nstc-blue" />
                Course Library Access
              </h3>
              <PricingTable 
                data={pricingRegion === 'india' ? PRICE_LIBRARY_INDIA : PRICE_LIBRARY_INTL} 
                currencyPrefix={pricingRegion === 'india' ? "₹" : "USD "} 
              />
            </div>

            {pricingRegion === 'india' && (
              <div>
                <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-nstc-blue" />
                  Course Bundle Pricing
                </h3>
                <PricingTable 
                  data={PRICE_BUNDLE} 
                  currencyPrefix="₹" 
                />
              </div>
            )}
          </div>
          
          <div className="mt-16 p-10 rounded-[2.5rem] bg-nstc-navy text-white flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
            <div className="relative z-10">
              <h4 className="text-2xl font-display font-bold mb-4">Custom Institutional Packages</h4>
              <p className="text-slate-300 max-w-xl">For universities, institutions, and enterprise teams, course bundles can be customized based on domain focus, duration, and cohort size.</p>
            </div>
            <button className="relative z-10 px-8 py-4 rounded-xl bg-white text-nstc-navy font-bold hover:bg-nstc-blue hover:text-white transition-all whitespace-nowrap">
              Request Custom Package
            </button>
            <Zap className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5" />
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading badge="FAQ" title="Course Questions" />
          <FAQ items={[
            { question: "What is the Courses page on Nanoschool?", answer: "Nanoschool’s central program listing for online courses across AI, Nano, and Bio." },
            { question: "Who are Nanoschool’s courses designed for?", answer: "Students, PhD scholars, professors, working professionals, universities, and industry partners." },
            { question: "Are these online courses structured by domain?", answer: "Yes, they are organized by deep-science domains: AI, Nano, and Bio." },
            { question: "Does Nanoschool offer course bundles?", answer: "Yes, we offer packages ranging from 5 to 100+ course access." }
          ]} />
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="py-24 bg-white text-center">
        <div className="section-container">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">
            Start with the Course That <br /> Matches Your Goal
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate('/')} className="px-8 py-4 rounded-full border border-slate-200 font-bold hover:bg-slate-50 transition-all">
              View All Programs
            </button>
            <button className="px-8 py-4 rounded-full bg-nstc-navy text-white font-bold hover:bg-nstc-blue transition-all shadow-xl shadow-nstc-navy/20">
              Contact Program Advisor
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
};
