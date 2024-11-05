import React from "react";
import { useState } from "react";
import styles from "./Loginscreen.module.css";
import Loginform from "./LoginForm/Loginform";
import SignupForm from "./SignupForm/Signupform";
const Loginscreen = () => {
  const [formType, setFormType] = useState("loginForm");

  const handleFormTypeChange = (event) => {
    setFormType(event.target.value);
  };

  const btnStyles = {
    margin: "10px",
    width: "150px",
    height: "40px",
    fontSize: "14px",
    fontWeight: "bold",
  };
  return (
    <div className={styles.container}>
      {formType === "loginForm" ? (
        <>
          <Loginform />{" "}
          <button
            style={btnStyles}
            onClick={handleFormTypeChange}
            value={"signupForm"}
          >
            Create an account instead
          </button>
        </>
      ) : (
        <>
          <SignupForm />
          <button
            style={btnStyles}
            onClick={handleFormTypeChange}
            value={"loginForm"}
          >
            Login instead
          </button>
        </>
      )}
    </div>
  );
};

export default Loginscreen;
