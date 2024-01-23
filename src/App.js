import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./components/Home/Home";
import {FarmerInterface} from "./components/FarmerInterface/FarmerInterface";
import {Middleman} from "./components/Middleman/Middleman";
import AboutUs from "./components/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Government } from "./components/Government/Government";
// import Testing from "./components/Testing/Testing";

function App() {
  return (

    <BrowserRouter>
    <Header/>
    {/* <Testing/> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<AboutUs/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>

        <Route path="/farmer" element={<FarmerInterface/>}></Route>
        <Route path="/middleman" element={<Middleman/>}></Route>
        <Route path="/Government" element={<Government/>}></Route>


      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App