import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import RouteList from "./RouteList";
import { useEffect, useState } from "react";
import userContext from "./userContext";
import JoblyApi from "./api";
import jwtDecode from "jwt-decode";
// import { useJwt } from "react-jwt";
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



  useEffect(function () {
    if (JoblyApi.token) {
      const { username } = jwtDecode(token);
      console.log(username);
      async function getUser() {
        const userData = await JoblyApi.getUser(username);
        console.log(userData);
        setUser(userData);
      }
      getUser();
    }


  }, [token]);

  async function loginUser(loginInfo) {
    const { username, password } = loginInfo;
    const token = await JoblyApi.login(username, password);
    console.log("token after login", token);
    JoblyApi.token = token;
    setToken(token);
  }

  function logOutUser() {
    setToken("");
    setUser({});
    JoblyApi.token = "";
  }

  async function registerUser(registerInfo) {
    const { username, password, firstName, lastName, email } = registerInfo;
    const token = await JoblyApi.register(
      username, password,
      firstName, lastName, email
    );
    JoblyApi.token = token;
    setToken(token);
  }

  return (
    <div>
      <BrowserRouter>
        <userContext.Provider value={user.username}>
          <NavBar user={user} logOutUser={logOutUser} />
          <RouteList loginUser={loginUser} registerUser={registerUser} />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default JoblyApp;