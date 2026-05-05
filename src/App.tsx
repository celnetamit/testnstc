import { useState } from "react";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { CoursesPage } from "./pages/CoursesPage";
import { WorkshopsPage } from "./pages/WorkshopsPage";
import { FlagshipPage } from "./pages/FlagshipPage";
import { InternshipsPage } from "./pages/InternshipsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    // Basic routing logic
    if (page === "home") {
      setCurrentPage("home");
    } else if (page === "courses") {
      setCurrentPage("courses");
    } else if (page === "workshops") {
      setCurrentPage("workshops");
    } else if (page === "flagship") {
      setCurrentPage("flagship");
    } else if (page === "internships") {
      setCurrentPage("internships");
    } else {
      // For pricing and other sections on the home page
      if (currentPage !== "home") {
        setCurrentPage("home");
        setTimeout(() => {
          const el = document.getElementById(page);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.getElementById(page);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Layout onNavigate={handleNavigate} currentPage={currentPage}>
      {currentPage === "home" && <HomePage onNavigate={handleNavigate} />}
      {currentPage === "courses" && <CoursesPage onNavigate={handleNavigate} />}
      {currentPage === "workshops" && <WorkshopsPage onNavigate={handleNavigate} />}
      {currentPage === "flagship" && <FlagshipPage onNavigate={handleNavigate} />}
      {currentPage === "internships" && <InternshipsPage onNavigate={handleNavigate} />}
    </Layout>
  );
}
