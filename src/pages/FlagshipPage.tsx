import { motion } from "motion/react";
import { Trophy, Target, Users, ShieldCheck, Zap, Globe, Microscope, Building, Rocket, GraduationCap, Briefcase, Award } from "lucide-react";
import { SectionHeading, Section, FAQ, PricingTable } from "../components/Common";
import { useState } from "react";
import { useRouter } from "../components/Router";

const PRICE_FLAGSHIP_INDIA = [
  { offer: "1 Flagship Program", student: "9,999", phd: "12,999", faculty: "13,999", professional: "14,999" },
  { offer: "3-Program Domain Pack", student: "24,999", phd: "32,999", faculty: "35,999", professional: "39,999" },
  { offer: "5-Program Custom Pack", student: "39,999", phd: "49,999", faculty: "54,999", professional: "59,999" },
  { offer: "10-Program Pack", student: "69,999", phd: "84,999", faculty: "89,999", professional: "99,999" },
  { offer: "All 15 Flagship Programs", student: "99,999", phd: "1,14,999", faculty: "1,19,999", professional: "1,29,999" },
  { offer: "All 15 + Workshop Access", student: "1,14,999", phd: "1,29,999", faculty: "1,39,999", professional: "1,49,999" },
];

const PRICE_FLAGSHIP_INTL = [
  { offer: "1 Flagship Program", student: "350", phd: "450", faculty: "500", professional: "600" },
  { offer: "3-Program Domain Pack", student: "900", phd: "1,100", faculty: "1,250", professional: "1,500" },
  { offer: "5-Program Custom Pack", student: "1,500", phd: "1,900", faculty: "2,100", professional: "2,500" },
  { offer: "All 15 Flagship Programs", student: "3,500", phd: "4,200", faculty: "4,600", professional: "5,500" },
];

