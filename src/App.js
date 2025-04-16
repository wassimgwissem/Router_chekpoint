import React from "react";
import Movies from "./components/Movies";
import { useState } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Trailerpage from "./components/Trailerpage";

function App() {
  const[movies,setMovies]=useState(Movies);
  return (
  <>
    <div className="App" style={{position:"absolute",top:0,left:0,width:"100vw"}}>
      
    </div>
    <Routes>
      <Route path="/" element={<Home movies={movies} setMovies={setMovies} />}/>
      <Route path="/trailerpage/:index" element={<Trailerpage movies={movies}/>}/>
    </Routes>
  </>
  
  );
}
export default App;