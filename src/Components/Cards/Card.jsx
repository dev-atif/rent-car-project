import React from 'react'


function Card({icon,title,color,description}) {
  return (
    <div className='border-2  flex flex-col items-center rounded-lg cursor-pointer hover:scale-[1.03] transition ease-in duration-150 h-full'>
        <div className={`${color ? "bg-[#fd8d14]" : "bg-[#0d274e]"} text-white inline-block p-3 rounded-[50%] absolute translate-y-[-50%] shadow-lg`}><span className='text-4xl md:text-6xl'>{icon}</span></div>
        <div className='bg-[#f2f4f9] w-full p-10 md:p-12'></div>        
        <div className='flex justify-center items-center flex-col mt-5'>
          <h1 className='font-semibold text-xl lg:text-2xl p-2'>{title}</h1>
          <p className='text-base p-2 text-center'>{description}</p>
        </div>
    </div>
  )
}

export default Card
