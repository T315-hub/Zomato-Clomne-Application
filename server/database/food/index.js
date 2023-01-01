import mongoose from "mongoose";

const FoodSchema= new mongoose.schema(
{
  name:{type:String,required:true},
  description:{type:string,required:true},
  isVeg:{type:Boolean,required:true},
  isContainsEggs:{type:Boolean,required:true},
  category:{type:string,required:true},
  photos :{
    type:mongoose.Type.ObjectId,
    ref:"images",
  },
  price:{type:Number, default:250,required:true},
  addOns:[
    {
        type:mongoose.Type.ObjectId,
        ref:"foods",
    }
  ],
  restaurant:{
    type:mongoose.Type.ObjectId,
    ref:"restaurants",
    required:true,
  },

},
{
    timestamps:true,
}
);
export const FoodModel=mongoose.schema("foods",FoodSchema);