import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "../style/components"
// Sections
import Footer from "../components/Sections/Footer"
import TopMainNavbar from "../components/Nav/TopMainNavbar";
// Data
import cartSlice from "../data/cartSlice"

export default function Home() {
  const {cartProductIds} = useSelector((state) => state.cart)
  const {addToCart, removeFromCart } = cartSlice.actions
  const dispatch = useDispatch()

  const [products, setProducts] = useState([]);

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

  return (
    <>
      <TopMainNavbar />
      <Wrapper>
        <div className="container product-catalogue">
          <div className="row">
            {products.map((product) => {
              return (
                <div className="mb-2 col-md-4" key={product.id}>
                  <div className="card h-100">
                    <img className="h-100 w-100 p-2 center-block" src={product.imageUrl} alt={product.name} />

                    <div className="card-body text-center">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">${product.price}</p>
                        {!cartProductIds.includes(product.id) && (<button className="btn btn-primary" onClick={() => dispatch(addToCart(product.id))}>Add to cart</button>)}
                        {cartProductIds.includes(product.id) && (<button className="btn btn-danger" onClick={() => dispatch(removeFromCart(product.id))}>Remove from cart</button>)}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  )
}