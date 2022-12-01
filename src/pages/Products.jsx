import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "../style/components"
// Sections
import Footer from "../components/Sections/Footer"
import TopMainNavbar from "../components/Nav/TopMainNavbar";
import Table from "../components/Elements/Table";
import AdminSidebar from "../components/Nav/AdminSidebar";
// Data
import {fetchAllProducts } from "../data/productSlice"


export default function Products() {

    const state = useSelector(state => state)
    const {products} = state

    const [sidebarOpen, toggleSidebar] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllProducts())
      }, [dispatch])

      // columns in the table that'll be showed
      const titles = ['id','name', 'detail', 'price']

  return (
    
    <>
      <TopMainNavbar />
      <AdminSidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}/>
      <Wrapper>
        <Table tableName="Products" list={products} titles={titles}/>
      </Wrapper>
      <Footer />
    </>
  )
}