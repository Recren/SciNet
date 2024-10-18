import React from "react";
import styles from "./Loginscreen.module.css";
import Loginform from "./LoginForm/Loginform";
const Loginscreen = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header1}>Login</h1>
      <Loginform />
    </div>
  );
};

export default Loginscreen;
