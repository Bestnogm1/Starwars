import './StarShipinfo.css'
import React,{useState}from 'react';
import { useLocation } from 'react-router-dom'

const StarshipPAge =(props)=>{
  const [starshipDetail, setStarshipDetail] =useState([])
  let starship= useLocation().state.starship
  // location.state.starship
  console.log(starship);

  return (
    <div className="star"> 
    <div className="profile">
      <h1>Name: {starship.name}</h1>
      <h1>Modle: {starship.model}</h1>
      <a href="/starship"> return</a>
    </div>
    </div>
  )
  
} 


export default StarshipPAge;