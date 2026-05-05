import { ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, CheckCircle2, Zap, Plus, ChevronDown } from "lucide-react";
import { useState } from "react";

export const NSTCLogo = ({ className = "h-8" }: { className?: string }) => (
  <svg 
    viewBox="0 0 120 80" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="60" cy="40" rx="58" ry="38" fill="#E0F2FE" stroke="#002D62" strokeWidth="1"/>
    <g stroke="#002D62" strokeWidth="0.5" opacity="0.4">
      <ellipse cx="60" cy="40" rx="30" ry="38" />
      <ellipse cx="60" cy="40" rx="10" ry="38" />
      <line x1="60" y1="2" x2="60" y2="78" />
      <ellipse cx="60" cy="40" rx="58" ry="20" />
      <ellipse cx="60" cy="40" rx="58" ry="8" />
      <line x1="2" y1="40" x2="118" y2="40" />
    </g>
    <text 
      x="50%" 
      y="55%" 
      textAnchor="middle" 
      fill="#002D62" 
      className="font-display font-black" 
      fontSize="32"
      style={{ letterSpacing: "-1px" }}
    >
      NSTC
    </text>
  </svg>
);

export const SectionHeading = ({ badge, title, subtitle, light = false }: { badge?: string, title: string, subtitle?: string, light?: boolean }) => (
  <div className="space-y-4 max-w-3xl mb-16">
    {badge && (
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${light ? 'bg-white/10 border-white/20 text-white' : 'bg-nstc-light border-blue-100 text-nstc-navy'} border text-xs font-bold uppercase tracking-wider`}>
        <Sparkles className="w-3 h-3" />
        {badge}
      </div>
    )}
    <h2 className={`text-4xl md:text-5xl font-display font-semibold tracking-tight leading-tight ${light ? 'text-white' : 'text-nstc-navy'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg leading-relaxed max-w-2xl ${light ? 'text-slate-400' : 'text-slate-500'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export const FeatureCard = ({ icon: Icon, title, description, href }: { icon: any, title: string, description: string, href?: string }) => (
  <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-nstc-blue hover:shadow-2xl hover:shadow-nstc-navy/5 transition-all group">
    <div className="w-12 h-12 rounded-2xl bg-nstc-light text-nstc-navy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-nstc-blue transition-colors">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed mb-6">{description}</p>
    {href && (
      <a href={href} className="flex items-center gap-2 text-sm font-bold text-nstc-navy group-hover:gap-3 transition-all">
        Learn More <ArrowRight className="w-4 h-4" />
      </a>
    )}
  </div>
);

export const PricingTable = ({ data, currencyPrefix }: { data: any[], currencyPrefix: string }) => (
  <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
    <table className="w-full text-left border-collapse min-w-[600px]">
      <thead>
        <tr className="bg-slate-50 border-b border-slate-200">
          <th className="p-4 font-display font-semibold text-slate-600">Product / Offer</th>
          <th className="p-4 font-display font-semibold text-slate-600">Student</th>
          <th className="p-4 font-display font-semibold text-slate-600">PhD / Researcher</th>
          <th className="p-4 font-display font-semibold text-slate-600">Faculty</th>
          <th className="p-4 font-display font-semibold text-slate-600">Professional</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {data.map((row, idx) => (
          <tr key={idx} className="hover:bg-slate-50 transition-colors">
            <td className="p-4 font-medium text-slate-900">{row.offer}</td>
            <td className="p-4 text-slate-600 font-mono text-sm">{currencyPrefix}{row.student}</td>
            <td className="p-4 text-slate-600 font-mono text-sm">{currencyPrefix}{row.phd}</td>
            <td className="p-4 text-slate-600 font-mono text-sm">{currencyPrefix}{row.faculty}</td>
            <td className="p-4 text-slate-600 font-mono text-sm">{currencyPrefix}{row.professional}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const Section = ({ children, className = "", id }: { children: ReactNode, className?: string, id?: string }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
    className={className}
  >
    {children}
  </motion.section>
);

export const FAQ = ({ items }: { items: { question: string, answer: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm divide-y divide-slate-100">
      {items.map((faq, i) => (
        <div key={i} className="py-4 first:pt-0 last:pb-0">
          <button 
            className="w-full flex items-center justify-between text-left group"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className={`font-display font-medium text-lg pr-8 transition-colors ${openIndex === i ? 'text-nstc-blue' : 'text-slate-900 group-hover:text-nstc-blue'}`}>
              {faq.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "circOut" }}
            >
              {openIndex === i ? <ChevronDown className="w-5 h-5 text-nstc-blue" /> : <Plus className="w-5 h-5 text-slate-400 group-hover:text-nstc-blue" />}
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
              >
                <p className="pt-4 text-slate-500 leading-relaxed max-w-2xl">{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export const Tooltip = ({ text, children }: { text: string, children: ReactNode }) => {
  const [show, setShow] = useState(false);
  return (
    <div 
      className="relative" 
      onMouseEnter={() => setShow(true)} 
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-3 bg-slate-900 text-white text-[11px] leading-relaxed rounded-xl shadow-2xl pointer-events-none"
          >
            {text}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
