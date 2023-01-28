import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const getAllProducts = createAsyncThunk("get-all-products", async () => {

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

export const addProduct = createAsyncThunk("add-product", async (item) => {

    const newObject = {}

    item.forEach(element => {
        newObject[element.column] = element.state
    });

    const response = await axios({
        url: "/products",
        baseURL: "https://9e1dpdmq26.execute-api.us-east-1.amazonaws.com/Production",
        method: "put",
        data: newObject,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    })

    return response.data
})


export const updateProduct = createAsyncThunk("update-product", async (item) => {

    const newObject = {}

    item.forEach(element => {
        newObject[element.column] = element.state
    });

    const response = await axios({
        url: `/products/${newObject.id}`,
        baseURL: "https://9e1dpdmq26.execute-api.us-east-1.amazonaws.com/Production",
        method: "put",
        data: newObject,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    })

    return response.data
})

export const deleteProduct = createAsyncThunk("delete-product", async (item) => {

    const response = await axios({
        url: `/products/${item.id}`,
        baseURL: "https://9e1dpdmq26.execute-api.us-east-1.amazonaws.com/Production",
        method: "delete",
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
            // Fills the initial table
            state.data = action.payload
            state.getStatus = "success"
        }).addCase(getAllProducts.pending, (state) => {
            state.getStatus = "loading"
        }).addCase(getAllProducts.rejected, (state) => {
            state.getStatus = "error"
        }).addCase(addProduct.fulfilled, (state, action) => {
            // Adds the new element to the existing table
            const newObject = {}
            action.meta.arg.forEach(element => {
                newObject[element.column] = element.state
                element.setState('')
            })
            state.data = [...state.data, newObject]
            state.addStatus = "success"
        }).addCase(addProduct.pending, (state) => {
            state.addStatus = "loading"
        }).addCase(addProduct.rejected, (state) => {
            state.addStatus = "error"
        }).addCase(deleteProduct.fulfilled, (state, action) => {
            // removes the element from existing table
            state.data = state.data.filter(el => el.id !== action.meta.arg.id)
            state.deleteStatus = "success"
        }).addCase(deleteProduct.pending, (state) => {
            state.deleteStatus = "loading"
        }).addCase(deleteProduct.rejected, (state) => {
            state.deleteStatus = "error"
        }).addCase(updateProduct.fulfilled, (state, action) => {
            // update the element from existing table
            const newObject = {}
            action.meta.arg.forEach(element => {
                newObject[element.column] = element.state
                element.setState('')
            })
            // Adding and removing
            state.data = state.data.filter(el => el.id !== newObject.id)
            state.data = [...state.data,newObject]
            state.updateStatus = "success"
        }).addCase(updateProduct.pending, (state) => {
            state.updateStatus = "loading"
        }).addCase(updateProduct.rejected, (state) => {
            state.updateStatus = "error"
        })
    }
})

export default productSlice