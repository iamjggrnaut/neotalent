import { useState } from "react";
import { ServiceFunctions } from "../../service/serviceFunctions";
import '../AuthPage/auth-page.style.css'
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="auth-page">
        <h1>Sign Up</h1>
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
              ServiceFunctions.handleRegister(email, password, setError)
            }
          >
            Sign Up
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="centered">
            <p>Already have an account? <Link to={'/auth'}>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
