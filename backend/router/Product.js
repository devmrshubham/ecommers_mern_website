const express = require("express");
const { ProductController } = require("../Controller/Product");
const Router = express.Router();
const fileupload = require("express-fileupload");
const { getRamdomImageName, getDistination } = require("../Helper")

Router.post("/", fileupload({ createParentPath: true }), (req, res) => {
    const image = req.files.image;
    const imageArr = image.name.split(".")
    const ext = imageArr[imageArr.length - 1]
    const allowedExt = ["png", "jpeg", "gif", "jpg", "svg"]
    const ImageName = getRamdomImageName(image.name)
    const ImageDestination = getDistination("product", ImageName)

    if (allowedExt.includes(ext.toLowerCase())) {
        try {
            image.mv(ImageDestination)
            const response = new ProductController().AddData(
                {
                    image: ImageName,
                    ...req.body

                }
            )
            response.then(
                (success) => {
                    res.send(success)
                }
            ).catch(
                (error) => {
                    res.send(error)
                }
            )
        } catch (error) {
            res.send(
                {
                    msg: "Internal server Error",
                    stutus: 0
                }
            )
        }
    } else {
        res.send(
            {
                msg: "this file is not allowed ,only  image file are allowed",
                status: 0
            }
        )
    }
});

Router.get("/:id?", (req, res) => {

    const response = new ProductController().getData(req.params.id);

    response.then(
        (success) => {
            res.send(success)
        }
    ).catch(
        (error) => {
            res.send(error)
        }
    )
});

Router.get("/category/:cid", (req, res) => {

    const response = new ProductController().categoryProduct(req.params.cid);

    response.then(
        (success) => {
            res.send(success)
        }
    ).catch(
        (error) => {
            res.send(error)
        }
    )
});

Router.delete("/:id/:ImgName", (req, res) => {

    try {
        const response = new ProductController().DeleteData(req.params.id, req.params.ImgName);
        response.then(
            (success) => {
                res.send(success)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
    } catch (error) {
        res.send(error)
    }
});



module.exports = Router;