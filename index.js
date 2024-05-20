import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";

const app = express();

dotenv.config();

//middleware
app.use(express.json());

const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI

try{
    mongoose.connect(URI)
    console.log("Connected to MongoDB");
}
catch(error){
    console.log(error);
}

//routes
app.use("/user",userRoute);

app.listen(PORT, () =>  {
  console.log(`Server is running on port ${PORT}`)
});