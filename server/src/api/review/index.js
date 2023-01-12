import  express from  "express";
import passport from "passport";
import { ReviewModel } from "../../database/allModels";

const Router= express.Router();


/**
 * Route :   /resId
 * Desc  :   Get all the reviews for a particular restaurant id 
 * params:   resId
 * Access:   Public
 * Method:   GET
 */

Router.get("/resId",async (req,res)=>
{
     try{
          const {resId}=req.params;
          const reviews=await ReviewModel.findById({restaurants:resId}).sort({
            createAt:-1
           
          });
          return res.json({reviews});
     }
     catch(error)
     {
          return res.status(404).json({message: error.message});
     }
})


/**
 * Route :   /new
 * Desc  :   add new food/restaurant review and rating  
 * params:   resId
 * Access:   Private
 * Method:   POST
 */

Router.post("/new",passport.authenticate("jwt", { session: false }),async (req,res)=>
{
    try{
           const {_id}=req.user;
           const {reviewData}=req.body;
           const newReview= await ReviewModel.create({...reviewData,user:_id});
           return res.json({newReviews:newReview});
    }
    catch(error){return res.status(404).json({message: error.message})};
});

/**
 * Route :   /delete/:id
 * Desc  :   delete a review with using id 
 * params:   id
 * Access:   Private
 * Method:   DELETE
 */

Router/delete("/delete/:id",passport.authenticate("jwt", { session: false }),async (req,res)=>
{
     try{  
        const{user}=req;
          const {id}=req.params;
          const deletedReview =  await ReviewModel.findOneAndDelete({
            _id:id,
            user:user._id,
          });
          if(!deletedReview){return res.status(404).json({message:"reviews not found "})};
          return res.json({message:"successfully deleted review",reviews:deletedReview})
     }
     catch(error)
     {
         return res.status(404).json({message: error.message});
     }
})



export default Router;