import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper } from "../style/components"
// Sections
import Footer from "../components/Sections/Footer"
import TopMainNavbar from "../components/Nav/TopMainNavbar";
// Data
import cartSlice from "../data/cartSlice"
import { getAllProducts } from "../data/productSlice"

export default function Cart() {

    const state = useSelector(state => state)
    const { cart, products } = state

    const { removeFromCart, clearAllItems } = cartSlice.actions
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    const cartProductData = products.data.filter((product) => cart.cartProductIds.includes(product.id))

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
                    </div>)}

                    {cartProductData.length < 1 && (<div className="text-center empty-cart">
                        <i className="bi bi-cart3" />
                        <p>Your cart is empty.</p>
                        <p>You have not added any item to your cart.</p>
                    </div>)}
                </div>
            </Wrapper>
            <Footer />
        </>
    )
}