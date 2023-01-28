import React, { useEffect, useState } from "react";

// Icons
import { MdAddBox, MdDeleteForever, MdModeEdit } from 'react-icons/md'
import Modal from "./Modal";
import Checkbox from "../Buttons/Checkbox"

export default function Table({ tableName, rows, fields, addItem, deleteItem, updateItem }) {
    // Checkbox states
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [list, setList] = useState([]);

    // Handle the select all and individual select
    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(list);
        if (isCheckAll) {
            setIsCheck([]);
        }
    };
    const handleClick = e => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter(item => item !== id));
        }
    };

    // Create an array of ids to track the checked ids
    useEffect(() => {
        setList(rows.data.map(item => item.id));
    }, [rows]);

    // Handle the click when editing or adding an item
    const beforeEdit = (item) => {
        fields.map(obj => {
            obj.setState(item[obj.column])
        })
    }
    const beforeAdd = () => {
        fields.map(obj => {
            obj.setState('')
        })
    }

    return (
        <>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Administra <b>{tableName}</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#addNew"
                                    onClick={beforeAdd}
                                ><MdAddBox />&nbsp;Agregar mas {tableName}</button>
                                <Modal id='addNew' title={'Agregar mas ' + tableName} submit={addItem}>
                                <form>
                                        {
                                            fields.map(obj => {
                                                return (
                                                    <div className="mb-3" key={obj.column}>
                                                        <label className="form-label">{obj.title}:</label>
                                                        {obj.control()}
                                                    </div>
                                                )
                                            })
                                        }
                                    </form>
                                </Modal>
                                <a href="modal" className="btn btn-danger mx-1" data-toggle="modal"><MdDeleteForever />&nbsp;Eliminar Seleccionados</a>
                            </div>
                        </div>
                    </div>
                    <Modal id="edit" title={'Edicion de ' + tableName} submit={updateItem}>
                        {
                            fields.map(obj => {
                                return ( 
                                    <div className="mb-3" key={obj.column}>
                                        <label className="form-label">{obj.title}:</label>
                                        {obj.control()}
                                    </div>
                                )
                            })
                        }
                    </Modal>
                    <table className="mt-4 table table-striped table=hover">
                        <thead>
                            <tr>
                                <th>
                                    <span className="custom-checkbox">
                                        <Checkbox
                                            type="checkbox"
                                            name="selectAll"
                                            id="selectAll"
                                            handleClick={handleSelectAll}
                                            isChecked={isCheckAll}
                                        />
                                        <label htmlFor="selectAll"></label>
                                    </span>
                                </th>
                                {fields.map(obj => obj.showTable && <td key={obj.title}>{obj.title}</td>)}
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.data.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>
                                            <span>
                                                <Checkbox
                                                    key={item.id}
                                                    type="checkbox"
                                                    id={item.id}
                                                    handleClick={handleClick}
                                                    isChecked={isCheck.includes(item.id)}
                                                />
                                            </span>
                                        </td>
                                        {fields.map(obj => obj.showTable && <td>{item[obj.column]}</td>)}
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#edit"
                                                onClick={() => beforeEdit(item)}
                                            ><MdModeEdit /></button>
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={() => deleteItem(item)}
                                            ><MdDeleteForever /></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
