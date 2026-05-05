import { NSTCLogo } from "./Common";
import { Link } from "./Router";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-white pt-20 pb-12">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2 space-y-6">
            <Link 
              to="/"
              className="flex items-center gap-3 cursor-pointer"
            >
              <NSTCLogo className="h-10" />
              <span className="font-display font-bold text-3xl tracking-tighter">NanoSchool</span>
            </Link>
            <p className="text-slate-400 max-w-md italic leading-relaxed">
              <span className="text-white font-semibold">NSTC NanoSchool</span>’s Nano Domain is a structured nanotechnology learning hub offering courses, workshops, and internships for every science-driven ecosystem.
            </p>
            <div className="flex gap-4">
              {['fb', 'tw', 'ln', 'ig'].map(s => (
                <div key={s} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer text-xs font-bold uppercase tracking-widest">{s}</div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h5 className="font-display font-bold uppercase tracking-widest text-xs text-nstc-blue">Programs</h5>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/courses" className="hover:text-white transition-colors">Nano Courses</Link></li>
              <li><Link to="/workshops" className="hover:text-white transition-colors">Workshops</Link></li>
              <li><Link to="/flagship" className="hover:text-white transition-colors">Flagship Paths</Link></li>
              <li><Link to="/internships" className="hover:text-white transition-colors">Internships</Link></li>
              <li><Link to="/memberships" className="hover:text-white transition-colors">Memberships</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h5 className="font-display font-bold uppercase tracking-widest text-xs text-nstc-blue">Domains</h5>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">AI & Robotics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Biotechnology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quantum Computing</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
          <div>© 2026 NSTC NanoSchool. All Rights Reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-nstc-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-nstc-blue transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
