import React from 'react'
import Home from "../pages/home/Home"
import Checkout from "../pages/checkout/Checkout"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../components/shared/navbar/Navbar';
import Footer from '../components/shared/footer/Footer';
function ReactRoutes() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route index element={<Checkout />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default ReactRoutes