import {  useState } from "react";
import { ServiceFunctions } from "../../service/serviceFunctions";
import "./auth-page.style.css";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  return (
    <div className="auth-page">
      <h1>Login</h1>
      <div className="auth-form">
        <div className="input-block">
          <label htmlFor="">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-block">
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="align-center">
          <button
            className="primary-btn"
            onClick={() =>
              ServiceFunctions.handleLogin(email, password, setError)
            }
          >
            Login
          </button>
        </div>
        {error && error.length > 0 && <p className="error-message">{error}</p>}
        <div className="centered">
          <p>
            Don't have an account? <Link to={"/signup"}>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
