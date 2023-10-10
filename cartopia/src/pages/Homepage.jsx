import React from 'react'
import Welcome from "../components/Welcome";
import Cardmenu from "../components/Cardmenu";

const Homepage = () => {
  return (
    <div>
        <Welcome />
        <Cardmenu category={"men's clothing"}/>
        <Cardmenu category={"electronics"}/>
        <Cardmenu category={"women's clothing"}/>
    </div>
  )
}

export default Homepage;