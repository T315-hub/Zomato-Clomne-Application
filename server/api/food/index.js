import express from 'express';
import { FoodModel } from '../../database/allModels';

const Router=express.Router();

/**
 * Route :   /:_id
 * Desc  :   Get food based on id
 * params:   _id
 * Access:   Public
 * Method:   GET
 */

Router.get("/:_id",async (req,res)=>
{
    try{
         const {_id}=req.params;
         const foods= await FoodModel.findById(_id);
         return res.json({status:"success",food:foods});
    }catch(error)
    {
        return res.status(500).json({message: error.message});
    }
})


/**
 * Route :   /r/:_id
 * Desc  :   Get all food based on particular restaurant
 * params:   _id
 * Access:   Public
 * Method:   GET
 */

Router.get("/r/:_id",async (req,res)=>
{   
    try
    {
        const {_id}=re.params;
        const foods=FoodModel.findById({
            restaurant:_id,
        })
        return res.json({ foods });
    } 
    
    catch(error)
      {
           return res.status(500).json({message: error.message});
      }
})



/**
 * Route :   /c/category
 * Desc  :   Get all food based on particular category
 * params:   category
 * Access:   Public
 * Method:   GET
 */


Router.get("/c/category",async (req,res)=>
{  
    try{
       const {category}=req.params;
      const foods=FoodModel.find({
        category:{$regex:category,$options:"i"},
      });
      if(!foods)
      {
          return res.status(404).json({error:`No Food found with this ${category}`});
      }
      return res.json({ foods });
    }
    catch(error)
    {
        return res.status(500).json({message: error.message});
    }

})

export default Router;