import { BiUserCircle } from "react-icons/bi"; 
import React from 'react'
import Menu from "./Menu";
import TemporaryDrawer from "./Drawer";

const Navbar = ({title}) => {
  return (
    <div className='bg-white h-16 flex w-full justify-between items-center text-3xl px-4 '>
      <TemporaryDrawer/>
      <h1>{title}</h1>
      <Menu/>

    </div>
  )
}

export default Navbar
