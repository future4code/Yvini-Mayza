import React, { useState, useEffect } from "react";
import styled from"styled-components";
import axios from "axios";
import Home from "./screens/Home/Home"
import Matches from"./screens/Matches/Matches"

function App() {
const[home, setHome]= useState(true)

  const mudarPagina = () =>{

      setHome(!home)
 }

  return (
    
    <div >
      {home ? (<Home mudarPagina ={mudarPagina}/>) : (<Matches mudarPagina = {mudarPagina}/>) }
     
    </div>

  );
}

export default App;
