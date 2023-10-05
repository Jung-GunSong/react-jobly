import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import RouteList from "./RouteList";
import { useEffect, useState } from "react";
import userContext from "./userContext";
import JoblyApi from "./api";
import jwtDecode from "jwt-decode";
import { useJwt } from "react-jwt";
// import {decode, jwt} from "jsonwebtoken"

/**
 * JoblyApp: Renders NavBar component and Routes
 *
 * JoblyApp => {NavBar, RouteList}
 *
 */
function JoblyApp() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  const { decodedToken } = useJwt(token);
  useEffect(function () {
    JoblyApi.token = token;
    console.log(`our new jobly api token is`, JoblyApi.token);

    console.log("decoded token", decodedToken);
    // const username = jwtDecode(token);
    // console.log(username);
  }, [token]);

  async function loginUser(loginInfo) {
    const { username, password } = loginInfo;
    const token = await JoblyApi.login(username, password);
    console.log("token after login", token);
    setToken(token);
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
};

export default JoblyApp;