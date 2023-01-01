import express from "express";
import dotenv from "dotenv"; 
import connectDB from "../server/database/connection";
import { connect } from "mongoose";
const port=8000;
dotenv.config();
const zomato=express();
zomato.use(express.json());

zomato.get("/",(req,res)=>
{
    res.json({
        message:"server is start"
    })
})

zomato.listen(port,()=>
{
    
    connectDB()
    .then(()=>
    {
        console.log(`server is running at ${port} ||| `);
        console.log("database is connected.......");
    })
    .catch((error)=>
    {
        console.log("server is running but database is not connected ");
        console.log(error);
    })
})