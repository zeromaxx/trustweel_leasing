import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../../public/img/LPALDlogoheader.webp";

function NavBar() {
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
                            <li className="ms-3">
                                <Link to="/login">Login</Link>
                            </li>
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
