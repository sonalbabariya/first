import React, { useState } from 'react';

function WorkForm({ workDetails, onChange, onSubmit }) {
    const [error , setError] = useState({});

    const validatForm = () => {
        const Error = {};
        if(!workDetails.jobTitle) {
            Error.jobTitle = "⚠️ Please Enter Your Job Name...";
        }
        if(!workDetails.company) {
            Error.company = "⚠️ Please Enter Your Company Name...";
        }
        if(!workDetails.jobDescription) {
            Error.jobDescription = "⚠️ Please Enter Your Job Des. And Skills...";
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
                <h3 className="alert alert-primary text-center mt-3">Education Details</h3>
                <div className="employee-form border border-muted rounded p-3">
                    <div className="form-group">
                        <label htmlFor="degree">Degree :- </label>
                        <select name="degree" id="degree" className="form-control" value={educationDetails.degree} onChange={onChange}>
                            <option value="">Selected</option>
                            <option value="BCA">BCA</option>
                            <option value="MCA">MCA</option>
                            <option value="BBA">BBA</option>
                            <option value="MBA">MBA</option>
                        </select>
                        {error.degree && <span className="text-danger">{error.degree}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="university">Institution:- </label>
                        <input 
                        type="text" 
                        className="form-control" 
                        name="university" 
                        id="university" 
                        placeholder="Please enter your Institution ..." 
                        value={educationDetails.university} 
                        onChange={onChange} />
                        {error.university && <span className="text-danger">{error.university}</span>}
                    </div>

                    <div className="form-group mt-2">
                        <button type="button" className="btn btn-primary mr-2" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkForm;