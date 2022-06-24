import React from 'react'
import Nav from "../Components/Nav";
const Home = () => {

    const authToken = false
    const handleClick = () => {
        console.log('clicked')
    }
  return (
    <div className="overlay">
      <Nav/>
      <div className="home">

      <button className="primary-btn" onClick={handleClick}>
          {authToken ? 'Signout' : 'Creat a new account'}
      </button>
      </div>
    </div>
  )
}

export default Home