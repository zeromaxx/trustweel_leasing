import React, { useState, createContext, useEffect } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState("");

    const logIn = () => {
        setIsLoggedIn(true);
        const savedRole = localStorage.getItem("role");
        if (savedRole) {
            setRole(savedRole);
        }
    };

    const logOut = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setRole("");
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, logIn, logOut, role }}>
            {children}
        </AuthContext.Provider>
    );
};
