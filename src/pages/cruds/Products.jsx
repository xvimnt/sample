import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "../../style/components"
// Sections
import Footer from "../../components/Sections/Footer"
import TopMainNavbar from "../../components/Nav/TopMainNavbar";
import Table from "../../components/Elements/Table";
import AdminSidebar from "../../components/Nav/AdminSidebar";
// Data
import { getAllProducts, addProduct } from "../../data/productSlice"

export default function Products() {

  const state = useSelector(state => state)
  const { products } = state

  const [sidebarOpen, toggleSidebar] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  // States 
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [detail, setDetail] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')

  // Controls
  const idControl = () => {
    return (
      <input className="form-control" type='number' value={id} onChange={(e) => setId(e.target.value)} />
    )
  }
  const nameControl = () => {
    return (
      <input className="form-control" type='text' value={name} onChange={(e) => setName(e.target.value)} />
    )
  }
  const detailControl = () => {
    return (
      <textarea className="form-control" type='text' value={detail} onChange={(e) => setDetail(e.target.value)} />
    )
  }
  const imageControl = () => {
    return (
      <input className="form-control" type="file" name="file" value={image} onChange={(e) => setImage(e.target.value)} />
    )
  }
  const priceControl = () => {
    return (
      <input className="form-control" type='number' value={price} onChange={(e) => setPrice(e.target.value)} />
    )
  }

  const fields = [
    {
      column: 'id',
      title: 'ID',
      control: idControl,
      state: id,
      setState: setId,
      showTable: true,
    },
    {
      column: 'name',
      title: 'Nombre',
      control: nameControl,
      state: name,
      setState: setName,
      showTable: true,
    },
    {
      column: 'detail',
      title: 'Detalle',
      control: detailControl,
      state: detail,
      setState: setDetail,
      showTable: true,
    },
    {
      column: 'price',
      title: 'Precio',
      control: priceControl,
      state: price,
      setState: setPrice,
      showTable: true,
    },
  ]

  return (
    <>
      <TopMainNavbar />
      <AdminSidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Wrapper>
        {products && <Table tableName="Productos" rows={products} fields={fields} addItem={() => dispatch(addProduct(fields))}/>}
      </Wrapper>
      <Footer />
    </>
  )
}