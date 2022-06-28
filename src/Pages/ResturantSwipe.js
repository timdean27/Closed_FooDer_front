import React, { useState , useEffect} from 'react'
import { Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import SingleResturantView from './SingleResturantView';
import TinderCard from "react-tinder-card";
const Dashboard = () => {
  
    const resurantdb = [
    {
      name: "McDonalds",
      url: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/mcdonalds-2.jpg?quality=82&strip=1",
      id_:1,
    },
    {
      name: "Marios Pizza",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-erhxIcpQ0rLaaeP7yHZHf1AHUpfwbtkfsw&usqp=CAU",
      id_:2,
    },
    {
      name: "Burger King",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRf4CL6YtstHxxCTI-HTI7meNWn6Kg-R92zA&usqp=CAU",
      id_:3,
    },
    {
      name: "Taco Bell",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_z_mUkgTKF5XWzqqEGh2TzM5rgh6tQkQsRl6jrYFBTu-iQv_oQJd5MmFiiai7Ce7XDow&usqp=CAU",
      id_:4,
    },
    {
      name: "In-N-Out",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGSliTgJvxZCkxk8LP8sgE9oDpmFd1uMwGlUOM1r9gaNboa78wNysA-oynFXyJX6DXnIg&usqp=CAU",
      id_:5,
    },
  ];

function shuffle(originalDB) {
    for (let i = originalDB.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [originalDB[i], originalDB[j]] = [originalDB[j], originalDB[i]];
    }
    return originalDB;
}
console.log("resurantdb", resurantdb)


  const shufRestDB = shuffle(resurantdb);

  const swiped = (nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  return (
    <div className="dashboard">
      <div className="swipe-container">
        <div className="card-container">
          {shufRestDB.map((singleShufRes) => (
            
            <TinderCard
              className="swipe"
              key={singleShufRes.name}
              onSwipe={(dir) => swiped(dir, singleShufRes.name)}
              onCardLeftScreen={() => outOfFrame(singleShufRes.name)}
            >
            <div className="card-header">
                    <h3>{singleShufRes.name}</h3>
                    <h3>{singleShufRes.id_}</h3>
            </div>
              <div style={{ backgroundImage: "url(" + singleShufRes.url + ")" }} className="card"></div>
               
              <Link className="Resurant-Link" key={singleShufRes.id_} to={`/Resturant/${singleShufRes.id_}`}>
              <button>View This resturant</button>
              </Link>
            </TinderCard>

          ))}
        </div>
      </div>
      
      <Routes>
      <Route path= '/Resturant/:id' element={<SingleResturantView resurantdb ={resurantdb}/>}/>
    </Routes>
    </div>
    
  );
};

export default Dashboard;