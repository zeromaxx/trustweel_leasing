require("./bootstrap");
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/Navbar";
import Fleet from "./components/Fleet";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <Router>
            <NavBar/>
            <Fleet/>
        </Router>
    </React.StrictMode>
);
