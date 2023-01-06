import express from "express";
import dotenv from "dotenv"; 
import connectDB from "../server/database/connection";
import { connect } from "mongoose";
import passport from "passport";
import   session from "express-session";
import PrivateRouteConfig   from "./config/route.config";
import Auth from "./api/auth";
import Food from  "./api/food";
import Restaurant from   "./api/restaurant";
import User   from "./api/user";
import Menu from "./api/menu"; 
const port=3000;
dotenv.config();
const zomato=express();

PrivateRouteConfig(passport);
zomato.use(express.json());

zomato.use(session({secret:"zomatoApp"}));
zomato.use(passport.initialize());
zomato.use(passport.session());

zomato.get("/",(req,res)=>
{
    res.json({
        message:"server is start"
    })
})

http://localhost:4000/auth/signup
zomato.use("/auth",Auth);
zomato.use("/food",Food);
zomato.use("/restaurant",Restaurant);
zomato.use("/user",User);
zomato.use("/menu",Menu);
zomato.listen(port,()=>
{
    
    connectDB()
    .then(()=>
    {   
        console.log("*******************************");
        console.log(`***** Server is Running at ${port} ||| *******`);
        console.log(" ****** Database is Connected.......");
        console.log("_________________________________");
    })
    .catch((error)=>
    {
        console.log("Server is Running but Database is Not Connected ");
        console.log(error);
    })
})