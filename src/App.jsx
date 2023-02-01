import { useState } from "react";
import ScrollToTop from "react-scroll-to-top";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";  

function App() { 

  return (
    <> 
    <ScrollToTop
    smooth className="bg-slate-400 font-bold text-xs rounded-2xl"
    id="scrolltotop"
    color="#812315"
  />
      <HomePage />  
    </>
  );
}

export default App;
