import React from "react";
import mainlogo from "./images/appleLogo.jpg";
const Nav = ({ authToken, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  return (
    <nav>
      <div className="logo-container">
        <img className="mainlogo" src={mainlogo} />
      </div>
      {!authToken && (
        <button className="nav-btn" onClick={handleClick} disabled={showModal}>
          Log in
        </button>
      )}
    </nav>
  );
};

export default Nav;
