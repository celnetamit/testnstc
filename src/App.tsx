import { RouterProvider, Route } from "./components/Router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { CoursesPage } from "./pages/CoursesPage";
import { WorkshopsPage } from "./pages/WorkshopsPage";
import { FlagshipPage } from "./pages/FlagshipPage";
import { InternshipsPage } from "./pages/InternshipsPage";
import { MembershipsPage } from "./pages/MembershipsPage";
import { CertificationsPage } from "./pages/CertificationsPage";
import { IndustryPage } from "./pages/IndustryPage";
import { PhdProfessorsPage } from "./pages/PhdProfessorsPage";
import { ProfessionalsPage } from "./pages/ProfessionalsPage";
import { StudentsPage } from "./pages/StudentsPage";
import { UniversityPage } from "./pages/UniversityPage";

export default function App() {
  return (
    <RouterProvider>
      <Layout>
        <Route path="/" component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/workshops" component={WorkshopsPage} />
        <Route path="/flagship" component={FlagshipPage} />
        <Route path="/internships" component={InternshipsPage} />
        <Route path="/memberships" component={MembershipsPage} />
        <Route path="/certifications" component={CertificationsPage} />
        <Route path="/for-industry" component={IndustryPage} />
        <Route path="/for-phd-professors" component={PhdProfessorsPage} />
        <Route path="/for-professionals" component={ProfessionalsPage} />
        <Route path="/for-students" component={StudentsPage} />
        <Route path="/for-universities" component={UniversityPage} />
      </Layout>
    </RouterProvider>
  );
}

