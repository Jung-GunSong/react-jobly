import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const initialSignUpData ={username:"", password:"",
                          firstName: "", lastName:"",
                          email:""}

function SignUp({registerUser}){
  const [signUpData, setSignUpData] = useState(initialSignUpData);
  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setSignUpData(s => ({ ...s, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    registerUser(signUpData)
    setSignUpData(initialSignUpData);
    navigate("/");
    // return <Navigate to="/" replace={true} />;
  }
  // return <Navigate to="/" replace={true} />;
  return (
    <div className="SignUp-container">
      <h1>Sign Up</h1>
      <form className="SignUp" onSubmit={handleSubmit}>
        username:
        <input
          name="username"
          value={signUpData.username}
          onChange={handleChange}
        />
        password:
        <input
          name="password"
          value={signUpData.password}
          onChange={handleChange}
        />
        first name:
        <input
          name="firstName"
          value={signUpData.firstName}
          onChange={handleChange}
        />
        last name:
        <input
          name="lastName"
          value={signUpData.lastName}
          onChange={handleChange}
        />
        email:
        <input
          name="email"
          value={signUpData.email}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignUp;