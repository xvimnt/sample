import React, { useEffect, useState } from "react";
import ReactLoading from 'react-loading';
// Icons
import { MdAddBox, MdDeleteForever, MdModeEdit } from 'react-icons/md'
import Modal from "./Modal";

export default function Table({ tableName, list, titles, fields }) {

    const [loading, setLoading] = useState(true)
    const [selectedItem, setSelectedItem] = useState()

    useEffect(() => {
        if (list.data) {
            setLoading(false)
        }
    }, [list.data])
    return (
        <>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Manage <b>{tableName}</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#addNew"
                                ><MdAddBox />Add New {tableName}</button>
                                <Modal id='addNew' title={'Agrega un nuevo producto'}>
                                    <form>
                                        {
                                            fields.map(arr => {
                                                return (
                                                    <div class="mb-3">
                                                        <label className="form-label">{arr[0]}:</label>
                                                        {arr[1]}
                                                    </div>
                                                )
                                            })
                                        }
                                    </form>
                                </Modal>
                                <a href="modal" className="btn btn-danger mx-1" data-toggle="modal"><MdDeleteForever /> Delete Selected</a>
                            </div>
                        </div>
                    </div>
                    <Modal id="edit" title='Edicion'>
                        { selectedItem &&
                            Object.keys(selectedItem).forEach(key => {
                                return (
                                    <div key={key}>
                                        <label htmlFor="">{key}</label>
                                        <input type="text" value={selectedItem[key]} />
                                    </div>
                                )
                              })
                        }
                    </Modal>
                    {loading ? (
                        <center>
                            <ReactLoading className="text-center mt-5" type='cylon' color='black' height={125} width={125} />
                        </center>
                    ) : (
                        <table className="mt-4 table table-striped table=hover">
                            <thead>
                                <tr>
                                    <th>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="selectAll" />
                                            <label htmlFor="selectAll"></label>
                                        </span>
                                    </th>
                                    {titles.map(title => <td key={title}>{title}</td>)}
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list.data.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>
                                                <span>
                                                    <input type="checkbox" id={item.id} name="option[]" value="1" />
                                                    <label htmlFor={item.id}></label>
                                                </span>
                                            </td>
                                            {titles.map(title => <td>{item[title]}</td>)}
                                            <td>
                                                <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#edit"
                                                    
                                                ><MdModeEdit /></button>
                                                <a href="modal" className="btn btn-danger" data-toggle="modal"><MdDeleteForever /></a>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    );
}
