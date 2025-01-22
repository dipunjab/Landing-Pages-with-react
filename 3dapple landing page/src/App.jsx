import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'

function App() {
  return (
    <div className='w-full h-screen font-["Helvetica_Now_Display"]'>
      <div className='navbar flex gap-10 py-10 absolute top-0 left-1/2 -translate-x-1/2'>
        {["iphone","iPad", "services","mac", "products"].map(e => <a href='' className='text-white font-[500] text-md'>{e}</a>)}
      </div>
      <div className='absolute flex flex-col items-center text-white top-24 left-1/2 -translate-x-1/2 '>
        <h3 className='masked text-6xl tracking-tighter font-[700]'>macbook pro.</h3>
        <h4>Oh pro!</h4>
        <p className='text-center w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repellat, esse quibusdam illo</p>
      </div>
    <Canvas camera={{ fov: 20, position: [0, -10, 220] }}>
      {/* <OrbitControls/> */}
      <Environment
        files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",]} />
      <ScrollControls pages={3}>
        <MacContainer />
      </ScrollControls>
    </Canvas>
    </div>
  )
}

export default App
