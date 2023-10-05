import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import JobsPage from "./JobsPage";
import CompaniesPage from "./CompaniesPage";
import CompanyJobPage from "./CompanyJobPage";
import Login from "./Login";
import SignUp from "./SignUp";
import UserProfile from "./UserProfile";
/**
 * Manages routes to each associated component/page
 *
 */
function RouteList({ registerUser, loginUser }) {



  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login loginUser={loginUser} />} />
        <Route path="/signup" element={<SignUp registerUser={registerUser} />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/companies/:handle" element={<CompanyJobPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default RouteList;