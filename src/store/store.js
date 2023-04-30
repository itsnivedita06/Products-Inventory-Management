import { configureStore } from "@reduxjs/toolkit";
import { LoginSlice } from "./slices/LoginSlice";
import { ProductsSlice } from "./slices/ProductSlice";

const store = configureStore({
    reducer: {
        user: LoginSlice.reducer,
        products: ProductsSlice.reducer,
    },
})

export default store;