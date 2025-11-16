import React from 'react'
import LeftHome from './LeftHome'
import RightHome from './RightHome'

const Home = () => {
  return (
    <div className='flex w-full h-screen py-5 px-0 relative'>
      <LeftHome/>
      <RightHome/>
      
    </div>
  )
}

export default Home
