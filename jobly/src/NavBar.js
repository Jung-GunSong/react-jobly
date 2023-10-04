import { NavLink } from "react-router-dom";

function NavBar(){

  return (
    <div>
      <NavLink to="/" end />
      <NavLink to="/jobs" end />
      <NavLink to="/companies" end />
    </div>
  )
}

export default NavBar;