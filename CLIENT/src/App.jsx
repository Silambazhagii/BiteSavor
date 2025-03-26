import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header"
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp"
import Cart from "./Pages/Cart"
import Cloth from "./Pages/Cloth";


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cloth" element={<Cloth />} />
    </Routes>
    </>

  );
}

export default App;
