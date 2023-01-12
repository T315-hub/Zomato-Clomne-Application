import express  from "express";
import { ImageModel, MenuModel } from "../../database/allModels";
import { validateId } from "../../validation/common.validation";

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
        await validateId(req.params);
        const menus= await MenuModel.findById(_id);
        if(!menu) return res.status(404).json({error:"No menu present for this restaurant id"});
         return res.json({menus});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

/**
 * Route :   /image/:_id
 * Desc  :   Get all image  of menu based on menu id 
 * params:    _id
 * Access:   Public
 * Method:   GET
 */
   
Router.get("/image/:_id",async (req,res)=>{
    try{
          const {_id}=req.params;
          await validateId(req.params);
          const menuImages = ImageModel.findById(_id);
          return res.json({menuImages});
    }
    catch(error)
    {
         res.status(500).json({message: error.message});
    }
})

export default Router;