const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,

        },
        email: {
            type: String
        },
        cart: {
            type: Object
        }
    }
)

const UserCart = mongoose.model("UserCart", UserSchema);
module.exports = UserCart;