import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import TinderCard from "react-tinder-card";
import SingleResturantView from "./SingleResturantView";
import "../Styles/index.css";
const Resturant = ({restaurantdb}) => {
    const [cardDataLength, setcardDataLength] = useState(restaurantdb.length-1);
    console.log("restaurantdb", restaurantdb)
    console.log("cardDataLength1", cardDataLength)


    // function shuffle(originalDB) {
    //     for (let i = originalDB.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [originalDB[i], originalDB[j]] = [originalDB[j], originalDB[i]];
    //     }
    //     return originalDB;
    // }
    // console.log("restaurantdb", restaurantdb)
    // const shufRestDB = shuffle(restaurantdb);



      const swiped = (dir, nameToDelete) => {
        console.log("swipe ", dir);
        console.log("removing: ",nameToDelete);

      };

      const lowerCount = () => {
        setcardDataLength(cardDataLength-1)
        console.log("cardDataLength2 inside lower count funciton", cardDataLength)
        console.log("restaurantdb inside lower count funciton", restaurantdb)
        };
    
      const outOfFrame = (name) => {
        console.log(name, " left the screen!");
      };

      return (
        <div className="dashboard">
          <div className="swipe-container">
                <div className="card-header">
                    <h3>{restaurantdb[cardDataLength].name}</h3>
                    <h3>{restaurantdb[cardDataLength].id_}</h3>
                </div>
            <div className="card-container">
          
              {restaurantdb.map((singleShufRes) => (
                
                <TinderCard
                  className="swipe"
                  key={singleShufRes.name}
                  onSwipe={(dir) => {swiped(dir, singleShufRes.name); lowerCount()}}
                  onCardLeftScreen={() => {outOfFrame(singleShufRes.name); lowerCount()}}
                >
                
                  <div style={{ backgroundImage: "url(" + singleShufRes.url + ")" }} className="card"></div>
                   
                  
                </TinderCard>
    
              ))}
             
            </div>
            
          </div>
          <Link className="Resturant-Link" key={restaurantdb[cardDataLength].id_} to={`/Resturant/${restaurantdb[cardDataLength].id_}`}>
            <button className="nav-btn">
            View This resturant {restaurantdb[cardDataLength].name}
            </button>
          </Link>
    
            <Routes>
                    <Route path= '/Resturant/:id' element={<SingleResturantView restaurantdb ={restaurantdb}/>}/>
            </Routes>
        </div>
)}

export default Resturant