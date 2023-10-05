
import { useState, React } from "react";
import { Navigate, useNavigate } from "react-router-dom";

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

  /** Updates loginData state as user types in form */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setLoginData(l => ({ ...l, [name]: value }));
  }

  /** Sends user login info to JoblyApp, resets form, redirects to home page */
  function handleSubmit(evt) {
    evt.preventDefault();
    loginUser(loginData);
    setLoginData(initialLoginFormData);
    navigate("/");
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
    </div>
  );
}

export default Login;