import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Searchresult from "../pages/Searchresult";
import Shop from "../pages/Shop";
import Product from "../pages/Product";
import Category from "../pages/Category";
import Badurl from "../pages/Badurl";
import Home from "../pages/Home";

function App(){
    return <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<Homepage />} />
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/search" element={<Searchresult/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/product" element={<Product/>}/>
                    <Route path="/category" element={<Category />}/>
                    <Route path="*" element={<Badurl />} />
                </Route>
            </Routes>
        </BrowserRouter>
}

export default App;