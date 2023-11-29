import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import NotFoundPage from './components/NotFoundPage'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
export default App;
