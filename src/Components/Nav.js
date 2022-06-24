import React from 'react'
import mainlogo from './images/appleLogo.jpg'
const Nav = ({authToken}) => {
  return (
    <nav>
        <div className="logo-container">
            <img className="mainlogo" src={mainlogo} />
        </div>
        {!authToken && <button className="nav-btn">Log in</button>}
    </nav>
    
  )
}

export default Nav