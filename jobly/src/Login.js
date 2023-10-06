
import { useState, React } from "react";
import {  useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";


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
  const [errors, setErrors] = useState(null)

  const navigate = useNavigate();


  /** Updates loginData state as user types in form */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setLoginData(l => ({ ...l, [name]: value }));
  }

  /** Sends user login info to JoblyApp, resets form, redirects to home page
   * if error, updates loginData state and shows errorMessage component
   */
  async function handleSubmit(evt) {
    evt.preventDefault();

    try{
      await loginUser(loginData);
      setLoginData(initialLoginFormData);
      navigate("/")
    }catch(err){
      setErrors(err[0].message)
      // TODO: errors can be its own state
    }


  }

  // issue: cannot create user.errors, before navigate needs to happen
  // login happens, then error collected in JoblyApp
  // in JoblyApp, if errors, collected, then redirect to login page
  // else, redirect to login

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
      {errors && <ErrorMessage errorMessages={errors} />}
    </div>
  );
}

export default Login;