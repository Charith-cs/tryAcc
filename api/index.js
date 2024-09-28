import express from "express";
import cors from "cors"
import mailRoute from "./route/mailRoute.js"


const app = express();
app.use(express.json());

app.use(cors());

app.use("/api/check" , mailRoute);


app.listen(5000 , () => {
    console.log("Server is running");
});