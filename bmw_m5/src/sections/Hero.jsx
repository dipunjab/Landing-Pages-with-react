import React, { useState } from 'react'

import Button from '../components/Button'
import { cars } from '../constants'
import m51  from "../assets/images/m51.png";
import CarCard from '../components/CarCard';

const Hero = () => {
  const [carImg, setcarImg] = useState(m51);

  return (
    <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-1 max-container lg:px-1 px-20'>
      <div className='pt-27 w-full xl:w-2/5'>
        <h1 className='mt-10 font-serif text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='font-sans text-gray-700 drop-shadow-lg'>BMW M5</span>
          <span className='text-red-950'> Power </span>
          <span className='text-blue-950'> Redefined </span>
        </h1>
        <p className='text-slate-700 text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
        Track-bred performance. Uncompromising luxury.
        </p>
        <Button label="Explore"/>
      </div>


      <div className='relative flex justify-center items-center xl:min-h-screen max-xl:py-40'>
        <img
          src={carImg}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {cars.map((image, index) => (
            <div key={index}>
              <CarCard
                index={index}
                imgURL={image}
                changecarImg={(car) => setcarImg(car)}
                carImg={carImg}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero
