// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/Home'
import LayoutMain from "../layout/LayoutMain";
import Login from "../Pages/Login/Login";
import CreateBonus from "../Pages/CreateBonus/CreateBonus";
import CreateProduct from "../Pages/CreateProduct/CreateProduct";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutMain />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/createBonus" element={<CreateBonus />} />
                    <Route path="/createProduct" element={<CreateProduct />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

