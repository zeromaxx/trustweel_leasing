import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { Dropdown } from "react-bootstrap";

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
                        <ul className="nav-menu p-0 m-0 align-items-center">
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
                            <Dropdown className="ms-auto">
                                {isLoggedIn && (
                                    <>
                                        <Dropdown.Toggle className="custom-toggle">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="18"
                                            >
                                                <path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"></path>
                                            </svg>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="custom-menu">
                                            {role === "admin" ? (
                                                <Dropdown.Item
                                                    as="div"
                                                    className="custom-drop-item"
                                                >
                                                    <Link
                                                        to="/dashboard"
                                                        className="custom-link"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            width="20"
                                                            className="dropdown-svg"
                                                        >
                                                            <path d="M9,12H7a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2ZM8,10h4a1,1,0,0,0,0-2H8a1,1,0,0,0,0,2Zm1,6H7a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2Zm12-4H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-6.44-2.83a.76.76,0,0,0-.18-.09.6.6,0,0,0-.19-.06,1,1,0,0,0-.9.27A1.05,1.05,0,0,0,12,17a1,1,0,0,0,.07.38,1.19,1.19,0,0,0,.22.33,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21A1,1,0,0,0,14,17a1.05,1.05,0,0,0-.29-.71A1.58,1.58,0,0,0,13.56,16.17Zm.14-3.88a1,1,0,0,0-1.62.33A1,1,0,0,0,13,14a1,1,0,0,0,1-1,1,1,0,0,0-.08-.38A.91.91,0,0,0,13.7,12.29Z"></path>
                                                        </svg>
                                                        Dashboard
                                                    </Link>
                                                </Dropdown.Item>
                                            ) : (
                                                ""
                                            )}

                                            <Dropdown.Item
                                                as="div"
                                                className="custom-drop-item"
                                            >
                                                <Link
                                                    to="/orders"
                                                    className="custom-link"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="20"
                                                        className="dropdown-svg"
                                                    >
                                                        <path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z"></path>
                                                    </svg>
                                                    My Orders
                                                </Link>
                                            </Dropdown.Item>

                                            <Dropdown.Item
                                                as="div"
                                                className="custom-drop-item"
                                            >
                                                <Link
                                                    to="/favourites"
                                                    className="custom-link"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="20"
                                                        className="dropdown-svg"
                                                    >
                                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"></path>
                                                    </svg>
                                                    Favourites
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                as="div"
                                                onClick={handleLogout}
                                                className="custom-drop-item"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="20"
                                                    className="dropdown-svg"
                                                >
                                                    <path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"></path>
                                                </svg>
                                                <span
                                                    className="custom-link"
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    Sign Out
                                                </span>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </>
                                )}
                            </Dropdown>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
