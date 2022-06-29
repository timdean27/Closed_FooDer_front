import React from "react";
// import {BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Onboarding from "./Pages/Onboarding";
import ResturantData from "./Pages/ResturantData";
import "./Styles/index.css";


function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/Dashboard'} element={<Dashboard/>}/>
        <Route path={'/Onboarding'} element={<Onboarding/>}/>
        
      </Routes>
      <ResturantData/>
      </div>
  );
}

export default App;
