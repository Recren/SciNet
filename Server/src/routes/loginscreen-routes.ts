import { Router } from "express";
const pool = require("../db");

const router = Router();

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
