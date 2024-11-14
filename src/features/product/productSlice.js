import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../../data/productData";

const initialState = {
    products: productData,
    cart: [],
    netTotal: 0
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let index = state.cart.findIndex((item) => {
                return item.id === action.payload.id
            })

            if (index !== -1) {
                state.cart[index].quantity++
            } else {
                state.cart.push(action.payload)
            }
        },
        incProduct: (state, action) => {
            state.cart[action.payload].quantity++
        },
        decProduct: (state, action) => {
            if (state.cart[action.payload].quantity > 1) {
                state.cart[action.payload].quantity--
            } else {
                state.cart.splice(action.payload, 1);
            }
        },
        removeFromCart: (state, action) => {
            state.cart.splice(action.payload, 1)
        },
        getNetTotal: (state) => {
            let netTotal = 0
            state.cart.map((item, idx) => {
                let { price, quantity } = item
                let total = price * quantity
                netTotal += total
            })
            state.netTotal = netTotal
        }
    }
})

export const { addToCart, incProduct, decProduct, removeFromCart, getNetTotal } = productSlice.actions

export default productSlice.reducer