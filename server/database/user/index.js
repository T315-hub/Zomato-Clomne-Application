import mongoose from "mongoose";

const UserSchema=new mongoose.Schema(
{
   fullName:{type:String,required:true},
   email:{type:String,required:true},
   password:{type:String},
   address:[{details:{type:String},for:{type:String}}],
   phoneNumber:[{type:number}],
},
{
     timestamps:true,  
},
);

// attachments
UserSchema.methods.generateJwtToken=function() {
  return jwt.sign({user:this._id.toString},"zomatoApp");
};
  
  // helper functions
  UserSchema.statics.findByEmailAndPhone = async () => {};
  UserSchema.statics.findByEmailAndPassword = async () => {};







export const UserModel=mongoose.Schema("users",UserSchema);