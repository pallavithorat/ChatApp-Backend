import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import { app, server } from "./SocketIO/server.js";
import messageRoute from "./routes/message.route.js";


// const app = express();

dotenv.config();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

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
app.use("/api/user",userRoute);
app.use("/api/message", messageRoute);

server.listen(PORT, () =>  {
  console.log(`Server is running on port ${PORT}`)
});