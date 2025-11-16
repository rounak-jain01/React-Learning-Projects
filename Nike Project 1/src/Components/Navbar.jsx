import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between font-display font-semibold items-center h-[72px] px-20'>
      <div>
        <img src="/brand_logo.png" alt="" />
      </div>
      <div>
        <ul className='flex gap-6'>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <button className='bg-[#D01C28] px-5 py-2 text-white'>Login</button>
      </div>
    </div>
  )
}

export default Navbar
