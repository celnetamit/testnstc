import { motion } from "motion/react";
import { Briefcase, Microscope, Building, Rocket, Zap, Award, CheckCircle2, Globe, ArrowRight } from "lucide-react";
import { SectionHeading, Section, FAQ } from "../components/Common";

export const InternshipsPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-20">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent" />
        </div>

        <div className="section-container text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-8">
              <Briefcase className="w-3 h-3" />
              NanoSchool Internships
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-tight mb-8">
              Real Projects. <br />
              <span className="italic font-normal text-emerald-400">Practical Depth.</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed mb-12">
              Bridge the gap between academic learning and industrial application with domain-linked internships across AI, Nano, and Bio. Designed for serious learners seeking practical exposure.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-emerald-500 text-white font-bold hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20">
                Explore Internship Tracks
              </button>
              <button className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all">
                Apply for Internship
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Internship Ecosystem */}
      <Section className="py-24">
        <div className="section-container">
          <SectionHeading 
            badge="The Internship Model"
            title="Designed for Real-World Capability"
            subtitle="Our internships are more than just placements — they are structured growth experiences."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Microscope, title: "Research Internships", desc: "Work on cutting-edge scientific problems in advanced labs and research environments." },
              { icon: Building, title: "Industry Internships", desc: "Gain experience in corporate R&D, product development, and technical teams." },
              { icon: Rocket, title: "Startup Internships", desc: "Join fast-paced deep-tech startups and help build the innovations of tomorrow." }
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

      {/* Domain Tracks */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="section-container">
          <SectionHeading 
            badge="Tracks"
            title="Internship Pathways Across Domains"
            subtitle="Select the domain where you want to build your practical portfolio."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { domain: "AI", title: "AI & Machine Learning", points: ["Applied AI Projects", "Data Science Tracks", "Algorithm Dev"] },
              { domain: "Nano", title: "Nanotechnology", points: ["Nanomaterials Lab", "Characterization", "Nano-Bio Apps"] },
              { domain: "Bio", title: "Biotechnology", points: ["Molecular Bio", "Bio-Informatics", "Synthetic Biology"] }
            ].map((track, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:border-emerald-500 transition-all">
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-6">{track.domain} Domain</div>
                <h3 className="text-2xl font-display font-bold mb-6">{track.title}</h3>
                <ul className="space-y-4 mb-10">
                   {track.points.map(p => (
                     <li key={p} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                       <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {p}
                     </li>
                   ))}
                </ul>
                <button className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-emerald-600 transition-all">Apply for Track</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <Section className="py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading 
                badge="The Advantage"
                title="Why NanoSchool Internships Stand Out"
                subtitle="We don't just provide a role; we provide a foundation for your future career."
              />
              <div className="space-y-8">
                {[
                  { title: "Structured Mentorship", desc: "Work closely with domain experts and industry professionals." },
                  { title: "Portfolio Building", desc: "Complete real-world projects that you can showcase to future employers." },
                  { title: "Ecosystem Connectivity", desc: "Our internships connect naturally to our courses, workshops, and certifications." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
               <div className="aspect-square rounded-[3rem] bg-emerald-100 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" alt="Laboratory" className="w-full h-full object-cover opacity-80" />
               </div>
               <div className="absolute -bottom-8 -left-8 p-8 bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-xs">
                  <p className="text-slate-900 font-bold mb-2 text-sm italic">"The internship helped me bridge the gap between theory and actual lab work. Highly recommended!"</p>
                  <p className="text-emerald-600 text-xs font-bold">— Research Intern, 2024</p>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading badge="FAQ" title="Internship FAQ" />
          <FAQ items={[
            { question: "How long are the internships?", answer: "Internships typically range from 4 to 12 weeks depending on the track and project requirements." },
            { question: "Are these internships paid?", answer: "We offer both self-sponsored learning internships and stipend-linked project roles depending on the partner lab or company." },
            { question: "Who is eligible to apply?", answer: "Students, PhD scholars, and early-career professionals with relevant domain interest in AI, Nano, or Bio." },
            { question: "Do I get a certificate?", answer: "Yes, all successful interns receive a domain-linked internship certificate and a letter of recommendation based on performance." }
          ]} />
        </div>
      </Section>
    </div>
  );
};
