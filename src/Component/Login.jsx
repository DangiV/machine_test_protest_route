import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: "",
        email_otp: ""
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
        try {
            const response = await axios.post("http://13.50.172.202:3001/v0/checkOtpVerificationForWeb", userData);
            console.log("user login response", response.data.data)

            sessionStorage.setItem("UserToken", JSON.stringify(response.data.data.accessToken));
            sessionStorage.setItem("UserDetails", JSON.stringify(response.data.data));

            toast.success("User login successfully")
            navigate("/dashboard")
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    }

    return (
        <>
            <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                                <form onSubmit={handleSubmit}>
                                    <div className="card-body p-5 text-center">
                                        <h3 className="mb-5">Sign in</h3>
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
                                                type="number"
                                                name='email_otp'
                                                id="email_otp"
                                                value={userData.email_otp}
                                                onChange={handleChange}
                                            />
                                            <label className="form-label" htmlFor="typePasswordX-2">
                                                OTP
                                            </label>
                                        </div>

                                        <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                                    </div>
                                    <div class="text-center">
                                        <p>Not a member? <Link to="/register">Register</Link></p>
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

export default Login
