require("./bootstrap");
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/Navbar";
import App from "./app";
import { AuthProvider } from "./components/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <AuthProvider>
            <Router>
                <NavBar />
                <App />
            </Router>
        </AuthProvider>
    </React.StrictMode>
);
