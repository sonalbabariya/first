import React, { useState } from 'react'

function Form() {
    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        country: "",
        language: "",
        interests: [],
    });
    const [userDetailsDummy, setUserDetailsDummy] = useState({
        firstName: "",
        lastName: "",
        country: "",
        language: "",
        interests: [],
    });
    const [userData, SetUserData] = useState([]);
    const [index, setIndex] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            const id = [ ...userDetails.interests ]
            if (checked) {
                id.push(value);
            } else {
                const index = id.indexOf(value);
                id.splice(index, 1)
            }
            setUserDetails({ ...userDetails, interests: id })
        } else {
            setUserDetails({ ...userDetails, [name]: value })
        };
    };

    const handleSubmit = () => {
        const data = [...userData];
        if(index){
            data[index] = userDetails;
            SetUserData(data);
            setIndex("")
        }else{
            data.push(userDetails);
            SetUserData(data)
        };
        clearForm()
    };

    const clearForm = () => {
        setUserDetails({
            firstName: "",
            lastName: "",
            country: "",
            language: "",
            interests: [],
        });
        setIndex("");
    };

    const handleCancle = () => {
        setUserDetails({...userDetailsDummy});
    }

    const handleEdit = (index) => {
            setUserDetails({...userData[index]});
            setUserDetailsDummy({...userData[index]})
            setIndex(index)
    }

    const handleDelete = (index) => {
        const confirmDelete = window.confirm("Are You Sure You Want To Delete??")
        if(confirmDelete){
            const data = [...userData];
             data.splice(index , 1)
             SetUserData(data);
        }
    }

    return (
        <div className="container">
            <h3 className="alert alert-primary text-center">Contact Form</h3>
            <div className="employee-form">
                <div className="form-group">
                    <label htmlFor="fname">First name :- </label>
                    <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={userDetails.firstName}
                        onChange={handleChange}
                        id="fname"
                        placeholder="Please enter your name..." />
                </div>

                <div className="form-group">
                    <label htmlFor="lname">Last name :- </label>
                    <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={userDetails.lastName}
                        onChange={handleChange}
                        id="lname"
                        placeholder="Please enter your name..." />
                </div>

                <div className="form-group">
                    <label htmlFor="country">Country :- </label>
                    <select
                        name="country"
                        value={userDetails.country}
                        onChange={handleChange}
                        id="country"
                        className="form-control" >
                        <option value="" disabled>Selected</option>
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>
                </div>

                <div className="form-group">
                    <p>Please select your favorite web language :-</p>
                    <div>
                        <input
                            type="radio"
                            name="language"
                            id='html'
                            value="HTML"
                            checked={userDetails.language === "HTML"}
                            onChange={(e) => handleChange(e)} />
                        <label htmlFor="html" className="ml-2">HTML</label><br />

                        <input
                            type="radio"
                            name="language"
                            id='css'
                            value="CSS"
                            checked={userDetails.language === "CSS"}
                            onChange={(e) => handleChange(e)} />
                        <label htmlFor="css" className="ml-2">CSS</label><br />

                        <input
                            type="radio"
                            name="language"
                            id='javascript'
                            value="javaScript"
                            checked={userDetails.language === "javaScript"}
                            onChange={(e) => handleChange(e)} />
                        <label htmlFor="javascript" className="ml-2">javaScript</label>
                    </div>
                </div>

                <div className="form-group">
                    <p>Please select your interests :- </p>
                    <div>
                        <input
                            type="checkbox"
                            name="interests"
                            id="interest1"
                            value="Sports"
                            checked={userDetails.interests.includes("Sports")}
                            onChange={(e) => handleChange(e)}
                        />
                        <label htmlFor="interest1" className="ml-2">Sports</label><br />

                        <input
                            type="checkbox"
                            name="interests"
                            id="interest2"
                            value="Music"
                            checked={userDetails.interests.includes("Music")}
                            onChange={(e) => handleChange(e)}
                        />
                        <label htmlFor="interest2" className="ml-2">Music</label><br />

                        <input
                            type="checkbox"
                            name="interests"
                            id="interest3"
                            value="Movies"
                            checked={userDetails.interests.includes("Movies")}
                            onChange={(e) => handleChange(e)}
                        />
                        <label htmlFor="interest3" className="ml-2">Movies</label>
                    </div>
                </div>

                <div className="form-group">
                    <button type="button" className="btn btn-primary mr-2" onClick={handleSubmit}>Submit</button>
                    <button type="button" className="btn btn-danger" onClick={clearForm}>Reset</button>
                    {index !== "" && (
                        <button type="button" className="btn btn-secondary ml-2" onClick={handleCancle}>Cancel</button>
                    )}
                </div>
            </div>

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
    )
}

export default Form