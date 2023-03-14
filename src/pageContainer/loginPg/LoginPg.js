import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/navbar/NavBar";
import { useLoginContext } from "../../context/loginProvider";
import "./loginPg.css";
const LoginPg = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [formError, setFormError] = useState({ email: "", password: "" });
  const [isLoggegIn, setIsLoggedIn] = useLoginContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      setFormError({
        email: "input Feild Can not be empty",
        password: "input Feild Can not be empty",
      });
    } else if (email && !password) {
      if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        setFormError({ email: "", password: "input Feild Can not be empty" });
      } else {
        setFormError({
          email: "Invalid Email",
          password: "input Feild Can not be empty",
        });
      }
    } else if (!email && password) {
      if (password.length >= 6) {
        setFormError({ email: "input Feild Can not be empty", password: "" });
      } else {
        setFormError({
          email: "input Feild Can not be empty",
          password: "Password length cant be less than 6",
        });
      }
    } else {
      if (
        email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
        password.length >= 6
      ) {
        setFormError({
          email: "",
          password: "",
        });
        handleLoginApiCall(email, password);
      } else if (
        !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
        password.length >= 6
      ) {
        setFormError({ email: "Invalid Email", password: "" });
      } else if (
        email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
        password.length < 6
      ) {
        setFormError({
          email: "",
          password: "Password length cant be less than 6",
        });
      } else {
        setFormError({
          email: "Invalid Email",
          password: "Password length cant be less than 6",
        });
      }
    }
    console.log({ email, password });
  };
  const handleLoginApiCall = async (emailId, pass) => {
    console.log("ymomomom", emailId, pass);
    const resp = axios({
      method: "POST",
      url: "api/auth/login",
      data: {
        email: emailId,
        password: pass,
      },
    }).then((res) => {
      if (res.data.encodedToken) {
        console.log(res.data.encodedToken);
        setIsLoggedIn(true);
        navigate("/productPg");
      }
      else{
        setIsLoggedIn(false);
      }
    });
  };
  const handleTestLogin=()=>{
   handleLoginApiCall('adarshbalika@gmail.com','adarshbalika');
  }
  return (
    <div className="loginPg">
      {/* <!-- ................BASE CONTAINER............. --> */}
      <div className="baseContainer">
        {/* <!-- ................NAV BAR............. --> */}

        <NavBar searchBar={true} loginPg={true} />
        {/* <!-- ................NAV BAR............. --> */}
        {/* <!-- ................PAGE CONTENT ............................... --> */}

        <div className="page-content">
          <div className="login-Modal">
            <div className="modal-container">
              <div className="modal-title">
                <p className="fw-bold fs-L">Login</p>
              </div>
              <div className="form-input">
                <div className="input-details">
                  <label className="input-label" htmlFor="input-email">
                    Email
                  </label>
                  <span className="error">{formError.email}</span>
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
                  <span className="error">{formError.password}</span>
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
                  <button className="btn btn-link loginBtn" onClick={()=>handleTestLogin()}>Test Login.</button>

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
                    handleSubmit(e);
                  }}
                >
                  Login
                </button>
                <button
                  className="btn btn-link"
                  onClick={() => navigate("/signUpPg")}
                >
                  Create New Account
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
export default LoginPg;
