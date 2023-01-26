import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const getAllProducts = createAsyncThunk("fetch-all-products", async () => {

    const response = await axios({
        url: "/products",
        baseURL: "https://9e1dpdmq26.execute-api.us-east-1.amazonaws.com/Production",
        method: "get",
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    })

    return response.data
})

export const addProduct = createAsyncThunk("add-products", async (item) => {

    const response = await axios({
        url: "/products",
        baseURL: "https://9e1dpdmq26.execute-api.us-east-1.amazonaws.com/Production",
        method: "put",
        body: item,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    })

    return response.data
})

const productSlice = createSlice({
    name: "products",
    initialState: { data: [], fetchStatus: "" },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.data = action.payload
            state.fetchStatus = "success"
        }).addCase(getAllProducts.pending, (state) => {
            state.fetchStatus = "loading"
        }).addCase(getAllProducts.rejected, (state) => {
            state.fetchStatus = "error"
        }).addCase(addProduct.fulfilled, (state, action) => {
            const item = {}
            action.payload.forEach(element => {
                item[element.column] = element.state
                element.setState('')
            });
            state.data = [...state.data, item]
            state.fetchStatus = "success"
        }).addCase(addProduct.pending, (state) => {
            state.fetchStatus = "loading"
        }).addCase(addProduct.rejected, (state) => {
            state.fetchStatus = "error"
        })
    }
})

export default productSlice