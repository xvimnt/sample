import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cartSlice from "../data/cartSlice"
import { Wrapper } from "../style/components"
// Sections
import Footer from "../components/Sections/Footer"
import TopMainNavbar from "../components/Nav/TopMainNavbar";

export default function Cart() {
    const {cartProductIds} = useSelector((state) => state.cart)
    const [products, setProducts] = useState([]);
    
    const { removeFromCart, clearAllItems } = cartSlice.actions
    const dispatch = useDispatch()

    const loadProductsData = async () => {
        // Query the API Gateway
        const response = await fetch("https://9e1dpdmq26.execute-api.us-east-1.amazonaws.com/Production/products")
        let data = await response.json()
        
        // Assign the response data to our state variable
        setProducts(data)
    }
    
    useEffect(() => {
        // Load the menu links data from the API Gateway 
        loadProductsData();
    }, [])
    
    const cartProductData = products.filter((product) => cartProductIds.includes(product.id))

    return (
        <>
            <TopMainNavbar />
            <Wrapper>
                <div className="cart">
                    {cartProductData.length > 0 && (<div className="mt-1 p-2">
                        <h3 className="header">Items in cart</h3>
                        {cartProductData.map((product) => (
                            <div key={product.id} className="row">
                                <img className="w-25 h-25 center-block" src={product.imageUrl} alt="product" />

                                <div className="mt-1">
                                    <h4>{product.name}</h4>
                                    <p className="text-truncate">{product.detail}</p>
                                    <button className="btn btn-primary" onClick={() => dispatch(removeFromCart(product.id))}>
                                        <i className="bi bi-trash-fill" /> Remove Item
                                    </button>
                                </div>
                            </div>
                        ))}

                        <footer className="text-center">
                            <button className="btn btn-primary" onClick={() => dispatch(clearAllItems())}>CHECKOUT</button>
                        </footer>
                    </div> )}

                    {cartProductData.length < 1 && (<div className="text-center empty-cart">
                        <i className="bi bi-cart3" />
                        <p>Your cart is empty.</p>
                        <p>You have not added any item to your cart.</p>
                    </div> )}
                </div>
            </Wrapper>
            <Footer />
        </>
    )
}