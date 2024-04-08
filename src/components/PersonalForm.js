import React, { useState } from 'react';

function PersonalForm({ userDetails, onChange, onSubmit, fileChange }) {
    const [error , setError] = useState({});
     
    const validatForm = () => {
        const Error = {};
        if(!userDetails.firstName){
            Error.firstName = "⚠️ Please Enter Your First Name...";
        }
        if(!userDetails.lastName){
            Error.lastName = "⚠️ Please Enter Your Last Name...";
        }
        if(!userDetails.country){
            Error.country = "⚠️ Please Enter Your Country...";
        }
        if(!userDetails.gender){
            Error.gender = "⚠️ Please Enter Your Gender...";
        }
        if(!userDetails.languages){
            Error.languages = "⚠️ Please Enter Your Language...";
        }
        if(!userDetails.languages){
            Error.file = "⚠️ Please Enter Your Profile Photo File...";
        }

        setError(Error);
        return Object.keys(Error).length === 0;
    };

    const handleSubmit = () => {
        const isValid = validatForm();
        if(isValid) {
            onSubmit();
        }
    }
    return (
        <div>
            <div className="container container1">
                <h3 className="alert alert-primary text-center mt-3">Contact Form</h3>
                <div className="employee-form border border-muted rounded p-3">
                    <div className="form-group">
                        <label htmlFor="fname">First name :- </label>
                        <input type="text" className="form-control" name="firstName" id="fname" value={userDetails.firstName} onChange={onChange} placeholder="Please enter your name..." />
                        {error.firstName && <span className="text-danger">{error.firstName}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="lname">Last name :- </label>
                        <input type="text" className="form-control" name="lastName" id="lname" value={userDetails.lastName} onChange={onChange} placeholder="Please enter your name..." />
                        {error.lastName && <span className="text-danger">{error.lastName}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="country">Country :- </label>
                        <select name="country" id="country" className="form-control" value={userDetails.country} onChange={onChange}>
                            <option value="selected">Selected</option>
                            <option value="Australia">Australia</option>
                            <option value="Canada">Canada</option>
                            <option value="USA">USA</option>
                        </select>
                        {error.country && <span className="text-danger">{error.country}</span>}
                    </div>

                    <div className="form-group mt-2">
                        <p>Please select your gender :-</p>
                        <div>
                            <input
                                type="radio"
                                name="gender"
                                id="male"
                                value="Male"
                                checked={userDetails.gender === "Male"}
                                onChange={(e) => onChange(e)}
                            />
                            <label htmlFor="male" className="ml-2">Male</label><br />

                            <input
                                type="radio"
                                name="gender"
                                id="female"
                                value="Female"
                                checked={userDetails.gender === "Female"}
                                onChange={(e) => onChange(e)}
                            />
                            <label htmlFor="female" className="ml-2">Female</label><br />
                        {error.gender && <span className="text-danger">{error.gender}</span>}
                        </div>
                    </div>

                    <div className="form-group mt-2">
                        <p>Please select your languages :- </p>
                        <div>
                            <input
                                type="checkbox"
                                name="languages"
                                id="language1"
                                value="HTML"
                                checked={(userDetails.languages || []).includes("HTML")}
                                onChange={(e) => onChange(e)}
                            />
                            <label htmlFor="language1" className="ml-2">HTML</label><br />

                            <input
                                type="checkbox"
                                name="languages"
                                id="language2"
                                value="CSS"
                                checked={(userDetails.languages || []).includes("CSS")}
                                onChange={(e) => onChange(e)}
                            />
                            <label htmlFor="language2" className="ml-2">CSS</label><br />

                            <input
                                type="checkbox"
                                name="languages"
                                id="language3"
                                value="JavaScript"
                                checked={(userDetails.languages || []).includes("JavaScript")}
                                onChange={(e) => onChange(e)}
                            />
                            <label htmlFor="language3" className="ml-2">JavaScript</label>
                        </div>
                        {error.languages && <span className="text-danger">{error.languages}</span>}
                    </div>

                    <div className="form-group mt-2 ">
                        <label htmlFor="file" >your picture File :- </label><br/>
                        <input type="file" className="form-control-file mt-1" name="file" id="file" onChange={fileChange} />
                    </div>
                    {error.file && <span className="text-danger">{error.file}</span>}


                    <div className="form-group mt-2">
                        <button type="button" className="btn btn-primary mr-2" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalForm;