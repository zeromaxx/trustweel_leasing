import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Register from "./components/Register";
import Favourites from "./components/Favourites";
import Dashboard from "./components/Dashboard";
import CarDetails from "./components/CarDetails";
import NotFoundPage from './components/NotFoundPage';
import Contact from "./components/Contact";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/favourites" element={<Favourites/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
export default App;
