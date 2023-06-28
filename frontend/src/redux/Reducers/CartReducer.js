import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
const lsCartData = localStorage.getItem('cart');

const initialState = {
    data: lsCartData !== null ? JSON.parse(lsCartData) : []
};

const addToCart = createAsyncThunk(
    "add-to-cart",
    async (data, { getState }) => {

        const currentState = getState();
        console.log(currentState);
        let cartData = [
            ...currentState.cart.data,
            { ...data, qty: 1 }
        ]
        console.log("cartdata", cartData);
        axios({
            method: "get",
            url: "http://localhost:5000/user/add-cart/64990b3cb10ab22d6a691642",
            data: {
                cart: cartData
            }
        })
        return cartData;

    }
)

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // addToCart: (state, action) => {
        //     state.data = [
        //         ...state.data,
        //         { ...action.payload, qty: 1 }
        //     ]
        //     localStorage.setItem("cart", JSON.stringify(state.data));
        //     return state;
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(
            addToCart.fulfilled,
            (state, action) => {
                console.log("payload", action.payload);
                state.data = action.payload
            }
        )
    }
})
// Action creators are generated for each case reducer function

export default cartSlice.reducer
export { addToCart }