import React, { useEffect, useState } from "react";
import ReactLoading from 'react-loading';
// Icons
import { MdAddBox, MdDeleteForever, MdModeEdit } from 'react-icons/md'
import Modal from "./Modal";
import Checkbox from "../Buttons/Checkbox"

export default function Table({ tableName, rows, titles, fields }) {
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

    const [loading, setLoading] = useState(false)

    // Handle the click when editing or adding an item
    const editItem = (item) => {
        fields.map(arr => {
            const [column, , , , setState] = arr;
            setState(item[column])
        })
    }
    const addItem = () => {
        fields.map(arr => {
            const [column, , , , setState] = arr;
            setState('')
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
                                    onClick={addItem}
                                ><MdAddBox />&nbsp;Agregar mas {tableName}</button>
                                <Modal id='addNew' title={'Agregar mas ' + tableName}>
                                    <form>
                                        {
                                            fields.map(arr => {
                                                const [, label, control] = arr;
                                                return (
                                                    <div className="mb-3">
                                                        <label className="form-label">{label}:</label>
                                                        {control()}
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
                    <Modal id="edit" title='Edicion'>
                        {
                            fields.map(arr => {
                                const [, label, control] = arr;
                                return (
                                    <div className="mb-3">
                                        <label className="form-label">{label}:</label>
                                        {control()}
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
                                    {titles.map(title => <td key={title}>{title}</td>)}
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
                                            {titles.map(title => <td>{item[title]}</td>)}
                                            <td>
                                                <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#edit"
                                                    onClick={() => editItem(item)}
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
