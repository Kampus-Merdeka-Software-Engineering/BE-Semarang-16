
import express from "express";
import courseRoute from "./routes/courseRoute.js";


const PORT = process.env.PORT || 3350;
const app = express();

app.use(express.json());

// Route
app.get("/", (req, res) => {
  res.send("Hello World Guys");
});

app.use(courseRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
