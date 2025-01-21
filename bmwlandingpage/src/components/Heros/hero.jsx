import React from 'react'
import "./hero.css"
import arrow from "../../assets/arrow.png"
import play from "../../assets/play.png"
import pause from "../../assets/pause.png"

function Hero({setPlayStatus,heroData,heroCount,setHeroCount,playStatus}) {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow} alt="" className='arrow'/>
      </div>
      <div className="hero-play">
        <ul className="hero-dots">
          <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
        </ul>
        <div className='hero-play'>
          <img className='playpause' onClick={()=>setPlayStatus(!playStatus)} src={playStatus? pause: play} alt="" />
          <p>See the video</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
