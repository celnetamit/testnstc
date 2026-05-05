import { motion } from "motion/react";
import { Calendar, Video, MapPin, Clock, Users, Zap, Award, Globe, Building, GraduationCap, Microscope, ShieldCheck, Briefcase } from "lucide-react";
import { SectionHeading, Section, FAQ, PricingTable } from "../components/Common";
import { useState } from "react";
import { useRouter } from "../components/Router";

const PRICE_WORKSHOP_INDIA = [
  { offer: "1 Workshop", student: "1,499", phd: "1,699", faculty: "1,799", professional: "1,999" },
  { offer: "3 Workshops", student: "2,999", phd: "3,999", faculty: "4,499", professional: "4,999" },
  { offer: "5 Workshops", student: "3,999", phd: "5,999", faculty: "6,499", professional: "7,499" },
  { offer: "10 Workshops", student: "6,999", phd: "9,999", faculty: "10,999", professional: "12,999" },
  { offer: "20 Workshops", student: "11,999", phd: "16,999", faculty: "17,999", professional: "19,999" },
  { offer: "All-Workshop Pass", student: "19,999", phd: "24,999", faculty: "26,999", professional: "29,999" },
];

const PRICE_WORKSHOP_INTL = [
  { offer: "1 Workshop", student: "65", phd: "75", faculty: "95", professional: "112" },
  { offer: "3-Workshop Pack", student: "180", phd: "210", faculty: "270", professional: "320" },
  { offer: "5-Workshop Pack", student: "300", phd: "350", faculty: "450", professional: "540" },
  { offer: "10-Workshop Pack", student: "550", phd: "650", faculty: "850", professional: "1,000" },
  { offer: "All-Workshop Pass", student: "1,000", phd: "1,200", faculty: "1,500", professional: "1,800" },
];

export const WorkshopsPage = () => {
  const [pricingRegion, setPricingRegion] = useState<"india" | "intl">("india");
  const { navigate } = useRouter();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden bg-indigo-950 text-white">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />
        </div>

        <div className="section-container text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-indigo-200 text-xs font-bold uppercase tracking-widest mb-8">
              <Calendar className="w-3 h-3" />
              NanoSchool Workshops
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-tight mb-8">
              High-Impact Workshops for <br />
              <span className="italic font-normal text-indigo-400">Deep Learning.</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl text-slate-400 leading-relaxed mb-12">
              Explore NanoSchool’s focused, expert-led workshops across AI, Nano, and Bio. Designed for serious learners who want practical understanding and future-ready capability.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-white text-indigo-950 font-bold hover:bg-indigo-50 transition-all shadow-xl shadow-white/10">
                Explore Paid Workshops
              </button>
              <button className="px-8 py-4 rounded-full bg-indigo-500 text-white font-bold hover:bg-indigo-400 transition-all shadow-xl shadow-indigo-500/20">
                Join a Workshop
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Why Our Workshops Matter */}
      <Section className="py-24">
        <div className="section-container">
          <SectionHeading 
            badge="The Workshop Advantage"
            title="More Than Sessions. Built for Real Impact."
            subtitle="Our workshops are structured, premium, and outcome-oriented learning experiences that go beyond theory."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "High-End Experience", desc: "Designed with greater depth and stronger structure than generic webinars." },
              { icon: Users, title: "Expert-Led Delivery", desc: "Learn from mentors, researchers, and professionals with real domain knowledge." },
              { icon: Microscope, title: "Focused & Relevant", desc: "Built around specific needs and emerging directions in deep-science fields." },
              { icon: Award, title: "Practical Orientation", desc: "Emphasizes applied understanding, guided discussion, and real-world examples." },
              { icon: Layers, title: "Pathway-Based", desc: "Connects naturally to courses, flagship programs, and internships." },
              { icon: ShieldCheck, title: "Certified Growth", desc: "Each workshop includes certificate-linked participation for your portfolio." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-indigo-500/20 hover:shadow-2xl transition-all group">
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

      {/* Workshop Categories */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="section-container">
          <SectionHeading 
            badge="Specializations"
            title="Workshops Tailored for Your Growth"
            subtitle="Choose the workshop category that aligns with your professional or academic stage."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:border-indigo-500 transition-all">
               <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-8">
                  <GraduationCap className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-display font-bold mb-4">Faculty Workshops</h3>
               <p className="text-slate-500 mb-6">Designed to support educators and academic leaders in subject enrichment, emerging domain awareness, and institutional development.</p>
               <ul className="space-y-3 mb-8">
                  {["Faculty Development", "Subject Enrichment", "Academic Innovation"].map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> {f}
                    </li>
                  ))}
               </ul>
               <button className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-indigo-600 transition-all">Explore Faculty Workshops</button>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:border-indigo-500 transition-all">
               <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8">
                  <Briefcase className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-display font-bold mb-4">Professional Workshops</h3>
               <p className="text-slate-500 mb-6">Focused, high-value learning for working professionals seeking domain specialization and practical career relevance.</p>
               <ul className="space-y-3 mb-8">
                  {["Domain Upskilling", "Specialization", "Workforce Readiness"].map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {f}
                    </li>
                  ))}
               </ul>
               <button className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-blue-600 transition-all">Explore Professional Workshops</button>
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
              title="Flexible Workshop Access"
              subtitle="Choose single sessions, multi-packs, or all-access passes based on your goals."
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
            data={pricingRegion === 'india' ? PRICE_WORKSHOP_INDIA : PRICE_WORKSHOP_INTL} 
            currencyPrefix={pricingRegion === 'india' ? "₹" : "USD "} 
          />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-indigo-900 text-white overflow-hidden relative">
              <div className="relative z-10">
                <h4 className="text-2xl font-display font-bold mb-4">University Workshop Packages</h4>
                <p className="text-indigo-100 mb-6">Departmental workshops, faculty development series, and annual skill-development initiatives.</p>
                <button className="px-6 py-3 rounded-xl bg-white text-indigo-950 font-bold hover:bg-indigo-50 transition-all">
                  Partner for Campus Workshops
                </button>
              </div>
              <Building className="absolute -bottom-8 -right-8 w-48 h-48 text-white/5" />
            </div>
            <div className="p-10 rounded-[2.5rem] bg-slate-900 text-white overflow-hidden relative">
              <div className="relative z-10">
                <h4 className="text-2xl font-display font-bold mb-4">Enterprise Workshop Packs</h4>
                <p className="text-slate-300 mb-6">Customized workforce upskilling for technical teams, R&D labs, and industry leaders.</p>
                <button className="px-6 py-3 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-100 transition-all">
                  Organize Enterprise Workshop
                </button>
              </div>
              <Zap className="absolute -bottom-8 -right-8 w-48 h-48 text-white/5" />
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading badge="FAQ" title="Frequently Asked Questions" />
          <FAQ items={[
            { question: "What types of workshops does NanoSchool offer?", answer: "We offer paid, high-end, faculty, and professional workshops across AI, Nano, and Bio domains." },
            { question: "Who are these workshops designed for?", answer: "Students, PhD scholars, researchers, professors, working professionals, and industry teams." },
            { question: "Are these workshops connected to larger programs?", answer: "Yes, workshops are designed as high-impact entry points that connect naturally to our courses, flagship programs, and internships." },
            { question: "Does NanoSchool offer international pricing?", answer: "Yes, international workshop pricing is available for students, researchers, and professionals globally." }
          ]} />
        </div>
      </Section>
    </div>
  );
};

const Layers = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
);
