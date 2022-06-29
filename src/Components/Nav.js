import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import mainlogo from "./images/appleLogo.jpg";
const Nav = ({ authToken, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  return (

    <nav>
      <div className="logo-container">
        <img className="mainlogo" src={mainlogo} alt="logo" />
      </div>
      {!authToken && (
        <div>
          <button className="nav-btn" onClick={handleClick} disabled={showModal}>
            Log in
          </button>

          
          <Link  key={'ResturantPage'} to={`/Resturant`}>
          <button className="nav-btn">
          Resturant selection page
          </button>
          </Link>
          
          
        </div>
      )}
    </nav>

  );
};

export default Nav;
