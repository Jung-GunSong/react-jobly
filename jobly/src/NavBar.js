import { NavLink } from "react-router-dom";
import "./NavBar.css";


/**
 * NavBar: renders links to routes for each page
 *
 */
function NavBar() {

  return (
    <div className="NavBar">
      <NavLink to="/" >Jobly</NavLink>
      <NavLink to="/jobs" >Jobs</NavLink>
      <NavLink to="/companies"  >Companies</NavLink>
      <NavLink to="/login"  >Login</NavLink>
      <NavLink to="/signUp"  >SignUp</NavLink>
    </div>
  );
}

export default NavBar;