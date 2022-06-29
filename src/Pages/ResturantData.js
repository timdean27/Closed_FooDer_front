import React, { useState , useEffect} from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Resturant from '../Components/Resturant'
import SingleResturantView from '../Components/SingleResturantView'
const ResturantData = () => {
    const restaurantdb = [
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


  return (

        <Routes>
        <Route path= '/Resturant' element={<Resturant restaurantdb={restaurantdb}/>}/>
        <Route path= '/Resturant/:id' element={<SingleResturantView restaurantdb={restaurantdb}/>}/>
        </Routes>

  )
}

export default ResturantData