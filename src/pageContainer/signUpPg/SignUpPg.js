import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import NavBar from "../../Components/navbar/NavBar";
import { useLoginContext } from "../../context/loginProvider";
import { debounce } from "../../utils/debounce";
import "./signUpPg.css";
import axios from "axios";
const SignUpPg = () => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const userFirstName = useRef();
  const userLastName = useRef();
  const userEmail = useRef();
  const userPassword = useRef();

  const [formError, setFormError] = useState(true);
  const [isLoggegIn, setIsLoggedIn] = useLoginContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userFirstName.current.value);
    console.log(userLastName.current.value);
    const email = userEmail.current.value;
    const password = userPassword.current.value;
    const firstName = userFirstName.current.value;
    const lastName = userLastName.current.value;

    if (!email || !password || !firstName || !lastName) {
      toast.warn("Input Feilds can not be empty", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        toastId: uuid(),
      });
    } else {
      if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        toast.error("Invalid Email", {
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
      }
      if (password.length < 6) {
        toast.error("Password length should be atleast 6 characters", {
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
      }
      if (!firstName.match(/^[a-zA-Z ]{2,30}$/)) {
        toast.error("Invalid First Name", {
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
      }
      if (!lastName.match(/^[a-zA-Z]{2,30}$/)) {
        toast.error("Invalid Last Name", {
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
      }
      if (
        firstName.match(/^[a-zA-Z ]{2,30}$/) &&
        lastName.match(/^[a-zA-Z]{2,30}$/) &&
        email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
        password.length >= 6
      ) {
        handleSignupApiCall(firstName, lastName, email, password);
      }
    }
  };
  const handleSignupApiCall = async (firstName, lastName, emailId, pass) => {
    console.log("ymomomom", firstName, lastName, emailId, pass);
    try {
      axios({
        method: "POST",
        url: "api/auth/signup",
        data: {
          firstName: firstName,
          lastName: lastName,
          email: emailId,
          password: pass,
        },
      })
        .then((res) => {
          console.log("haiaihdasd", res.data);
          localStorage.setItem(
            "userData",
            JSON.stringify(res.data.createdUser)
          );
          localStorage.setItem("token", JSON.stringify(res.data.encodedToken));
          setIsLoggedIn(true);
          navigate("/productPg");
        })
        .catch((error) => {
          console.log("bad bad");
          console.log(error.response.data.errors);
          toast.error("SignIn Error", {
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
  };
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
                    type="text"
                    id="first-name"
                    name="firstName"
                    autoComplete="nope"
                    ref={userFirstName}
                    placeholder="Jhon"
                    className="input-space full-form "
                  />
                  <label className="input-label" htmlFor="last-name">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    autoComplete="nope"
                    name="lastName"
                    ref={userLastName}
                    id="last-name"
                    className="input-space full-form "
                  />

                  <label className="input-label" htmlFor="input-email">
                    Email
                  </label>
                  {/* <span className="error">{formError.email}</span> */}
                  <input
                    type="email"
                    name="email"
                    ref={userEmail}
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
                  {/* <span className="error">{formError.password}</span> */}
                  <input
                    type="password"
                    name="password"
                    placeholder="1234567890"
                    ref={userPassword}
                    maxLength={15}
                    className={`input-space full-form input-pass ${
                      formError.password ? "vibrate" : null
                    }`}
                    id="input-pass"
                    required
                  />
                </div>
              </div>
              <div className="modal-btn">
                <button
                  className="btn btn-primary signup-btn"
                  type="submit"
                  disabled={btnDisabled}
                  onClick={(e) => {
                    debounce(handleSubmit(e), 500);
                    setBtnDisabled(true);
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
