import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Sidebar = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState('')

    const LogoutUser = () => {
        sessionStorage.removeItem("UserToken");
        sessionStorage.removeItem("UserDetails");
        toast.success('logout successfully')
        navigate('/');
    }
    useEffect(() => {
        const localData = sessionStorage.getItem("UserDetails");
        const user = JSON.parse(localData);
        setUserData(user);
    }, [])

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/dashboard">
                    {userData.ConfirmEmail}
                </Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/dashboard">
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/expenses">
                                Expenses
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">
                                Wallets
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">
                                Summary
                            </Link>
                        </li>
                    </ul>
                </div>
                <button className="btn btn-outline-success my-2 my-sm-0 ml-auto" onClick={LogoutUser}>
                    Logout / {userData.Name}
                </button>
            </nav>
        </div>
    )
}

export default Sidebar
