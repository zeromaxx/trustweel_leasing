import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import NotFoundPage from './components/NotFoundPage'

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
export default App;
