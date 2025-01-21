import React, { useEffect, useState } from 'react'
import Background from './components/Background/background'
import Navbar from './components/Navbars/navbar'
import Hero from './components/Heros/hero'

function App() {
  let heroData = [
    {text1: "Unleash the Power", text2:"Drive the M5."},
    {text1: "BMW M5", text2:"Engineered for Excellence."},
    {text1: "M5", text2:"The Ultimate Driving Machine."},
  ]
  const [heroCount, setHeroCount] = useState(0)
  const [playStatus, setPlayStatus] = useState(false)

  useEffect(()=>{
   const intervalId = setInterval(()=>{
      setHeroCount((count)=> {
        return count===2? 0 : count + 1
      })
    },3000)
    return () => clearInterval(intervalId);
  },[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar />
      <Hero 
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App
