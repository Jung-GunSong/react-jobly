import { NavLink } from "react-router-dom";
import "./NavBar.css";


/**
 * NavBar: renders links to routes for each page
 *
 */
function NavBar({ user }) {

  return (
    <div className="NavBar">
      <NavLink to="/" >Jobly</NavLink>
      {!user.username ?
        <>
          <NavLink to="/login"  >Login</NavLink>
          <NavLink to="/signup"  >SignUp</NavLink>
        </> :
        <>
          <NavLink to="/jobs" >Jobs</NavLink>
          <NavLink to="/companies"  >Companies</NavLink>
          <NavLink to="/profile" >Profile</NavLink>
          <NavLink to="/logout" >Log out {user.username}</NavLink>
        </>
      }
    </div>
  );
}

export default NavBar;