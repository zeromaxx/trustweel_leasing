import React from "react";
import { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import LogoImage from "../../../public/img/LPALDlogoheader.webp";
import { AuthContext } from "./AuthContext";

function NavBar() {
    const navigate = useNavigate();
    const { isLoggedIn, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        fetch('api/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                logOut();
                console.log(data.message);
                // navigate('/login');
            })
            .catch(error => console.error('Error:', error));
    };
    return (
        <div className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-4">
                        <div className="logo">
                            <img src={LogoImage} alt="" />
                        </div>
                    </div>
                    <div className="col-4">
                        <ul className="nav-menu p-0 m-0">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            {!isLoggedIn && (
                                <>
                                    <li className="ms-3"><Link to="/login">Login</Link></li>
                                    <li className="ms-3"><Link to="/register">Register</Link></li>
                                </>
                            )}
                            {isLoggedIn && (
                                <li className="ms-3">
                                    <button onClick={handleLogout}>Logout</button>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="col-4">
                        <div className="search-and-user">
                            <input className="form-control" type="search" placeholder="Search" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
