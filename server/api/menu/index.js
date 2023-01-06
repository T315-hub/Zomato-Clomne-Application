import express  from "express";
import { MenuModel } from "../../database/allModels";

const Router= express.Router();

/**
 * Route :   /list/:_id
 * Desc  :   Get all list of menu based on restaurant id 
 * params:   id
 * Access:   Public
 * Method:   GET
 */

Router.get("/list/:_id",async(req,res)=>
{
    try{
        const {_id}=req.params;
        const menus= await MenuModel.findById(_id);
        if(!menu) return res.status(404).json({error:"No menu present for this restaurant id"});
         return res.json({menus});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

/**
 * Route :   /list/:_id
 * Desc  :   Get all list of menu based on restaurant id 
 * params:   id
 * Access:   Public
 * Method:   GET
 */
   


export default Router;