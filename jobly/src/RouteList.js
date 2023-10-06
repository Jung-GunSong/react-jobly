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
 * State: none
 *
 * Props:
 * registerUser: function to register user with form data
 * loginUser: function to login user with valid username and password
 * isLoggedIn: boolean value to determine if user is loggedn in or not
 */
function RouteList({ registerUser, loginUser, isLoggedIn }) {



  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login loginUser={loginUser} />} />
        <Route path="/signup" element={<SignUp registerUser={registerUser} />} />
        {isLoggedIn && <><Route path="/profile" element={<UserProfile />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/companies/:handle" element={<CompanyJobPage />} /> </>}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default RouteList;