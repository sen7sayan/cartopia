import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import Cardmenu from "../components/Cardmenu";
import { Outlet } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
        <Navbar />
        {/* <Welcome />
        <Cardmenu category={"men's clothing"}/>
        <Cardmenu category={"electronics"}/>
        <Cardmenu category={"women's clothing"}/>
        <Footer /> */}
        <Outlet />

        <Footer />
    </div>
  )
}

export default Homepage;