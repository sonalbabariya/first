import React, { useState, useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { userSubmit } from '../store/Action';

function Crud() {
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
    const [userData, setUserData] = useState([]);
    const [index, setIndex] = useState('');
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const formData = useSelector((state) => state?.editData);
    // console.log(formData);
    const tableData = useSelector((state) => state?.data || [] );

    useEffect(() => {
        // console.log(formData,index,"datadtadttad");
        if(params.id){
            setUserDetails(formData)
        }
        setUserData(tableData)
    }, [])
    

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            const id = [...userDetails.interests];
            if (checked) {
                id.push(value);
            } else {
                const index = id.indexOf(value);
                    id.splice(index, 1);
            }
            setUserDetails({...userDetails,interests: id,});
        } else {
            setUserDetails({ ...userDetails,[name]: value,});
        }
    };

    const handleSubmit = () => {
        const data = [...userData]
        if (params.id) {
            // const updatedUserData = [...userData];
            data[params.id] = userDetails;
            // updatedUserData[index] = userDetails;
            setUserData(data);
            setIndex("");
        } else {
            data.push(userDetails)
            setUserData(data);
        }
        clearForm();
        navigate("/table");
        dispatch(userSubmit(data));
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
        setUserDetails({ ...userDetailsDummy });
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

           
        </div>
    );
}

export default Crud