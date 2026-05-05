import { motion } from "motion/react";
import { Sparkles, Calendar, Zap, Users, ArrowRight, Video, MapPin, Clock } from "lucide-react";
import { SectionHeading, Section, FAQ } from "../components/Common";

export const WorkshopsPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <div className="bg-white">
      <header className="relative pt-32 pb-20 overflow-hidden bg-indigo-950 text-white">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />
        </div>

        <div className="section-container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-indigo-200 text-xs font-bold uppercase tracking-widest mb-8">
              <Calendar className="w-3 h-3" />
              Nano Workshops
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-tight mb-8">
              Focused Learning. <br />
              <span className="italic font-normal text-indigo-400">Expert-Led Workshops.</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl text-slate-400 leading-relaxed mb-12">
              Join live, interactive workshops designed to help you master specific topics in AI, Nano, and Bio. From technical deep-dives to industry case studies.
            </p>

            <button className="px-8 py-4 rounded-full bg-white text-indigo-950 font-bold hover:bg-indigo-50 transition-all shadow-xl shadow-white/10">
              View Upcoming Workshops
            </button>
          </motion.div>
        </div>
      </header>

      <Section className="py-24">
        <div className="section-container">
          <SectionHeading 
            badge="Workshop Formats"
            title="Practical Learning in Every Format"
            subtitle="We offer multiple workshop styles to fit your schedule and learning depth requirements."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Video, title: "Live Virtual", desc: "Interactive online sessions with real-time Q&A and hands-on exercises." },
              { icon: MapPin, title: "On-Campus", desc: "Immersive in-person experiences at partner universities and research centers." },
              { icon: Clock, title: "Masterclasses", desc: "Short, high-impact sessions focused on specific emerging technologies." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-200 hover:border-indigo-500 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section className="bg-slate-50 py-24">
        <div className="section-container">
          <SectionHeading badge="Current Openings" title="Join an Active Workshop" />
          <div className="space-y-6">
            {[
              { domain: "AI", title: "Generative AI for Scientific Research", date: "June 15, 2026", status: "Open" },
              { domain: "Nano", title: "Characterization of Carbon Nanotubes", date: "June 22, 2026", status: "Limited" },
              { domain: "Bio", title: "Bioinformatics in Drug Discovery", date: "July 05, 2026", status: "Open" }
            ].map((ws, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-lg transition-all">
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xs ${ws.domain === 'AI' ? 'bg-indigo-50 text-indigo-600' : ws.domain === 'Nano' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'}`}>
                    {ws.domain}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900">{ws.title}</h4>
                    <div className="flex items-center gap-4 text-xs text-slate-400 mt-1 font-medium">
                       <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {ws.date}</span>
                       <span className={`px-2 py-0.5 rounded-full ${ws.status === 'Open' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>{ws.status}</span>
                    </div>
                  </div>
                </div>
                <button className="px-6 py-2 rounded-xl bg-slate-950 text-white text-sm font-bold hover:bg-indigo-600 transition-all">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
