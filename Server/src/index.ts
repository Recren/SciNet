import express from "express";
import homepageRoutes from "./routes/homepage-routes";

const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

app.use("/homepage", homepageRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
