const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const CategoryRouter = require("./router/Category")
const ProductRouter = require("./router/Product")
const UserRouter = require("./router/User")



const app = express();
app.use(express.json())
app.use(cors())
app.use(express.static((__dirname + "/public")))


//router

app.use("/category", CategoryRouter)
app.use("/product", ProductRouter)
app.use("/user", UserRouter)







mongoose.connect("mongodb+srv://shubhamdewangan:1997@cluster0.dhzvpk4.mongodb.net/?retryWrites=true&w=majority")
    .then(
        (success) => {
            console.log("yes database connected")
            app.listen(5000, () => {
                console.log(`this server is running on http://localhost:${5000}`);
            })

        }
    ).catch(
        (error) => {
            console.log("Database not connected", error.message)
        }
    )

