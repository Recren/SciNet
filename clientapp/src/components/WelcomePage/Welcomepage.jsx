import React from "react";
import { Link } from "react-router-dom";
import styles from "./Welcomepage.module.css";
const Welcomepage = () => {
  return (
    <div className={styles.container}>
      <h1>SciNet</h1>
      <h2>Learn to Love Learning</h2>
      <Link to="/login" className={styles.btn}>
        Learn Now
      </Link>
    </div>
  );
};

export default Welcomepage;
