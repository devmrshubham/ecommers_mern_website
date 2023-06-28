const User = require("../Model/User");

class UserController {
    addToCart = (id, data) => {
        return new Promise((resolve, rejected) => {
            try {
                User.findByIdAndUpdate({ _id: id }, { cart: data.cart })
                    .then(
                        (success) => {
                            resolve(
                                {
                                    msg: "data Updated successfully",
                                    data: success,
                                    status: 1
                                }
                            )
                        }
                    ).catch(
                        (error) => {
                            rejected(

                                {
                                    msg: "data not updated",
                                    status: 0
                                }
                            )
                        }
                    )
            } catch (error) {
                rejected(
                    {
                        msg: "internal server error",
                        status: 0
                    }
                )

            }
        })
    }

    addCart = (data) => {
        return new Promise((resolve, rejected) => {
            try {
                const Data = new User({ ...data });
                Data.save()
                    .then(
                        (success) => {
                            resolve(
                                {
                                    msg: "data Added successfully",
                                    UserData: Data,
                                    status: 1
                                }
                            )
                        }
                    ).catch(
                        (error) => {
                            rejected(
                                {
                                    msg: "Unable to add Data ",
                                    status: 0
                                }
                            )
                        }
                    )
            } catch (error) {
                rejected(
                    {
                        msg: "Internal server error" + error.message,
                        status: 0

                    }
                )

            }
        })
    }
}



module.exports = { UserController }