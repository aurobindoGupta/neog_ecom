import axios from "axios";
import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NavBar from "../../Components/navbar/NavBar";
import { useLoginContext } from "../../context/loginProvider";
import "./loginPg.css";
import ForgotPassEmail from "./forgotPass/ForgotPassEmail";

const LoginPg = () => {
  const userEmailRef = useRef();
  const userPasswordRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const [formError, setFormError] = useState({ email: "", password: "" });
  const [isLoggegIn, setIsLoggedIn] = useLoginContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = userEmailRef.current.value;
    const password = userPasswordRef.current.value;
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
    const localStorageData = JSON.parse(localStorage.getItem("userData"));
    if(localStorage.getItem("userData")){
      if (localStorageData.email === emailId && localStorageData.password === pass) {
        setIsLoggedIn(true);
        navigate("/productPg");
      }
//*clear localStorage if data not matching
      else{
        localStorage.clear()
      }
    }
    else {
      try {
        axios({
          method: "POST",
          url: "api/auth/login",
          data: {
            email: emailId,
            password: pass,
          },
        })
          .then((res) => {
            console.log( res );
            if (res.data.encodedToken) {
              setIsLoggedIn(true);
              localStorage.setItem(
                "userData",
                JSON.stringify(res.data.foundUser)
              );
              localStorage.setItem(
                "token",
                JSON.stringify(res.data.encodedToken)
              );

              navigate("/productPg");
            } else {
              setIsLoggedIn(false);
            }
          })
          .catch((error) => {
            console.log("bad bad");
            console.log(error.response.data.errors);
            toast.error("LogIn Error", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              toastId: uuid(),
            });
          });
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleTestLogin = () => {
    handleLoginApiCall("adarshbalika@gmail.com", "adarshbalika");
  };

  return (
    <div
      className="loginPg"
      onClick={(e) =>
        e.target.className.includes("forgotPassModal") ||
        e.target.className.includes("loginBtn")
          ? ''
          : setShowModal(false)
      }
    >
      {/* <!-- ................BASE CONTAINER............. --> */}
      {showModal && <ForgotPassEmail setShowModal={setShowModal} />}
      <div className={`baseContainer ${showModal ? "isBlur" : ""}`}>
        {/* <!-- ................NAV BAR............. --> */}

        <NavBar searchBar={true} navLinks={true} />
        {/* <!-- ................NAV BAR............. --> */}
        {/* <!-- ................PAGE CONTENT ............................... --> */}

        <div className="page-content loginPgContent">
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
                    ref={userEmailRef}
                    placeholder="jhondoe@gmail.com"
                    className={`input-space full-form input-email ${
                      formError.email ? "vibrate" : null
                    }`}
                    id="input-email"
                    required
                  />
                  <label className="input-label" htmlFor="input-pass">
                    Password
                  </label>
                  <span className="error">{formError.password}</span>
                  <input
                    type="password"
                    ref={userPasswordRef}
                    placeholder="1234567890"
                    maxLength={15}
                    className={`input-space full-form input-pass ${
                      formError.password ? "vibrate" : null
                    }`}
                    id="input-pass"
                    required
                  />
                </div>
                <div className="form-utils">
                  <button
                    className="btn btn-link loginBtn"
                    onClick={() => handleTestLogin()}
                  >
                    Test Login.
                  </button>

                  <button
                    className="btn btn-link loginBtn"
                    onClick={() => setShowModal(!showModal)}
                  >
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
