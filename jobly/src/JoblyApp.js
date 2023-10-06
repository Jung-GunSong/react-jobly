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
 * State:
 * -user: contains data about the user including personal data and applications completed
 * ex: {useranme:...}
 * -token: jwt token used for authentication
 * ex:"fhwuioehfuw..."
 *
 * JoblyApp => {NavBar, RouteList} => Page => Panel
 *
 */
function JoblyApp() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  /**Decodes jwt token, gets user information every time token is updated, and
   * sets user state
   */
  useEffect(function () {

    if (token) {
      const { username } = jwtDecode(token);
      JoblyApi.token = token;
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

      const token = await JoblyApi.login(username, password);
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

      const token = await JoblyApi.register(
        username,
        password,
        firstName,
        lastName,
        email
      );
      JoblyApi.token = token;
      setToken(token);

  }

  return (
    <div>
      <BrowserRouter>
        <userContext.Provider value={{ username: user?.username }}>
          <NavBar user={user} logOutUser={logOutUser} />
          <RouteList loginUser={loginUser} registerUser={registerUser} />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default JoblyApp;