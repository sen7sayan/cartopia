import React from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Card from "./Card";
import Cardmenu from "./Cardmenu";
import Footer from "./Footer";
function App(){
    return <div>
        <Navbar />
        <Welcome />
        
        <Cardmenu />
        <Cardmenu />
        <Cardmenu />
        <Footer />
    </div>
}

export default App;