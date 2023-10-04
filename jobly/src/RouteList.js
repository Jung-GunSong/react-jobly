import { Route } from "react-router-dom";
import HomePage from "./HomePage";
import JobsPage from "./JobsPage";
import CompaniesPage from "./CompaniesPage";
import CompanyJobPage from "./CompanyJobPage";


function RouteList(){

  return (
    <div>
      <RouteList>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/companies/:handle" element={<CompanyJobPage />} />
      </RouteList>
    </div>
  )
}

export default RouteList;