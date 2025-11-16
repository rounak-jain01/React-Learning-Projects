import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[12%] flex justify-between px-10'>
      <div className='ml-15 h-full'>
        <img src="/images/Frame 2 1.png" alt="" />
      </div>
      <div className='mr-15'>
        <ul className='flex gap-15 h-full items-center'>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Support Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
