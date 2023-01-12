import AWS from "aws-sdk";
import multer from "multer";
import express from "express";

import { ImageModel } from "../../database/allModels";

import { s3upload } from "../utils/s3";

const Router = express.Router();

// configure multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

/**
 * Route :   /:_id
 * Desc  :   get image based on ids
 * params:   id
 * Access:   Public
 * Method:   GET
 */

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const image = await ImageModel.findById(_id);
    return res.json({ image });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});

/*
 **
 * Route :   /
 * Desc  :  upload given image  to s3bucket in aws and in also database
 * params:   no
 * Access:   Public
 * Method:   POST
 */

Router.post("/",upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    const bucketOptions = {
      Bucket: "zomato-clone",
      Key: file.originalname,
      Body: file.buffer,
      contentType: file.mimetype,
      ACL: "public-read", // acl means access control list
    };

    const uploadImage = await s3upload(bucketOptions); // upload the image in s3 bucket in aws

    const dbUploadImage = await ImageModel.create({
      images: [
        {
          Location: uploadImage.Location,
        },
      ],
    });
    return res.status(200).json({ uploadImage });
    return res.status(200).json({dbUploadImage});
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});

export default Router;
