require("./bootstrap");
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <Router>
            <NavBar/>
            <App />
        </Router>
    </React.StrictMode>
);
