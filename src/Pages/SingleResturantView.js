import React from 'react'
import { useState} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'

const SingleResturantView = ({resurantdb}) => {
    console.log("resurantdb", resurantdb)
    const navigate = useNavigate()
    const { id } = useParams()
    console.log("resurantdb", id )
    let resturantCurrent = resurantdb.find(resturant => resturant.id_ === id)
  return (
    <div>
  
    <h3>{resturantCurrent.name}</h3>
    <h3>{resturantCurrent.id_}</h3>
    <img className ="Single-Resurant-View-Img" src={resturantCurrent.url} alt={resturantCurrent.name} />
  </div>
  )
}

export default SingleResturantView