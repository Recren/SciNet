import { Router } from "express";
const pool = require("../db");

const router = Router();

//To log a user in
router.post("/", async (req, res) => {
  const { username, password } = req.body;

  try {
    const { rows } = await pool.query(
      "Select username FROM users WHERE username = $1 AND password = $2",
      [username, password]
    );

    //Retrieved user sucessfully
    if (rows.length > 0) {
      res.status(200).send({ message: `${rows[0]} successfully logged in` });
    } else {
      res.status(404).send({ message: `Login credentials not found` });
    }
  } catch (err: unknown) {
    //Throw error
    if (err instanceof Error) {
      console.error(err.message);
      res.status(500).send({ message: err.message }); //Send the error message in the response
    } else {
      console.error("An unknown error occurred", err);
      res.status(500).send("Server Error");
    }
  }
});

//To sign a user up
router.post("/signup", async (req, res) => {
  const { username, password, firstname, lastname, email } = req.body;

  //If signup is sucessful
  try {
    //Insert form into database
    await pool.query(
      "INSERT INTO users (username, password, first_name, last_name, email) VALUES ($1,$2,$3,$4,$5)",
      [username, password, firstname, lastname, email]
    );
    res.status(201).send({ message: "User sucessfully created!" }); // Send the result rows as JSON
  } catch (err: unknown) {
    //Throw error
    if (err instanceof Error) {
      console.error(err.message);
      res.status(500).send({ message: err.message }); //Send the error message in the response
    } else {
      console.error("An unknown error occurred", err);
      res.status(500).send("Server Error");
    }
  }
});

export default router;
