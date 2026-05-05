import { motion } from "motion/react";
import { Award, ShieldCheck, Globe, Users, BookOpen, CheckCircle2 } from "lucide-react";
import { SectionHeading, Section, FAQ } from "../components/Common";

export const CertificationsPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-20">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="section-container text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-8">
              <Award className="w-3 h-3" />
              Certifications & Trust
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-tight mb-8">
              Certifications That Strengthen <br />
              <span className="italic font-normal text-blue-400">Credibility and Trust.</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed mb-12">
              Recognize meaningful participation, structured learning, and successful completion across the AI, Nano, and Bio ecosystems.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20">
                Explore Certification Pathways
              </button>
              <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold hover:bg-white/20 transition-all">
                View Certificate Policy
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Why Certifications Matter */}
      <Section className="py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading 
                badge="Trust & Proof"
                title="Recognition That Reflects Learning and Progress"
                subtitle="In a fast-changing academic and professional landscape, learning needs visible proof. A certificate is more than a document — it represents commitment and structured progress."
              />
              <div className="space-y-6">
                {[
                  { title: "Visibility & Credibility", desc: "Add recognized value to your learning journey and professional profile." },
                  { title: "Structured Proof", desc: "Demonstrate participation in meaningful opportunities and guided pathways." },
                  { title: "Ecosystem Trust", desc: "Built to strengthen credibility for learners, universities, and industry partners." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-[3rem] bg-slate-100 overflow-hidden shadow-2xl border border-slate-200">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" alt="Graduation" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 p-8 bg-white rounded-3xl border border-slate-100 shadow-2xl hidden md:block">
                <ShieldCheck className="w-12 h-12 text-blue-600 mb-4" />
                <div className="text-3xl font-display font-bold text-slate-900">Verified</div>
                <div className="text-slate-500 text-sm">Blockchain-Backed Certificates</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Certification Pathways */}
      <section className="py-24 bg-slate-50">
        <div className="section-container">
          <SectionHeading 
            badge="Pathways"
            title="Recognition Across the Ecosystem"
            subtitle="Certifications at NanoSchool are connected to multiple learning formats and participation models."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Course Certificates", desc: "Issued for eligible course completion where defined learning requirements are fulfilled." },
              { icon: Users, title: "Workshop Certificates", desc: "Designed to recognize participation or completion in eligible workshop experiences." },
              { icon: Award, title: "Flagship Program Certification", desc: "Structured program certification for premium, deep-transformation learning journeys." },
              { icon: Globe, title: "Co-Branded Certificates", desc: "Issued in selected partnership models with universities and institutional partners." },
              { icon: ShieldCheck, title: "Digital Badges", desc: "Micro-credentials used to recognize skill-based achievement and role-based learning." },
              { icon: CheckCircle2, title: "Internship Certificates", desc: "Recognition for project work, deliverables, and guided engagement in internships." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-blue-500 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-Branded Certificates */}
      <Section className="py-24">
        <div className="section-container">
          <div className="p-12 md:p-20 rounded-[4rem] bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/20 blur-[100px]" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">Partnership Value</div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">Co-Branded Certificates for Collaborative Credibility</h2>
                <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                  In selected partnership models, we offer co-branded certificates with universities and organizations, reflecting shared credibility and collaborative learning impact.
                </p>
                <button className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all">Request Partnership Model</button>
              </div>
              <div className="space-y-4">
                {[
                  "University workshop collaborations",
                  "Faculty development initiatives",
                  "Joint learning programs",
                  "Industry training cohorts",
                  "Campus learning programs"
                ].map(p => (
                  <div key={p} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    <span className="font-medium text-slate-200">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading badge="FAQ" title="Certification FAQ" />
          <FAQ items={[
            { question: "What is the Certifications page on NanoSchool?", answer: "The Certifications page is NanoSchool’s trust and proof page for certifications, certificates, co-branded certificates, digital badges, and program certification pathways." },
            { question: "What are co-branded certificates?", answer: "Co-branded certificates are certificates issued in collaboration with approved universities, institutions, organizations, or partners for eligible joint programs." },
            { question: "Are certificates included in all programs?", answer: "Certificates may be included in selected programs or available as add-ons depending on the program structure and eligibility." },
            { question: "Can universities request co-branded certificates?", answer: "Yes. Universities and institutions can request co-branded certificates for eligible collaborative workshops and faculty development initiatives." }
          ]} />
        </div>
      </Section>
    </div>
  );
};
