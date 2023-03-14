import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/navbar/NavBar";
import { useLoginContext } from "../../context/loginProvider";
import "./signUpPg.css";
const SignUpPg = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [formError, setFormError] = useState({ email: "", password: "" });
  const [isLoggegIn, setIsLoggedIn] = useLoginContext();
  const navigate = useNavigate();
  return (
    <div className="signUpPg">
      {/* <!-- ................BASE CONTAINER............. --> */}
      <div className="baseContainer">
        {/* <!-- ................NAV BAR............. --> */}

        <NavBar searchBar={true} loginPg={true} />
        {/* <!-- ................NAV BAR............. --> */}
        {/* <!-- ................PAGE CONTENT ............................... --> */}

        <div className="page-content">
          <div className="signUp-Modal">
            <div className="modal-container">
              <div className="modal-title">
                <p className="fw-bold fs-L">SignUp</p>
              </div>
              <div className="form-input">
                <div className="input-details">
                  <label className="input-label" htmlFor="first-name">
                    First Name
                  </label>
                  <input
                    type="name"
                    id="first-name"
                    className="input-space full-form "
                  />
                  <label className="input-label" htmlFor="last-name">
                    Last Name
                  </label>
                  <input
                    type="name"
                    id="last-name"
                    className="input-space full-form "
                  />

                  <label className="input-label" htmlFor="input-email">
                    Email
                  </label>
                  {/* <span className="error">{formError.email}</span> */}
                  <input
                    type="email"
                    placeholder="jhondoe@gmail.com"
                    className={`input-space full-form input-email ${
                      formError.email ? "vibrate" : null
                    }`}
                    id="input-email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                  <label className="input-label" htmlFor="input-pass">
                    Password
                  </label>
                  {/* <span className="error">{formError.password}</span> */}
                  <input
                    type="password"
                    placeholder="1234567890"
                    maxLength={15}
                    className={`input-space full-form input-pass ${
                      formError.password ? "vibrate" : null
                    }`}
                    id="input-pass"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="form-utils">
                  <div className="util-input">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <button className="btn btn-link loginBtn">
                    Forgot Password?
                  </button>
                </div>
              </div>
              <div className="modal-btn">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={(e) => {
                    // handleSubmit(e);
                  }}
                >
                  Sign Up
                </button>
                <button
                  className="btn btn-link"
                  onClick={() => navigate("/loginPg")}
                >
                  Already have an account
                </button>
              </div>
            </div>
          </div>

          {/* <!-- ................PAGE CONTENT ............................... --> */}
          {/* <!-- ................FOOTER ............................... --> */}

          {/* <!-- ................FOOTER ............................... --> */}
        </div>
        {/* <!-- ................BASE CONTAINER............. --> */}
      </div>
    </div>
  );
};
export default SignUpPg;
