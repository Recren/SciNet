import { useState } from "react";
import styles from "../Loginscreen.module.css";
const Loginform = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [listOfErrors, setListOfErrors] = useState({
    username: "",
    password: "",
  });

  //Validation function to ensure inputs are acceptable
  const validate = () => {
    const errors = {};
    if (!loginData.username) {
      errors["username"] = "Please enter your username";
    }
    if (!loginData.password) {
      errors["password"] = "Please enter password";
    }
    return errors;
  };

  //Send signup information to the Server
  const handleSubmit = async (event) => {
    event.preventDefault();
    //Validate user input
    const errorsList = validate();
    //If the size of the object is zero, we have no errors in input
    if (Object.keys(errorsList).length == 0) {
      try {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        });

        //If we get an error response like 400 or 500, throw an error
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }

        const serverResponse = await response.json();
        console.log(serverResponse);
        //Handle sucessful login
      } catch (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
        const errors = {};
        if (errorMessage.includes("Login credentials not found")) {
          errors["username"] = "";
          errors["password"] = "Login credentials invalid";
          //Check the error and render to user (likely dupe key)
          setListOfErrors(errors);
        } else {
          console.log("Server error");
        }
      }
    } else {
      //If we have errors in input, render the errors to the screen
      console.log("Errors detected");
      setListOfErrors(errorsList);
    }
  };

  return (
    <>
      <h1 className={styles.header1}>Login</h1>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.inputFormDiv}>
          <label className={styles.label} for="username">
            Username:
          </label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) =>
              setLoginData({ ...loginData, username: e.target.value })
            }
          />
          {listOfErrors.username && <span>{listOfErrors.username}</span>}
        </div>
        <div className={styles.inputFormDiv}>
          <label className={styles.label} for="password">
            Password:
          </label>
          <input
            className={styles.input}
            type="password"
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          {listOfErrors.password && <span>{listOfErrors.password}</span>}
        </div>
        <button className={styles.btn} type="submit">
          Log in
        </button>
      </form>
    </>
  );
};
export default Loginform;
