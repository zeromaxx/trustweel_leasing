import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function NavBar() {
    const navigate = useNavigate();
    const { isLoggedIn, logOut, role } = useContext(AuthContext);

    const handleLogout = () => {
        fetch("/api/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                logOut();
                navigate("/login");
            })
            .catch((error) => console.error("Error:", error));
    };
    return (
        <div className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-4">
                        <div className="logo">
                            <Link to="/">
                                <span className="left">Trustweel</span>{" "}
                                <span className="right">Leasing</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-8">
                        <ul className="nav-menu p-0 m-0">
                            {!isLoggedIn && (
                                <>
                                    <li className="ms-3">
                                        <Link to="/login">Login</Link>
                                    </li>
                                    <li className="ms-3">
                                        <Link to="/register">Register</Link>
                                    </li>
                                </>
                            )}
                            <li className="ms-3">
                                <Link to="/about">About us</Link>
                            </li>
                            <li className="ms-3">
                                <Link to="/contact">Contact</Link>
                            </li>
                            {role === "admin" ? (
                                <li className="ms-3">
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                            ) : (
                                ""
                            )}
                            {isLoggedIn && (
                                <>
                                    <li className="ms-3">
                                        <Link to="/favourites">Favourites</Link>
                                    </li>
                                    <li className="ms-auto">
                                        <a
                                            style={{ cursor: "pointer" }}
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </a>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
