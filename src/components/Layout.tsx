import { ReactNode, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children, onNavigate, currentPage }: { children: ReactNode, onNavigate: (page: string) => void, currentPage: string }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="font-sans min-h-screen">
      <Navbar onNavigate={onNavigate} currentPage={currentPage} />
      <main>
        {children}
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};
