import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './NavBar';
import Home from './Home';
import NecklaceCategory from "./NeckLace&BraceletsCategory";
import RingCategory from './RingCategory';
import WatchCategory from './WatchCategory';
import ShoppingCart from './ShoppingCart';
import "./App.css";


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <div className='routescontainer'>
      <Routes>
        <Route path='home' element={Home}/>
        <Route path='/watch' element={<WatchCategory />} />
        <Route path='/watch' element={<RingCategory /> } />
        <Route path='/watch' element={<NecklaceCategory />} />
        <Route path='/shoppingcart' element={<ShoppingCart />} />
      </Routes>
    </div>
    <footer/>
    </BrowserRouter>
  );
}

export default App;