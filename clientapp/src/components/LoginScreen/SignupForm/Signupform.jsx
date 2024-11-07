import { useState } from "react";
import styles from "../Loginscreen.module.css";
const Signupform = () => {
  const [signupData, setSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
  });

  const [listOfErrors, setListOfErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
  });

  //Validation function to ensure inputs are acceptable
  const validate = () => {
    const errors = {};
    if (!signupData.firstname) {
      errors["firstname"] = "First name required";
    }
    if (!signupData.lastname) {
      errors["lastname"] = "Last name required";
    }
    if (!signupData.email) {
      errors["email"] = "Email is required";
    }
    if (!signupData.username) {
      errors["username"] = "Please create a username";
    }
    if (!signupData.password) {
      errors["password"] = "Please create a password";
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
        const response = await fetch("http://localhost:5000/login/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signupData),
        });

        //If we get an error response like 400 or 500, throw an error
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }

        const serverResponse = await response.json();
        console.log(serverResponse);
      } catch (error) {
        const errorMessage = error.message;

        const errors = {};
        if (errorMessage.includes("duplicate key")) {
          if (errorMessage.includes("users_email_key")) {
            errors["email"] = "Email has already been registered";
          } else if (errorMessage.includes("users_username_key")) {
            errors["username"] = "Username has already been taken";
          }
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
      <h1 className={styles.header1}>Signup</h1>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.inputFormDiv}>
          <label className={styles.label} for="firstname">
            First name:
          </label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) =>
              setSignupData({ ...signupData, firstname: e.target.value })
            }
          />
          {listOfErrors.firstname && <span>{listOfErrors.firstname}</span>}
        </div>
        <div className={styles.inputFormDiv}>
          <label className={styles.label} for="lastname">
            Last name:
          </label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) =>
              setSignupData({ ...signupData, lastname: e.target.value })
            }
          />
          {listOfErrors.lastname && <span>{listOfErrors.lastname}</span>}
        </div>
        <div className={styles.inputFormDiv}>
          <label className={styles.label} for="email">
            Email address:
          </label>
          <input
            className={styles.input}
            type="email"
            onChange={(e) =>
              setSignupData({ ...signupData, email: e.target.value })
            }
          />
          {listOfErrors.email && <span>{listOfErrors.email}</span>}
        </div>
        <div className={styles.inputFormDiv}>
          <label className={styles.label} for="username">
            Username:
          </label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) =>
              setSignupData({ ...signupData, username: e.target.value })
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
              setSignupData({ ...signupData, password: e.target.value })
            }
          />
          {listOfErrors.password && <span>{listOfErrors.password}</span>}
        </div>
        <button className={styles.btn} type="submit">
          Sign up
        </button>
      </form>
    </>
  );
};

export default Signupform;
