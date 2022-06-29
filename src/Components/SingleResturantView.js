import React from 'react'
import { useState} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'

const SingleResturantView = ({restaurantdb}) => {
    console.log("restaurantdb", restaurantdb)
    const navigate = useNavigate()
    const { id } = useParams()
    console.log("id", id )
    // let resturantCurrent = restaurantdb.find(restaurant => restaurant._id == id)
    let resturantCurrent = []
  restaurantdb.map((restaurantWeWant) => {
      console.log("restaurantWeWant.id_", restaurantWeWant.id_)
      if(restaurantWeWant.id_ == id) {
        resturantCurrent.push(restaurantWeWant)
        console.log("resturantCurrent", resturantCurrent)
        return resturantCurrent
      }
    })
    console.log("resturantCurrent", resturantCurrent)
   
    const loadedResturant = () => {
      return (
      <div>
      {resturantCurrent.map((displayResturant) => (
      <div>
      <h3>{displayResturant.name}</h3>
      <h3>{displayResturant.id_}</h3>
      <img className ="Single-restaurant-View-Img" src={displayResturant.url} alt={displayResturant.name} />
      </div>
      ))}
    </div>
    )}

   const loadingResturant = () => {
    return <h1>Loading.........</h1>
  }

  return (
    <div>
    {restaurantdb ? loadedResturant() : loadingResturant()}
    </div>
  )
}

export default SingleResturantView