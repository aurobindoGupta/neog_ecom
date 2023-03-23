import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/navbar/NavBar";
import { useLoginContext } from "../../context/loginProvider";
import { debounce } from "../../utils/debounce";
import "./signUpPg.css";
const SignUpPg = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({ email: "", password: "" });
  const [isLoggegIn, setIsLoggedIn] = useLoginContext();
  const navigate = useNavigate();

  const handleUserData = (inputData) => {
    // console.log(inputData);
    if (inputData.firstName) {
      setUserData({ ...userData, firstName: inputData.firstName });
    } else if (inputData.lastName) {
      setUserData({ ...userData, lastName: inputData.lastName });
    }
    else if (inputData.email) {
      setUserData({ ...userData, email: inputData.email });
    }
    else if (inputData.password) {
      setUserData({ ...userData, password: inputData.password });
    }
  };
  console.log({ userData });
  return (
    <div className="signUpPg">
      {/* <!-- ................BASE CONTAINER............. --> */}
      <div className="baseContainer">
        {/* <!-- ................NAV BAR............. --> */}

        <NavBar searchBar={true} navLinks={true} />
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
                    placeholder="Jhon"
                    className="input-space full-form "
                    onChange={debounce(
                      (e) => handleUserData({ firstName: e.target.value }),
                      500
                    )}
                  />
                  <label className="input-label" htmlFor="last-name">
                    Last Name
                  </label>
                  <input
                    type="name"
                    placeholder="Doe"
                    id="last-name"
                    className="input-space full-form "
                    onChange={debounce(
                      (e) => handleUserData({ lastName: e.target.value }),
                      500
                    )}
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
                    onChange={debounce(
                      (e) => handleUserData({ email: e.target.value }),
                      500
                    )}
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
                    onChange={debounce(
                      (e) => handleUserData({ password: e.target.value }),
                      2000
                    )}
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
