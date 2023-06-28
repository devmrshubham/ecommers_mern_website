const express = require("express");
const Router = express.Router();
const { CategoryController } = require("../Controller/Category.js");
const path = require("path");
const fileupload = require("express-fileupload");
const { getRamdomImageName, getDistination } = require("../Helper.js");
const fs = require("fs");


//only image file uploaded
Router.post("/", fileupload({ createParentPath: true }), (req, res) => {
  const image = req.files.image;
  const imageArr = image.name.split(".");
  const ext = imageArr[imageArr.length - 1];
  const allowedExt = ["png", "jpeg", "jpg", "gif", "svg"];

  const imageName = getRamdomImageName(image.name);
  const imageDestination = getDistination("category", imageName);
  if (allowedExt.includes(ext.toLowerCase())) {
    try {
      image.mv(imageDestination);
      const response = new CategoryController().AddData({
        image: imageName,
        ...req.body,
      });
      response
        .then((success) => {
          res.send(success);
        })
        .catch((error) => {
          res.send(error);
        });
    } catch (error) {
      res.send({
        msg: "Unable to add Data",
        status: 0,
      });
    }
  } else {
    res.send({
      msg: "this file is not allowed ,only  image file are allowed",
      status: 0,
    });
  }
});

Router.get("/:id?", (req, res) => {
  const response = new CategoryController().GetData(req.params.id);
  response
    .then((success) => {
      res.send(success);
    })
    .catch((error) => {
      res.send(error);
    });
});

Router.delete("/:id/:imageName", (req, res) => {
  const response = new CategoryController().DeleteData(
    req.params.id,
    req.params.imageName
  );
  response
    .then((success) => {
      res.send(success);
    })
    .catch((error) => {
      res.send(error);
    });
});

Router.post(
  "/update/:id",
  fileupload({ createParentPath: true }),
  (req, res) => {
    let imageName = req.body.old_image_name;

    const image = req.files.image;

    try {
      if (image !== undefined) {
        imageName = getRamdomImageName(image.name);
        const destination = getDistination("category", imageName);

        image.mv(destination);
        const imagePath = path.join(__dirname, "../", "public/uploads/category/", req.body.old_image_name
        );
        fs.unlinkSync(imagePath);
      }
      const newData = {
        name: req.body.name,
        slug: req.body.slug,
        image: imageName,
      };

      new CategoryController()
        .updateData(req.params.id, newData)
        .then((success) => {
          res.send(success);
        })
        .catch((error) => {
          res.send(error);
        });
    } catch (error) {
      console.log(error);
      return res.send({
        msg: "Internal server error",
        status: 0,
      });
    }
  }
);

module.exports = Router;
