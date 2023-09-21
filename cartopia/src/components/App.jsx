import React from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Cardmenu from "./Cardmenu";
import Footer from "./Footer";
function App(){
    return <div>
        <Navbar />
        <Welcome />
        
        <Cardmenu category={"men's clothing"}/>
        <Cardmenu category={"electronics"}/>
        <Cardmenu category={"women's clothing"}/>
        <Footer />
    </div>
}

export default App;