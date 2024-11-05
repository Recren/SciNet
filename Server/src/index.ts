import express from "express";
import homepageRoutes from "./routes/homepage-routes";
import loginscreenRoutes from "./routes/loginscreen-routes";

const path = require("path");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors()); // Allow cross-origin requests
app.use(express.json()); //Middleware to parse JSON

app.use("/homepage", homepageRoutes);
app.use("/login", loginscreenRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
