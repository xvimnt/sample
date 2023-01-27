import React, { useState } from "react";
import { Wrapper } from "../style/components"
// Sections
import Footer from "../components/Sections/Footer"
import TopMainNavbar from "../components/Nav/TopMainNavbar";
import AdminSidebar from "../components/Nav/AdminSidebar";
// Icons 
import { MdShoppingCart, MdStarRate, MdComment, MdAccountBalanceWallet, MdContentCut } from 'react-icons/md'

export default function Home() {

  const [sidebarOpen, toggleSidebar] = useState(false);

  return (
    <>
      <TopMainNavbar />
      <AdminSidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Wrapper paddingLeft="100px">
        <div className="page-breadcrumb">
          <div className="row align-items-center">
            <div className="col-6">
              <nav aria-label="breadcrumb">
              </nav>
              <h1 className="mb-0 fw-bold">Dashboard</h1>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row my-2">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div className="d-md-flex">
                    <div>
                      <h4 className="card-title">Resumen de Ordenes</h4>
                      <h6 className="card-subtitle">Pendientes</h6>
                    </div>
                  </div>
                  <div className="amp-pxl mt-4 overflow-auto h-50">
                    <div className="card">
                      <div className="card-body">
                        This is some text within a card body.
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        This is some text within a card body.
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        This is some text within a card body.
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        This is some text within a card body.
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        This is some text within a card body.
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        This is some text within a card body.
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        This is some text within a card body.
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        This is some text within a card body.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Estadisticas Semanales</h4>
                  <h6 className="card-subtitle">Promedio de Ventas</h6>
                  <div className="mt-5 pb-3 d-flex align-items-center">
                    <span className="btn btn-primary btn-circle d-flex align-items-center">
                      <MdShoppingCart />
                    </span>
                    <div className="ms-3">
                      <h5 className="mb-0 fw-bold">Mas Vendido</h5>
                      <span className="text-muted fs-6">Johnathan Doe</span>
                    </div>
                    <div className="ms-auto">
                      <span className="badge bg-light text-muted">+68%</span>
                    </div>
                  </div>
                  <div className="py-3 d-flex align-items-center">
                    <span className="btn btn-warning btn-circle d-flex align-items-center">
                      <MdStarRate />
                    </span>
                    <div className="ms-3">
                      <h5 className="mb-0 fw-bold">Mejor Cliente</h5>
                      <span className="text-muted fs-6">MaterialPro Admin</span>
                    </div>
                    <div className="ms-auto">
                      <span className="badge bg-light text-muted">+68%</span>
                    </div>
                  </div>
                  <div className="py-3 d-flex align-items-center">
                    <span className="btn btn-success btn-circle d-flex align-items-center">
                      <MdComment />
                    </span>
                    <div className="ms-3">
                      <h5 className="mb-0 fw-bold">Mas Comentados</h5>
                      <span className="text-muted fs-6">Ample Admin</span>
                    </div>
                    <div className="ms-auto">
                      <span className="badge bg-light text-muted">+68%</span>
                    </div>
                  </div>
                  <div className="py-3 d-flex align-items-center">
                    <span className="btn btn-info btn-circle d-flex align-items-center">
                      <MdAccountBalanceWallet />
                    </span>
                    <div className="ms-3">
                      <h5 className="mb-0 fw-bold">Top Budgets</h5>
                      <span className="text-muted fs-6">Sunil Joshi</span>
                    </div>
                    <div className="ms-auto">
                      <span className="badge bg-light text-muted">+15%</span>
                    </div>
                  </div>

                  <div className="pt-3 d-flex align-items-center">
                    <span className="btn btn-danger btn-circle d-flex align-items-center">
                      <MdContentCut />
                    </span>
                    <div className="ms-3">
                      <h5 className="mb-0 fw-bold">Best Designer</h5>
                      <span className="text-muted fs-6">Nirav Joshi</span>
                    </div>
                    <div className="ms-auto">
                      <span className="badge bg-light text-muted">+90%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-2">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-md-flex">
                    <div>
                      <h4 className="card-title">Top Selling Products</h4>
                      <h5 className="card-subtitle">Overview of Top Selling Items</h5>
                    </div>
                    <div className="ms-auto">
                      <div className="dl">
                        <select className="form-select shadow-none">
                          <option value="0" selected>Monthly</option>
                          <option value="1">Daily</option>
                          <option value="2">Weekly</option>
                          <option value="3">Yearly</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table mb-0 table-hover align-middle text-nowrap">
                      <thead>
                        <tr>
                          <th className="border-top-0">Products</th>
                          <th className="border-top-0">License</th>
                          <th className="border-top-0">Support Agent</th>
                          <th className="border-top-0">Technology</th>
                          <th className="border-top-0">Tickets</th>
                          <th className="border-top-0">Sales</th>
                          <th className="border-top-0">Earnings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="m-r-10"><button
                                className="btn btn-circle d-flex btn-info text-white">EA</button>
                              </div>
                              <div className="">
                                <h4 className="m-b-0 font-16">Elite Admin</h4>
                              </div>
                            </div>
                          </td>
                          <td>Single Use</td>
                          <td>John Doe</td>
                          <td>
                            <label className="badge bg-danger">Angular</label>
                          </td>
                          <td>46</td>
                          <td>356</td>
                          <td>
                            <h5 className="m-b-0">$2850.06</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="m-r-10"><button
                                className="btn btn-circle d-flex btn-orange text-white">MA</button>
                              </div>
                              <div className="">
                                <h4 className="m-b-0 font-16">Monster Admin</h4>
                              </div>
                            </div>
                          </td>
                          <td>Single Use</td>
                          <td>Venessa Fern</td>
                          <td>
                            <label className="badge bg-info">Vue Js</label>
                          </td>
                          <td>46</td>
                          <td>356</td>
                          <td>
                            <h5 className="m-b-0">$2850.06</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="m-r-10"><button
                                className="btn btn-circle d-flex btn-success text-white">MP</button>
                              </div>
                              <div className="">
                                <h4 className="m-b-0 font-16">Material Pro Admin</h4>
                              </div>
                            </div>
                          </td>
                          <td>Single Use</td>
                          <td>John Doe</td>
                          <td>
                            <label className="badge bg-success">Bootstrap</label>
                          </td>
                          <td>46</td>
                          <td>356</td>
                          <td>
                            <h5 className="m-b-0">$2850.06</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="m-r-10"><button
                                className="btn btn-circle d-flex btn-purple text-white">AA</button>
                              </div>
                              <div className="">
                                <h4 className="m-b-0 font-16">Ample Admin</h4>
                              </div>
                            </div>
                          </td>
                          <td>Single Use</td>
                          <td>John Doe</td>
                          <td>
                            <label className="badge bg-purple">React</label>
                          </td>
                          <td>46</td>
                          <td>356</td>
                          <td>
                            <h5 className="m-b-0">$2850.06</h5>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  )
}