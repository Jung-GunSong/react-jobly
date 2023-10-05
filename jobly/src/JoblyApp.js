import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import RouteList from "./RouteList";

/**
 * JoblyApp: Renders NavBar component and Routes
 *
 * JoblyApp => {NavBar, RouteList}
 *
 */
function JoblyApp() {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <RouteList loginUser={loginUser} registerUser={registerUser} />
      </BrowserRouter>
    </div>
  );
}

export default JoblyApp;