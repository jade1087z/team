import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/style.scss";
import Home from "./components/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;