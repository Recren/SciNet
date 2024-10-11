import express from "express";
const path = require("path");
const cors = require("cors");

import homepageRoutes from "./routes/homepage-routes";

const app = express();
const port = 5000;

app.use(cors()); // Allow cross-origin requests
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from the server!" }); // Send a JSON response
});

app.use("/homepage", homepageRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
