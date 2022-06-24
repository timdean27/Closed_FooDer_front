import React from "react";
// import {BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Onboarding from "./Pages/Onboarding";
import "./Styles/index.css";


function App() {
  return (
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/Dashboard'} element={<Dashboard/>}/>
        <Route path={'/Onboarding'} element={<Onboarding/>}/>
      </Routes>
  );
}

export default App;
