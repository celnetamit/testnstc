import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { Sparkles, ArrowRight, ShieldCheck, TrendingUp, Crown, Zap, CheckCircle2, BookOpen, Users, Award, Briefcase, Layers, Microscope, Factory, GraduationCap } from "lucide-react";
import { SectionHeading, FeatureCard, Section, FAQ, Tooltip, NSTCLogo } from "../components/Common";

export const HomePage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <motion.div 
            style={{ x: springX, y: springY }}
            className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-[120px]" 
          />
          <motion.div 
            style={{ x: useSpring(mouseX, { damping: 40, stiffness: 100 }), y: useSpring(mouseY, { damping: 40, stiffness: 100 }) }}
            animate={{ x: mouseX.get() * -0.05, y: mouseY.get() * -0.05 }}
            className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-cyan-200/20 rounded-full blur-[100px]" 
          />
        </div>

        <div className="section-container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nstc-light border border-blue-100 text-nstc-navy text-xs font-bold uppercase tracking-widest mb-8 cursor-default">
              <Sparkles className="w-3 h-3 text-nstc-blue" />
              Nanotechnology Domain
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tight leading-[0.95] mb-8 text-slate-950">
              Build the Future at <br />
              <span className="italic font-normal text-nstc-blue">the Nanoscale.</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed mb-12">
              <span className="font-bold text-nstc-navy">NSTC NanoSchool</span>’s Nanotechnology Domain is a structured ecosystem helping students, researchers, and industry professionals build future-ready capability through expert-led courses, workshops, and internships.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button 
                onClick={() => onNavigate('courses')}
                whileHover={{ scale: 1.05, backgroundColor: "#1e293b" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-slate-950 text-white font-semibold flex items-center gap-2 group shadow-xl shadow-slate-950/20"
              >
                Explore Nano Courses <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                onClick={() => onNavigate('workshops')}
                whileHover={{ scale: 1.05, borderColor: "#3b82f6", color: "#2563eb" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-900 font-semibold transition-colors"
              >
                Join Nano Workshops
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-200 pt-12"
          >
            {[
              { val: "350+", label: "Courses" },
              { val: "50+", label: "Expert Mentors" },
              { val: "12k+", label: "Learners" },
              { val: "15+", label: "Flagship Programs" },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
              >
                <div className="text-3xl font-display font-bold text-slate-950">{stat.val}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* Why Learn Nano Section */}
      <Section className="py-24 bg-white border-b border-slate-100">
        <div className="section-container">
          <SectionHeading 
            badge="The NanoSchool Advantage"
            title="Why Learn Nano Through NanoSchool"
            subtitle="We provide a structured ecosystem designed to take you from foundational concepts to advanced industrial applications with scientific precision."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Structured Learning", desc: "Curriculum designed by nanotechnology experts with specific pathways from foundation to specialized research.", color: "bg-blue-50 text-blue-600" },
              { icon: TrendingUp, title: "Industry Relevance", desc: "Direct insights from global industry partners, ensuring the skills you acquire are immediately applicable.", color: "bg-indigo-50 text-indigo-600" },
              { icon: Crown, title: "Premium Experience", desc: "High-quality academic resources, global expert mentorship, and a polished platform for high-performance learners.", color: "bg-amber-50 text-amber-600" }
            ].map((benefit, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2, duration: 0.5 }} className="group p-8 rounded-3xl border border-slate-100 hover:border-nstc-blue/20 hover:bg-slate-50 transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Impact Section */}
      <section className="bg-slate-950 py-24 text-white overflow-hidden relative">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading badge="Impact" title="Why Nanotechnology Matters Today" light />
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>Nanotechnology is shaping how new materials are developed, how healthcare innovations are designed, and how energy systems improve.</p>
                <p>From nanomaterials and nanomedicine to sensors, coatings, and drug delivery, the field is becoming essential for future scientific and industrial progress.</p>
                <p className="text-white font-medium">NanoSchool has built a dedicated Domain landing page to bridge the gap between academic depth and real-world application.</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-indigo-500/10 border border-white/10 p-8 flex items-center justify-center overflow-hidden">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }} className="relative w-full h-full border border-dashed border-indigo-400/30 rounded-full flex items-center justify-center" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-32 h-32 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex flex-col items-center justify-center text-center p-4">
                      <div className="w-20 h-20 mb-2 flex items-center justify-center">
                         <NSTCLogo className="w-full" />
                      </div>
                      <div className="text-xs font-bold uppercase tracking-widest text-indigo-400">Nano Core</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings Section */}
      <section id="offerings" className="section-container pt-24">
        <SectionHeading 
          badge="Learning Pathways"
          title="A Complete Nanotechnology Ecosystem"
          subtitle="Designed as a complete ecosystem rather than disconnected offerings. Access multiple formats depending on your stage and goals."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard icon={BookOpen} title="Nanotechnology Courses" description="Structured nanotechnology courses designed to help learners build conceptual understanding." href="#" />
          <FeatureCard icon={Users} title="Nano Workshops" description="Expert-led nano workshops focused on practical learning and emerging developments." href="#" />
          <FeatureCard icon={Award} title="Flagship Programs" description="Premium learning pathways that combine structured curriculum, mentor support, and capstone-style learning." href="#" />
          <FeatureCard icon={Briefcase} title="Nano Internships" description="Domain-linked internships that connect learning with projects and practical experience." href="#" />
          <FeatureCard icon={Layers} title="Learning Packages" description="Flexible learning packages through course bundles and customized institutional plans." href="#" />
          <div className="p-8 rounded-3xl bg-nstc-navy text-white flex flex-col justify-between group cursor-pointer overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-medium mb-4">Institutional Options</h3>
              <p className="text-nstc-light text-sm opacity-80">Customized enterprise plans for universities & industry teams.</p>
            </div>
            <div className="relative z-10 mt-8 flex items-center gap-2 font-bold text-white group-hover:gap-4 transition-all">
              Request Quote <ArrowRight className="w-5 h-5" />
            </div>
            <Zap className="absolute -bottom-8 -right-8 w-40 h-40 text-white transform rotate-12 opacity-10" />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-container py-24">
        <SectionHeading badge="Nano Community" title="Built for Every Nano Stakeholder" subtitle="Designed for multiple kinds of learners and collaborators, each with different goals and backgrounds." />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { icon: GraduationCap, title: "Students", desc: "Build strong foundations.", fullDesc: "Build strong foundations in nanotechnology through structured pathways." },
            { icon: Microscope, title: "PhD/Profs", desc: "Advanced research learning.", fullDesc: "Access advanced nano learning and research-oriented workshops." },
            { icon: Zap, title: "Professionals", desc: "Upskill for growth.", fullDesc: "Upskill through focused learning experiences for career growth." },
            { icon: Users, title: "Universities", desc: "Campus packs.", fullDesc: "Strengthen student and faculty capability through collaborative initiatives." },
            { icon: Factory, title: "Industry", desc: "Technical training.", fullDesc: "Support talent development and workforce capability through nano-focused learning." }
          ].map(persona => (
            <div key={persona.title}>
              <Tooltip text={persona.fullDesc}>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center hover:border-nstc-blue transition-colors h-full flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 text-nstc-navy flex items-center justify-center mx-auto mb-4">
                    <persona.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 mb-2">{persona.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{persona.desc}</p>
                </div>
              </Tooltip>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <Section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading badge="FAQ" title="Frequently Asked Questions" />
          <FAQ items={[
            { question: "What is the Nano Domain page?", answer: "A dedicated landing page for nanotechnology courses, workshops, and programs." },
            { question: "Who is it designed for?", answer: "Students, researchers, professionals, universities, and industry teams." }
          ]} />
        </div>
      </Section>
    </>
  );
};
