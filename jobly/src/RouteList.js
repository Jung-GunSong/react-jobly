import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import JobsPage from "./JobsPage";
import CompaniesPage from "./CompaniesPage";
import CompanyJobPage from "./CompanyJobPage";
import Login from "./Login";

/**
 * Manages routes to each associated component/page
 *
 */
function RouteList() {



  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/companies/:handle" element={<CompanyJobPage />} />
      </Routes>
    </div>
  );
}

export default RouteList;