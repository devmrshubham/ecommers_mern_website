const Product = require("../Model/Product");
const path = require("path")
const fs = require("fs")

class ProductController {

    AddData = (data) => {
        return new Promise((resolve, rejected) => {
            try {
                const product = new Product(
                    {
                        name: data.name,
                        description: data.description,
                        original_price: data.o_price,
                        discounted_price: data.d_price,
                        category_id: data.category_id,
                        image: data.image
                    }
                )
                product.save()
                    .then(
                        (success) => {
                            resolve(
                                {
                                    msg: "Data Added Successfully",
                                    status: 1
                                }
                            )
                        }
                    ).catch(
                        (error) => {
                            rejected(
                                {
                                    msg: "Unable to add Data",
                                    status: 0
                                }
                            )
                        }
                    )
            } catch (error) {
                rejected(
                    {
                        msg: "Internal server error",
                        status: 0
                    }
                )
            }
        })
    }

    getData = (id) => {

        return new Promise(async (resolve, rejected) => {
            try {
                if (id !== undefined) {
                    let data = await Product.findById({ _id: id });
                    if (data == undefined) {
                        rejected(
                            {
                                msg: "Data not Found",
                                status: 0

                            }
                        )
                    } else {
                        resolve(
                            {
                                product: data,
                                status: 1,
                                path: "http://localost:5000/uploads/product/"
                            }
                        )
                    }
                } else {
                    let data = await Product.find().sort({ _id: "desc" });
                    resolve(
                        {
                            product: data,
                            status: 1,
                            path: "http://localhost:5000/uploads/product/"
                        }
                    )
                }
            } catch (error) {
                rejected(
                    {
                        msg: "Internal server Error",
                        status: 0
                    }
                )
            }
        })
    }

    categoryProduct = (cid) => {

        return new Promise(async (resolve, rejected) => {

            try {

                let data = await Product.find(
                    {
                        category_id: cid
                    }
                )

                resolve(
                    {
                        status: 1,
                        product: data,
                        path: "http://localhost:5000/uploads/product/"
                    }
                )
            } catch (error) {
                rejected(
                    {
                        status: 0,
                        error: error.message + "Internal server error"

                    }
                )
            }
        })
    }

    DeleteData = (id, ImgName) => {
        return new Promise((resolve, rejected) => {
            try {
                Product.deleteOne({ _id: id })
                    .then(
                        (success) => {
                            const imagePath = path.join(__dirname, "../" + "/public/uploads/product/", ImgName);
                            fs.unlinkSync(imagePath)

                            resolve(
                                {
                                    msg: "Data Deleted successfully",
                                    status: 1
                                }
                            )
                        }
                    ).catch(
                        (error) => {
                            rejected(
                                {
                                    msg: "Unable to Delete Data",
                                    status: 0
                                }
                            )
                        }
                    )
            } catch (error) {
                rejected(
                    {
                        msg: "Internal server error",
                        status: 0
                    }
                )
            }
        })
    }
}


module.exports = { ProductController }