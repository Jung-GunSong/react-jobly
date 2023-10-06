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
 * - isLoggedIn: boolean to determine if user is logged in or not
 *
 * JoblyApp => {NavBar, RouteList} => Page => Panel
 *
 */
function JoblyApp() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  /**Decodes jwt token, gets user information every time token is updated, and
   * sets user state
   */
  useEffect(function () {
    let storedToken = localStorage.getItem("token");
    if (storedToken) {
      const { username } = jwtDecode(storedToken);

      JoblyApi.token = storedToken;

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
    localStorage.setItem("token", token);
    let storedToken = localStorage.getItem("token");
    setToken(storedToken);
    setIsLoggedIn(true);
  }

  /** Resets token and user info, logs out user */
  function logOutUser() {
    setToken("");
    setUser({});
    JoblyApi.token = "";
    localStorage.clear();
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
          <RouteList
            loginUser={loginUser}
            registerUser={registerUser}
            isLoggedIn={isLoggedIn}
          />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default JoblyApp;