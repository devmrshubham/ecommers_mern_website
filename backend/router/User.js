const express = require("express");
const { UserController } = require("../Controller/User")
const Router = express.Router();

Router.get("/add-cart/:userId", (req, res) => {
    const response = new UserController().addToCart(req.params.userId, req.body);
    response
        .then(
            (success) => {
                res.send(success)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
})
Router.post("/add-cart", (req, res) => {
    const response = new UserController().addCart(req.body);
    response
        .then(
            (success) => {
                res.send(success)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
})


module.exports = Router