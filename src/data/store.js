import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"
import productSlice from "./productSlice"
import userSlice from "./userSlice"

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products: productSlice.reducer,
        user: userSlice.reducer,
    }
})

export default store
