import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userDelete, userEdit } from '../store/Action';

function Table() {
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const tableData = useSelector((state) => state?.data || [])

    useEffect(() => {
        setUserData(tableData)
    },[tableData])

    const handleEdit = (index) => {
        navigate(`/edit/${index}`);
        dispatch(userEdit(index));
    };
    

    const handleDelete = (index) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this data?");
        if (confirmDelete) {
            dispatch(userDelete(index))
        }
    };
  return (
    <>
    <div className='container'>
    <h3 className="alert alert-primary text-center mt-4">Submitted Data</h3>
            <div className="table-responsive">
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
    </div>
    </>
  )
}

export default Table