import React, { useState } from 'react'

const SecText = ({playgame}) => {
  return (
    <div className='font-display flex flex-col gap-5'>
      <h1 className='font-extrabold text-7xl w-full'>DICE GAME</h1>
      <button
      onClick={() => playgame(true)}
      className='w-[50%] font-bold py-2 cursor-pointer bg-black text-white flex justify-center self-end hover:bg-gray-300 outline-none hover:text-black'>Play Now</button>
    </div>
  )
}

export default SecText