export const FlagshipPage = () => {
  const [pricingRegion, setPricingRegion] = useState<"india" | "intl">("india");
  const { navigate } = useRouter();

  return (
    <div className="bg-white">
      {/* Hero Section */}
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
              Flagship Programs for <br />
              <span className="italic font-normal text-amber-400">Deep Transformation.</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed mb-12">
              NanoSchool’s flagship programs are premium, structured experiences combining guided learning, Live Labs, mentorship, and future-ready capability building.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-amber-500 text-nstc-navy font-bold hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20">
                Explore Flagship Programs
              </button>
              <button className="px-8 py-4 rounded-full bg-white text-nstc-navy font-bold hover:bg-slate-100 transition-all shadow-xl shadow-white/10">
                Apply Now
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Why Flagship Matters */}
      <Section className="py-24">
        <div className="section-container">
          <SectionHeading 
            badge="The Flagship Standard"
            title="More Than Programs. A Higher Standard."
            subtitle="Designed for ambitious learners who want real capability, deeper structure, and mentorship."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Deeper Structure", desc: "Built with stronger progression and clearer learning journeys." },
              { icon: Users, title: "Elite Mentorship", desc: "Expert-led learning with structured engagement and guidance." },
              { icon: Zap, title: "Live Labs", desc: "Applied learning through assignments, workshops, and capstones." },
              { icon: Award, title: "Stronger Outcomes", desc: "Built for workforce readiness and research-readiness." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-amber-500/20 hover:shadow-2xl transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Program Tracks */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="section-container">
          <SectionHeading 
            badge="Pathways"
            title="Choose Your Premium Pathway"
            subtitle="Flagship programs are designed for learners at different stages of their professional journey."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:border-amber-500 transition-all">
               <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-8">
                  <GraduationCap className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-display font-bold mb-4">Premium Learning Programs</h3>
               <p className="text-slate-500 mb-6">Designed for serious learners and future leaders seeking transformation through deeper depth and structured support.</p>
               <button className="w-full py-4 rounded-xl bg-nstc-navy text-white font-bold hover:bg-amber-600 transition-all">Apply for Premium Track</button>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:border-amber-500 transition-all">
               <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-8">
                  <Briefcase className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-display font-bold mb-4">Workforce Programs</h3>
               <p className="text-slate-500 mb-6">Built for workforce readiness, specialized upskilling, and future-ready capability building across AI, Nano, and Bio.</p>
               <button className="w-full py-4 rounded-xl bg-nstc-navy text-white font-bold hover:bg-indigo-600 transition-all">Apply for Workforce Track</button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Section id="pricing" className="bg-white py-24">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <SectionHeading 
              badge="Pricing"
              title="Flexible Flagship Access"
              subtitle="Choose single programs, domain packs, or all-access flagship bundles."
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

          <PricingTable 
            data={pricingRegion === 'india' ? PRICE_FLAGSHIP_INDIA : PRICE_FLAGSHIP_INTL} 
            currencyPrefix={pricingRegion === 'india' ? "₹" : "USD "} 
          />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-amber-900 text-white overflow-hidden relative">
              <div className="relative z-10">
                <h4 className="text-2xl font-display font-bold mb-4">University & Industry Cohorts</h4>
                <p className="text-amber-100 mb-6">Customized flagship programs for university campuses, research groups, and industry teams.</p>
                <button className="px-6 py-3 rounded-xl bg-white text-amber-950 font-bold hover:bg-amber-50 transition-all">
                  Request Partnership Call
                </button>
              </div>
              <Building className="absolute -bottom-8 -right-8 w-48 h-48 text-white/5" />
            </div>
            <div className="p-10 rounded-[2.5rem] bg-nstc-navy text-white overflow-hidden relative">
              <div className="relative z-10">
                <h4 className="text-2xl font-display font-bold mb-4">Hybrid Program Packs</h4>
                <p className="text-slate-300 mb-6">Combine flagship transformation with workshop access for the ultimate learning experience.</p>
                <button className="px-6 py-3 rounded-xl bg-white text-nstc-navy font-bold hover:bg-slate-100 transition-all">
                  Explore Hybrid Packs
                </button>
              </div>
              <Rocket className="absolute -bottom-8 -right-8 w-48 h-48 text-white/5" />
            </div>
          </div>
        </div>
      </Section>

      {/* Domain Specific */}
      <Section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="section-container">
           <SectionHeading 
             badge="Domains"
             title="Flagship Programs Across Domains"
           />
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { domain: "AI", title: "AI Flagship Programs", desc: "Structured, applied, and future-focused pathways in artificial intelligence." },
                { domain: "Nano", title: "Nano Flagship Programs", desc: "Support scientific understanding, innovation relevance, and long-term growth." },
                { domain: "Bio", title: "Bio Flagship Programs", desc: "Biological learning and interdisciplinary life-science pathways." }
              ].map(d => (
                <div key={d.domain} className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-nstc-navy text-white flex items-center justify-center font-bold text-xs">{d.domain}</div>
                    <h4 className="text-xl font-display font-bold">{d.title}</h4>
                  </div>
                  <p className="text-slate-500 text-sm mb-6">{d.desc}</p>
                  <button className="text-nstc-navy font-bold text-sm hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                    Explore Domain <Zap className="w-4 h-4" />
                  </button>
                </div>
              ))}
           </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading badge="FAQ" title="Frequently Asked Questions" />
          <FAQ items={[
            { question: "What makes a flagship program different?", answer: "Flagship programs offer deeper structure, premium design, mentorship, Live Labs, and capstone-based learning for meaningful long-term growth." },
            { question: "Are flagship programs available across domains?", answer: "Yes. NanoSchool offers flagship programs across AI, Nano, and Bio." },
            { question: "Does NanoSchool offer international pricing?", answer: "Yes, international pricing is available for students, PhD scholars, faculty, and professionals." },
            { question: "Can universities or companies request cohorts?", answer: "Yes. We offer customized flagship cohorts for universities and industry partners based on batch size and domain needs." }
          ]} />
        </div>
      </Section>
    </div>
  );
};
