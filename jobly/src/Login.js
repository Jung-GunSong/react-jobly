
import { useState, React, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import userContext from "./userContext";

const initialLoginFormData = { username: "", password: "" };

/**
 * Login: Renders login form for user to input username/password
 *
 * State:
 * - loginData: {username:..., password: ...}
 *
 * Props:
 * - loginUser: function that sends user login info to JoblyApp
 */
function Login({ loginUser }) {
  const [loginData, setLoginData] = useState(initialLoginFormData);
  const navigate = useNavigate();
  const { errors } = useContext(userContext);

  /** Updates loginData state as user types in form */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setLoginData(l => ({ ...l, [name]: value }));
  }

  /** Sends user login info to JoblyApp, resets form, redirects to home page */
  async function handleSubmit(evt) {
    evt.preventDefault();
    await loginUser(loginData);
    setLoginData(initialLoginFormData);
    console.log("errors on handleSubmit for login", errors);
    if (!errors) {
      navigate("/");
    }
    console.log("checkpoint 2");
  }

  return (
    <div className="Login-container">
      <h1>Log In</h1>
      <form className="Login" onSubmit={handleSubmit}>
        username:
        <input
          name="username"
          value={loginData.name}
          onChange={handleChange}
        />
        password:
        <input
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      {/* {errors.length > 0 && <ErrorMessage errorMessages={errors} />} */}
    </div>
  );
}

export default Login;