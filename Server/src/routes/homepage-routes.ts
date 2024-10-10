import { Router } from "express";
import axios from "axios";
require("dotenv").config();
const getToken = require("../tokenRetriever");
const router = Router();

//Base route to the api of the game database
const http = axios.create({
  baseURL: "https://api.igdb.com/v4",
});

//Each time we make a request, we need to retreive the token
router.get("/", async (req, res) => {
  try {
    const token = await getToken();
    // console.log("Token " + token);
    res.send("Welcome to the homepage");
  } catch (error) {
    console.error("Error in the route:", error);
    res.status(500).send("An error occurred while processing your request.");
  }
});

export default router;
