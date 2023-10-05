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
    const { username } = jwtDecode(JoblyApi.token);
    console.log(username);
    async function getUser() {
      const userData = await JoblyApi.getUser(username);
      console.log(userData);
      setUser(userData);
    }
    getUser();

  }, [token]);

  async function loginUser(loginInfo) {
    const { username, password } = loginInfo;
    const token = await JoblyApi.login(username, password);
    console.log("token after login", token);
    JoblyApi.token = token;
    setToken(token);
  }

  function resetUser() {
    setUser({});
    setToken("");
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
      <button onClick={resetUser}>reset user (temp)</button>
    </div>
  );
};

export default JoblyApp;