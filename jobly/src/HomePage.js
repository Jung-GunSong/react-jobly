import { Link } from "react-router-dom";
import userContext from "./userContext";
import { useContext } from "react";

/**
 * HomePage: renders page at "/"
 *
 *
 */
function HomePage() {
  const username = useContext(userContext);

  return (
    <div>
      <h1>Jobly</h1>
      {!username ?
        <>

            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
        </> :
        <h1>Welcome back {username}!</h1>}
    </div>
  );
}

export default HomePage;