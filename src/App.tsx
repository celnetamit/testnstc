import { RouterProvider, Route } from "./components/Router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { CoursesPage } from "./pages/CoursesPage";
import { WorkshopsPage } from "./pages/WorkshopsPage";
import { FlagshipPage } from "./pages/FlagshipPage";
import { InternshipsPage } from "./pages/InternshipsPage";
import { MembershipsPage } from "./pages/MembershipsPage";

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
      </Layout>
    </RouterProvider>
  );
}
