import dotenv from 'dotenv';
dotenv.config();

import express from  "express"
import mongoose from "mongoose";
import { createServer } from 'node:http';
import { ConnectToServer } from "./controllers/socketmanager.js";
import cors from "cors"

const app= express()

const server=createServer(app)
const io=ConnectToServer(server)


app.set("port",(process.env.PORT || 8000))
app.use(cors())
app.use(express.json({"limit":"40kb"}))
app.use(express.urlencoded({"limit":"40kb", extended:"true"}))


const start = async()=>
{
   app.set("mongo_user")
   const connectionDb= await mongoose.connect(process.env.MONGO_URL)
   console.log(`MongoDb connected to host ${connectionDb.connection.host}`)
   server.listen(app.get("port"),()=>
   {

      console.log("app listening")
   })
}

start()
