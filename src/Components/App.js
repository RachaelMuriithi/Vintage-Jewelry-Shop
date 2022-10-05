import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import NecklaceCategory from "./NeckLace&BraceletsCategory";
import RingCategory from "./RingCategory";
import WatchCategory from "./WatchCategory";
import ShoppingCart from "./ShoppingCart";
import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="routescontainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch" element={<WatchCategory />} />
          <Route path="/ring" element={<RingCategory />} />
          <Route path="/necklace" element={<NecklaceCategory />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
