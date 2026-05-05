import { useState } from "react";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { CoursesPage } from "./pages/CoursesPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    // Basic routing logic
    if (page === "home") {
      setCurrentPage("home");
    } else if (page === "courses") {
      setCurrentPage("courses");
    } else {
      // For now, other links just scroll to their sections if they are on the homepage
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
      {currentPage === "home" ? (
        <HomePage onNavigate={handleNavigate} />
      ) : currentPage === "courses" ? (
        <CoursesPage onNavigate={handleNavigate} />
      ) : (
        <HomePage onNavigate={handleNavigate} />
      )}
    </Layout>
  );
}
