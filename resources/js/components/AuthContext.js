import React, { useState, createContext, useEffect } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState("");

    const logIn = (userRole) => {
        setIsLoggedIn(true);
        setRole(userRole);
    };

    const logOut = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setRole("");
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        const savedRole = localStorage.getItem("role");
        if (token) {
            setIsLoggedIn(true);
            if (savedRole) {
                setRole(savedRole);
            }
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, logIn, logOut, role }}>
            {children}
        </AuthContext.Provider>
    );
};
