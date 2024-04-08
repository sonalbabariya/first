import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userDelete, userEdit } from '../store/Action';
import { useNavigate } from 'react-router-dom';

function TableData() {
    const [userData, setUserData] = useState([]);
    const dispatch = useDispatch();
    const tableData = useSelector((state) => state?.data || [])
    const navigate = useNavigate();
    useEffect(() => {
        setUserData(tableData)
    }, [tableData])

    const handleEdit = (index) => {
        dispatch(userEdit(index));
        navigate(`/edit/${index}`)
        };
    
        const handleDelete = (index) => {
            const confirmDelete = window.confirm("are you sure you wnt to delete??");
            if(confirmDelete){
                dispatch(userDelete(index))
            }
        }

    return (
        <>
            <h3 className="container alert alert-primary text-center mt-4">Submitted Data</h3>
            <div className="container table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Country</th>
                            <th>Language</th>
                            <th>Interests</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {userData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.country}</td>
                                <td>{data.language}</td>
                                <td>{data.interests.join(", ")}</td>
                                <td>
                                    <button type="button" className="btn btn-sm btn-success mr-3" onClick={() => handleEdit(index)}>
                                        <i className="fas fa-edit mr-1"></i> Edit
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-sm btn-danger" onClick={() => handleDelete(index)}>
                                        <i className="fas fa-trash mr-1"></i>Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableData