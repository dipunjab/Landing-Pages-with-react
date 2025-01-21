import React from 'react'
import "./background.css"
import videobmw from "../../assets/videobmw.mp4"
import green from "../../assets/green.jpg"
import black from "../../assets/black.jpg"
import red from "../../assets/red.jpg"
import white from "../../assets/white.jpg"
import steernig from "../../assets/steernig.jpg"
import bmwm5logo from "../../assets/bmwm5logo.png"

function Background({playStatus , heroCount}) {
 
  if (playStatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={videobmw} type='video/mp4'/>
      </video>
    )
  }
  else if(heroCount === 0){
    return (
      <img src={green} alt="" className='background'/>
    )
  }
  else if(heroCount === 1){
    return (
      <img src={white} alt="" className='background'/>
    )
  } 
  else if(heroCount === 2){
    return (
      <img src={red} alt="" className='background'/>
    )
  }
  
}

export default Background
