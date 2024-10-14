import { Router } from "express";
require("dotenv").config();
const router = Router();

router.get("/", async (req, res) => {
  try {
    res.send("Hi");
  } catch (error) {
    console.error("Error in the route:", error);
    res.status(500).send("An error occurred while processing your request.");
  }
});

export default router;
