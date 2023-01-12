import JWTPassport   from "passport-jwt";

import { UserModel } from "../database/allModels";

const  JWTStrategy=JWTPassport.Strategy;

const ExtractJwt=JWTPassport.ExtractJwt;

// authorization  "bearer   someTokenString"

const options={
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:"zomatoApp",
}

export default (passport)=> {
passport.use(
    new JWTStrategy(options,async(jwt__payload,next,done)=>
    {
           try{
                   const doesUserExist=await UserModel.findById(jwt__payload.user);
               if(!doesUserExist) return done(null,false);
               return done(null,doesUserExist);
           }
           catch(error)
           {
              throw new Error(error);
           }
    })
)

}


