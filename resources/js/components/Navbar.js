import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../../public/img/LPALDlogoheader.webp";

function NavBar() {
    return (
        <div className="header">
            <div className="logo">
                <img src={LogoImage} alt="" />
            </div>

            <ul className="nav-menu">
                <Link to="/">Home</Link>
                <Link to="/about">Fleet</Link>
            </ul>

            <div className="search-and-user">
                <input type="search" placeholder="Search" />
                <a href="#">Service & Contact</a>
                <a href="#">My account</a>
                <select name="languages" id="language-select">
                    <option value="en">EN</option>
                </select>
            </div>
        </div>
    );
}

export default NavBar;
