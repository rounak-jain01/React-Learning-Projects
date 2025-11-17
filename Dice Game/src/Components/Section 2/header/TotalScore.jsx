import React from 'react'

const TotalScore = ({score}) => {
  return (
    <div className='flex w-fit flex-col font-semibold justify-end items-center'>
      <h1 className='text-6xl'>{score}</h1>
      <p className='text-lg leading-none'>Total Score</p>
    </div>
  )
}

export default TotalScore
