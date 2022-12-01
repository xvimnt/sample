import React from "react";
// Icons
import {MdAddBox, MdDeleteForever, MdModeEdit} from 'react-icons/md'

export default function Table({ tableName, list, titles }) {

    return (
        <div className="container">
            <div className="table-wrapper">
                <div className="table-title">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2>Manage <b>{tableName}</b></h2>
                        </div>
                        <div className="col-sm-6">
                            <a href="modal" className="btn btn-success mx-1" data-toggle="modal"><MdAddBox /> Add New {tableName}</a>
                            <a href="modal" className="btn btn-danger mx-1" data-toggle="modal"><MdDeleteForever /> Delete Selected</a>
                        </div>
                    </div>
                </div>
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
                                        <a href="modal" className="btn btn-success" data-toggle="modal"><MdModeEdit /></a>
                                        <a href="modal" className="btn btn-danger" data-toggle="modal"><MdDeleteForever /></a>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
