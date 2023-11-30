import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../../public/img/LPALDlogoheader.webp";

function NavBar() {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="logo">
                            <img src={LogoImage} alt="" />
                        </div>
                    </div>
                    <div className="col-4">
                        <ul className="nav-menu">
                            <Link to="/">Home</Link>
                            <Link to="/about">Fleet</Link>
                        </ul>
                    </div>
                    <div className="col-4">
                        <div className="search-and-user">
                            <input type="search" placeholder="Search" />
                            <a href="#">Service & Contact</a>
                            <Link to="/login">Login</Link>
                            <select name="languages" id="language-select">
                                <option value="en">EN</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
