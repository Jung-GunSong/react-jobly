import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import RouteList from "./RouteList";
import { useState } from "react";
import userContext from "./userContext";


/**
 * JoblyApp: Renders NavBar component and Routes
 *
 * JoblyApp => {NavBar, RouteList}
 *
 */
function JoblyApp() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState({});



  function loginUser(loginInfo) {


  }

  function registerUser(loginInfo) {


  }

  return (
    <div>
      <BrowserRouter>
        <userContext.Provider value={user.username}>
          <NavBar user={user} />
          <RouteList loginUser={loginUser} registerUser={registerUser} />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default JoblyApp;