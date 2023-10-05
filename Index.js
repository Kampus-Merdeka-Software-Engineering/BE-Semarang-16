
import express from "express";
import UserRoute from "./route/UserRoute.js";
import courseRoute from "./route/courseRoute.js"
import cors from "cors";

const PORT =  8080
const app = express();


app.use(express.json());
app.use(cors());


app.use(courseRoute);
app.use(UserRoute);


app.listen(8080, () => {
console.log(`Server is running on port ${PORT}`);
});



