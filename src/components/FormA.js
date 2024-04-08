import React, { useState } from 'react'

function FormA() {
    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        country: "",
        gender: "",
        hobbies: [],
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            const id = [...userDetails.hobbies]
            if (checked) {
                id.push(value)
            } else {
                const index = id.indexOf(value)
                id.splice(index, 1)
            }
            setUserDetails({ ...userDetails, hobbies: id })

        }
        setUserDetails({ ...userDetails, [name]: value })
    }

    const handleSubmit = () => {
        
    }
    return (
        <>
            <div className='container pt-2'>
                <h2 className='alert alert-primary p-2 text-center'>
                    Contact Form
                </h2>
                <div className='employee-form'>
                    <div className="mb-3 form-group">
                        <label htmlFor="fname" className="form-label">First Name:-</label>
                        <input type="text" className="form-control" id="fname"
                            value={userDetails.firstName}
                            onChange={handleChange}
                            name='firstName' />
                    </div>
                    <div className="mb-3 form-group">
                        <label htmlFor="lname" className="form-label">Last Name:-</label>
                        <input type="text" className="form-control" id="lname"
                            value={userDetails.lastName}
                            onChange={handleChange}
                            name='lastName' />
                    </div>
                    <div className="mb-3 form-group">
                        <label htmlFor="country">Select your Country:-</label>
                        <select className="form-control" id="country"
                            value={userDetails.country}
                            onChange={handleChange}
                            name="country">
                            <option value="">Selected</option>
                            <option value="india">India</option>
                            <option value="canada">Canada</option>
                            <option value="germany">Germany</option>
                        </select>
                    </div>
                    <div className="mb-3 form-group">
                        <p>Select your Gender:-</p>
                        <div>
                            <input type="radio" id="male" name="gender" value="male"
                                checked={userDetails.gender === "male"}
                                onChange={handleChange} />
                            <label className="form-check-label" htmlFor="male">
                                Male
                            </label>
                        </div>
                        <div>
                            <input type="radio" id="female" name="gender" value="female"
                                checked={userDetails.gender === "male"}
                                onChange={handleChange} />

                            <label className="form-check-label" htmlFor="female">
                                Female
                            </label>
                        </div>
                    </div>
                    <div className="mb-3 form-group">
                        <p>Select your Hobbies:-</p>
                        <div >
                            <input type="checkbox" id="music" name="hobbies" value="music"
                                checked={userDetails.hobbies.includes("music")}
                                onChange={handleChange} />
                            <label htmlFor="music">
                                Music
                            </label>
                        </div>
                        <div >
                            <input type="checkbox" id="sports" name="hobbies" value="sports"
                                checked={userDetails.hobbies.includes("sports")}
                                onChange={handleChange} />
                            <label htmlFor="sports">
                                Sports
                            </label>
                        </div>
                        <div >
                            <input type="checkbox" id="reading" name="hobbies" value="reading"
                                checked={userDetails.hobbies.includes("reading")}
                                onChange={handleChange} />
                            <label htmlFor="reading">
                                Reading
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default FormA