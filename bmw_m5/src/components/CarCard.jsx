import React from 'react'

function CarCard({ imgURL, changecarImg,
    carImg }) {

        const handleClick = () =>{
            console.log(imgURL);
            
            if(carImg !== imgURL.carImg){
                changecarImg(imgURL.carImg)
            }
        }

    return (
        <div className={`border-2 rounded-xl  ${carImg === imgURL.carImg ? 'border-coral-red': 'border-transparent'} cursor-pointer max-sm:flex-1 `} onClick={handleClick}>
            <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
                <img src={imgURL.thumbnail} alt="shoe collection" width={127} height={103} className='object-contain'/>
            </div>
        </div>
    )
}

export default CarCard
