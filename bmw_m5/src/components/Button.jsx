import React from 'react'

function Button({label, iconURL, backgroundColor, textColor, borderColor,fullWidth}) {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none rounded-full
      ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 
        `bg-blue-800 text-white border-blue-900`} ${fullWidth && 'w-full'}`}>
        {label}
          {iconURL && 
          <img src={iconURL} alt="arrowright" className='ml-2 rounded-full w-5 h-5' />
          }
      </button>  )
}

export default Button
