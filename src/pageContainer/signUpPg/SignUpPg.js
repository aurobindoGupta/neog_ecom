import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import NavBar from "../../Components/navbar/NavBar";
import { useLoginContext } from "../../context/loginProvider";
import { debounce } from "../../utils/debounce";
import "./signUpPg.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { users } from "../../backend/db/users";
const SignUpPg = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState(true);
  const [isLoggegIn, setIsLoggedIn] = useLoginContext();
  const navigate = useNavigate();

  const handleUserData = (inputData) => {
    // console.log(inputData);
    if (inputData.firstName) {
      setUserData({ ...userData, firstName: inputData.firstName });
    } else if (inputData.lastName) {
      setUserData({ ...userData, lastName: inputData.lastName });
    } else if (inputData.email) {
      setUserData({ ...userData, email: inputData.email });
    } else if (inputData.password) {
      setUserData({ ...userData, password: inputData.password });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !userData.email ||
      !userData.password ||
      !userData.firstName ||
      !userData.lastName
    ) {
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
      if (!userData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
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
      if (userData.password.length < 6) {
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
      if (!userData.firstName.match(/^[a-zA-Z ]{2,30}$/)) {
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
      if (!userData.lastName.match(/^[a-zA-Z]{2,30}$/)) {
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
        userData.firstName.match(/^[a-zA-Z ]{2,30}$/) &&
        userData.lastName.match(/^[a-zA-Z]{2,30}$/) &&
        userData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
        userData.password.length >= 6
      ) {
        handleSignupApiCall(
          userData.firstName,
          userData.lastName,
          userData.email,
          userData.password
        );
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
      }).then((res) => {
        console.log("haiaihdasd",res.data)
        localStorage.setItem("userData",JSON.stringify(res.data.createdUser))
        localStorage.setItem("token",JSON.stringify(res.data.encodedToken))

        navigate("/productPg")
      });
    } catch (error) {
      console.log({error});
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
                    placeholder="Jhon"
                    className="input-space full-form "
                    onChange={debounce(
                      (e) => handleUserData({ firstName: e.target.value }),
                      300
                    )}
                  />
                  <label className="input-label" htmlFor="last-name">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    id="last-name"
                    className="input-space full-form "
                    onChange={debounce(
                      (e) => handleUserData({ lastName: e.target.value }),
                      300
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
                      300
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
                      300
                    )}
                    required
                  />
                </div>
              </div>
              <div className="modal-btn">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={debounce((e) => handleSubmit(e), 500)}
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
