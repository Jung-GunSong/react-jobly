import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import RouteList from "./RouteList";
import { useEffect, useState } from "react";
import userContext from "./userContext";
import JoblyApi from "./api";
import jwtDecode from "jwt-decode";

/**
 * JoblyApp: Renders NavBar component and Routes
 *
 * JoblyApp => {NavBar, RouteList}
 *
 */
function JoblyApp() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  /**Decodes jwt token, gets user information every time token is updated, and
   * sets user state
   */
  useEffect(function () {
    if (JoblyApi.token) {
      const { username } = jwtDecode(token);

      async function getUser() {
        const userData = await JoblyApi.getUser(username);
        setUser(userData);
      }
      getUser();
    }

  }, [token]);


  /** Gets token from backend, sets token for user based on user info from
   * login form, logs in user*/
  async function loginUser(loginInfo) {
    const { username, password } = loginInfo;
    try{
      const token = await JoblyApi.login(username, password);

    }catch(err){
      setUser({error: err[0].message});
    }

    JoblyApi.token = token;
    setToken(token);
  }

  /** Resets token and user info, logs out user */
  function logOutUser() {
    setToken("");
    setUser({});
    JoblyApi.token = "";
  }

  /** Gets new user info from register form, gets token for user from backend,
   * sets token state
  */
  async function registerUser(registerInfo) {
    const { username, password, firstName, lastName, email } = registerInfo;
    try{

      const token = await JoblyApi.register(
        username, password,
        firstName, lastName, email
      );

    }catch(err){
      setUser({errors:err[0].message});
    }

    JoblyApi.token = token;
    setToken(token);
  }

  return (
    <div>
      <BrowserRouter>
        <userContext.Provider value={{username: user.username, errors: user.errors }}>
          <NavBar user={user} logOutUser={logOutUser} />
          <RouteList loginUser={loginUser} registerUser={registerUser} />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default JoblyApp;