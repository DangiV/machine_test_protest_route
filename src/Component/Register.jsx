import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { makeApi } from '../Helper/MakeApi';
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        terms_condition: "1",
        profilecreatedby: "Self",
        name: "",
        gender: "",
        dateofbirth: "",
        mobile_code: "+91"
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((oldVal) => ({
            ...oldVal,
            [name]: value

        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userData.dateofbirth || !userData.name || !userData.gender || userData.mobile_code === "") {
            toast.error("please fill complete form and then submit");
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(userData.email)) {
            toast.error("Please enter a correct email");
            return;
        }

        if (userData.password !== userData.confirmPassword) {
            toast.error('password and confirm password must be same');
            return;
        }

        if (userData.phone.length !== 10) {
            toast.error("mobile number must be correct");
            return;
        }

        try {
            const response = await makeApi('post', 'http://13.50.172.202:3001/v0/registrationForWeb', userData)
            console.log("register response", response);
            toast.success("user registered successfully");
            toast.success(response.data);
            navigate('/');
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    }

    return (
        <>
            <section className="" style={{ backgroundColor: "#508bfc" }}>
                <div className="container py-5 ">
                    <div className="row d-flex justify-content-center align-items-center ">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                                <form onSubmit={handleSubmit}>
                                    <div className="card-body p-5 text-center">
                                        <h3 className="mb-5">Sign Up</h3>
                                        <div data-mdb-input-init="" className="form-outline mb-4">
                                            <input
                                                className="form-control form-control-lg"
                                                type="email"
                                                id="email"
                                                name='email'
                                                value={userData.email}
                                                onChange={handleChange}
                                            />
                                            <label className="form-label" htmlFor="typeEmailX-2">
                                                Email
                                            </label>
                                        </div>

                                        <div data-mdb-input-init="" className="form-outline mb-4">
                                            <input
                                                className="form-control form-control-lg"
                                                type="Password"
                                                id="password"
                                                name="password"
                                                value={userData.password}
                                                onChange={handleChange}
                                            />
                                            <label className="form-label" htmlFor="typePasswordX-2">
                                                Password
                                            </label>
                                        </div>

                                        <div data-mdb-input-init="" className="form-outline mb-4">
                                            <input
                                                className="form-control form-control-lg"
                                                type="password"
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                value={userData.confirmPassword}
                                                onChange={handleChange}
                                            />
                                            <label className="form-label" htmlFor="typePasswordX-2">
                                                Confirm Password
                                            </label>
                                        </div>

                                        <div data-mdb-input-init="" className="form-outline mb-4">
                                            <input
                                                className="form-control form-control-lg"
                                                type="text"
                                                id="terms_condition"
                                                name="terms_condition"
                                                value={userData.terms_condition}
                                                onChange={handleChange}
                                            />
                                            <label className="form-label" htmlFor="typePasswordX-2">
                                                Terms_Condition
                                            </label>
                                        </div>

                                        <div data-mdb-input-init="" className="form-outline mb-4">
                                            <input
                                                className="form-control form-control-lg"
                                                type="text"
                                                id="profilecreatedby"
                                                name="profilecreatedby"
                                                value={userData.profilecreatedby}
                                                onChange={handleChange}
                                            />
                                            <label className="form-label" htmlFor="typePasswordX-2">
                                                Profile Created By
                                            </label>
                                        </div>

                                        <div data-mdb-input-init="" className="form-outline mb-4">
                                            <input
                                                className="form-control form-control-lg"
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={userData.name}
                                                onChange={handleChange}
                                            />
                                            <label className="form-label" htmlFor="typePasswordX-2">
                                                Name
                                            </label>
                                        </div>

                                        <div data-mdb-input-init="" className="form-outline mb-4">
                                            <input
                                                className="form-control form-control-lg"
                                                type="gender"
                                                id="gender"
                                                name="gender"
                                                value={userData.gender}
                                                onChange={handleChange}
                                            />
                                            <label className="form-label" htmlFor="typePasswordX-2">
                                                Gender
                                            </label>
                                        </div>

                                        <div data-mdb-input-init="" className="form-outline mb-4">
                                            <input
                                                className="form-control form-control-lg"
                                                type="date"
                                                id="dateofbirth"
                                                name="dateofbirth"
                                                value={userData.dateofbirth}
                                                onChange={handleChange}
                                            />
                                            <label className="form-label" htmlFor="typePasswordX-2">
                                                Date of Birth
                                            </label>
                                        </div>

                                        <div data-mdb-input-init="" className="form-outline mb-4">
                                            <input
                                                className="form-control form-control-lg"
                                                type="text"
                                                id="mobile_code"
                                                name="mobile_code"
                                                value={userData.mobile_code}
                                                onChange={handleChange}
                                            />
                                            <label className="form-label" htmlFor="typePasswordX-2">
                                                Mobile Code
                                            </label>
                                        </div>

                                        <div data-mdb-input-init="" className="form-outline mb-4">
                                            <input
                                                className="form-control form-control-lg"
                                                type="number"
                                                id="phone"
                                                name="phone"
                                                value={userData.phone}
                                                onChange={handleChange}
                                            />
                                            <label className="form-label" htmlFor="typePasswordX-2">
                                                Mobile Number
                                            </label>
                                        </div>

                                        <button className="btn btn-primary btn-lg btn-block" type="submit"> Register </button>
                                    </div>
                                    <div class="text-center">
                                        <p>Already a member? <Link to="/">Login</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register
