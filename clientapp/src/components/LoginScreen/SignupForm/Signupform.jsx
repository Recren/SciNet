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

  //Send signup inform to the Server
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });

      const serverResponse = await response.json();
      console.log(serverResponse);
    } catch (error) {
      console.error("Error: ", error);
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
        </div>
        <div className={styles.inputFormDiv}>
          <label className={styles.label} for="email">
            Email address:
          </label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) =>
              setSignupData({ ...signupData, email: e.target.value })
            }
          />
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
        </div>
        <div className={styles.inputFormDiv}>
          <label className={styles.label} for="password">
            Password:
          </label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) =>
              setSignupData({ ...signupData, password: e.target.value })
            }
          />
        </div>
        <button className={styles.btn} type="submit">
          Sign up
        </button>
      </form>
    </>
  );
};

export default Signupform;
