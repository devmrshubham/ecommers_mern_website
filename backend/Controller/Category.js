const { error } = require("console")
const Category = require("../Model/Category")
const fs = require("fs")
const path = require("path")


class CategoryController {

    AddData = (data) => {

        return new Promise((resolve, rejected) => {

            try {
                const newData = new Category(
                    {
                        ...data
                    }
                )
                newData.save()
                    .then(
                        (success) => {
                            resolve({
                                msg: "Data Added successfully",
                                category: newData,
                                status: 1
                            })
                        }
                    ).catch(
                        (error) => {
                            rejected({
                                msg: "Unable to Add Data"
                            })
                        }
                    )
            } catch (error) {

                rejected({
                    msg: "Internal server error",
                    status: 0
                })
            }
        })
    }

    GetData = (id) => {


        return new Promise(async (resolve, rejected) => {

            try {

                if (id !== undefined) {

                    let data = await Category.findById({ _id: id })
                    if (data == null) {
                        rejected({
                            msg: "Data not found ",
                            status: 0
                        })
                    } else {
                        resolve({
                            category: data,
                            path: "http://localhost:5000/uploads/category/",
                            status: 1,
                        });
                    }
                } else {

                    let data = await Category.find().sort({
                        _id: "desc"
                    })
                    resolve({
                        category: data,
                        status: 1,
                        path: "http://localhost:5000/uploads/category/"
                    })


                }

            } catch (error) {

                rejected({
                    msg: "Internal server error",
                    status: 0
                })

            }

        })

    }

    DeleteData = (id, imageName) => {
        return new Promise((resolve, rejected) => {
            try {

                Category.deleteOne({ _id: id })
                    .then(
                        (success) => {
                            //image delete  
                            const ImagePath = path.join(__dirname, "../" + "/public/uploads/category/", imageName)
                            fs.unlinkSync(ImagePath)

                            resolve({
                                msg: "Data Deleted successfully",
                                status: 1

                            })
                        }
                    ).catch(
                        (error) => {
                            console.log(error)
                            rejected({
                                msg: "Unable to delete the Data",
                                status: 0
                            })
                        }
                    )
            } catch (error) {
                rejected({
                    msg: "Internal server error",
                    status: 0
                })

            }
        })
    }



    updateData = (id, newData) => {
        return new Promise((resolve, rejected) => {
            Category.updateOne(
                {
                    _id: id
                }, newData
            ).then(
                (success) => {
                    resolve({
                        msg: "Data Updated",
                        status: 1
                    })
                }
            ).catch(
                (error) => {
                    rejected(
                        {
                            msg: "Unable to Upadate the data"
                        }
                    )
                }
            )
        })
    }



}

module.exports = { CategoryController };