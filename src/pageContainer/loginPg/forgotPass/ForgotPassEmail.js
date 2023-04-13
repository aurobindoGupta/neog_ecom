import { useRef } from "react";
import "./forgotPassEmail.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function ForgotPassEmail(props) {
  const userEmail = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

   
    console.log("submit", userEmail.current.value);
    props.setShowModal(false);
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
