import { useState } from "react";
import styles from "./Loginform.module.css";
const Loginform = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The login data is: ${JSON.stringify(loginData)}`);
  };

  return (
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
      </div>
      <div className={styles.inputFormDiv}>
        <label className={styles.label} for="password">
          Password:
        </label>
        <input
          className={styles.input}
          type="text"
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
      </div>
      <button className={styles.btn} type="submit">
        Log in
      </button>
    </form>
  );
};
export default Loginform;
