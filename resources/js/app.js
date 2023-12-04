import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import CarDetails from "./components/CarDetails";
import NotFoundPage from './components/NotFoundPage';
import Contact from "./components/Contact";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
export default App;
