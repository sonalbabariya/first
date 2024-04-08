import React from 'react';

function DetailsTable({ userData, onEdit, onDelete }) {
    return (
        <div className='container'>
            <div className='table'>
                <h3 className="alert alert-primary text-center mt-4">Employee Details</h3>
                <div className="table-responsive">
                    <table className="table table-hover table-bordered rounded">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Country</th>
                                <th>Gender</th>
                                <th>Language</th>
                                <th>Degree</th>
                                <th>Institution</th>
                                <th>Employment</th>
                                <th>Company</th>
                                <th>Job Description</th>
                                <th>File</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.userDetails.firstName}</td>
                                    <td>{data.userDetails.lastName}</td>
                                    <td>{data.userDetails.country}</td>
                                    <td>{data.userDetails.gender}</td>
                                    <td>{data.userDetails.languages?.join(" , ")}</td>
                                    <td>{data.educationDetails.degree}</td>
                                    <td>{data.educationDetails.university}</td>
                                    <td>{data.workDetails.jobTitle}</td>
                                    <td>{data.workDetails.company}</td>
                                    <td>{data.workDetails.jobDescription}</td>
                                    <td>
                                        <img src={data.userDetails?.profile} alt='profile' style={{ width: "150px", height: "auto" }} />
                                    </td>
                                    <td><button className="btn btn-sm btn-success mr-3" onClick={() => onEdit(index)}><i className="fa fa-edit mr-1"></i></button></td>
                                    <td><button type="button" className="btn btn-sm btn-danger" onClick={() => onDelete(index)}><i className="fa fa-trash mr-1"></i></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DetailsTable;