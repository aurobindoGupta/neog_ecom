import { useRef } from "react";
import "./forgotPassEmail.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

function ForgotPassEmail(props) {
  const userEmail = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = userEmail.current.value;
    const serviceId = 'service_qbnx6bc';
    const templateId = 'template_vt7o9xb';
    const userId='Z6TkofAulhZWG7GSl';
    const localStorageData = JSON.parse(localStorage.getItem("userData"));
    if(localStorage.getItem("userData")){
      if (localStorageData.email === email ) {
        sendEmail( email, localStorageData.password, serviceId,templateId,userId)
        toast.info("Forgot password is under Construction.", {
          position: "top-left",
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
      else{
        toast.error("Wrong Email, please Signup", {
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
    }  
    else{
      toast.error("Email Error, please Signup", {
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

    console.log("submit", userEmail.current.value);
    props.setShowModal(false);
  };
  //?! this Does not work  as it is clashing with the backennd miragejs
  const sendEmail = (email, password, serviceId, templateId, userId)  => {
    emailjs.send(serviceId, templateId, {
      to: email,
      subject: 'Forgot Password',
      password: password,
      message: 'watup bitches!!'
    }, userId)
    .then((response) => {
      console.log('Email sent:', response.text);
    }, (error) => {
      console.error('Email failed to send:', error);
    });
  };
  return (
    <div className="forgotPassModal" onClick={(e) => e.stopPropagation()}>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="EmailId" ref={userEmail} />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}
export default ForgotPassEmail;
