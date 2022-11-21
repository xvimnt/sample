import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "../style/components"
// Sections
import Footer from "../components/Sections/Footer"
import TopMainNavbar from "../components/Nav/TopMainNavbar";
// Data
import cartSlice from "../data/cartSlice"
import {fetchAllProducts } from "../data/productSlice"
import ChatBot from "../components/Elements/ChatBot";

export default function Products() {
  const state = useSelector(state => state)
  const {cart, products} = state

  const {addToCart, removeFromCart } = cartSlice.actions
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  return (
    <>
      <TopMainNavbar />
      <Wrapper>
        <div className="container product-catalogue">
          <div className="row">
            {products.data.map((product) => {
              return (
                <div className="mb-2 col-md-4" key={product.id}>
                  <div className="card h-100">
                    <img className="h-50 w-100 p-2 center-block" src={product.imageUrl} alt={product.name} />
                    <div className="card-body text-center">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">${product.price}</p>
                        {!cart.cartProductIds.includes(product.id) && (<button className="btn btn-primary" onClick={() => dispatch(addToCart(product.id))}>Add to cart</button>)}
                        {cart.cartProductIds.includes(product.id) && (<button className="btn btn-danger" onClick={() => dispatch(removeFromCart(product.id))}>Remove from cart</button>)}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <ChatBot />
      </Wrapper>
      <Footer />
    </>
  )
}