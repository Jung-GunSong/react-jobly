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
          <button>Login</button>
          <button>Sign Up</button>
        </> :
        <h1>Welcome back {username}!</h1>}
    </div>
  );
}

export default HomePage;