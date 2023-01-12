

import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const s3Bucket= new AWS.S3({
    accessKeyId:process.env.AWS_s3_ACCESS_KEY,
    secretAccessKey:process.env.AWS_s3_SECRET_KEY,
    region:"ap-south-1",
});

export const s3upload=(options) =>
{  
    // when we use async and await it show warning that why  we used promise 
    return new  Promise((resolve, reject) =>
    
         s3Bucket.upload(options,(error,data)=>{
              if(error) return reject(error);
              return resolve(data);
         })
    )
};
