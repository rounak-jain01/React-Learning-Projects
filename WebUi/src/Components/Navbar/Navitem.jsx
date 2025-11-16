import React from 'react'

function Navitem(props) {
  return (
    <>
      <ul className=" relative ">
          <li className="relative group">
            <span className="relative z-10">{props.tab}</span>

            <span className="absolute left-0 bottom-0 w-full h-2 bg-green-800 opacity-60 origin-bottom transform scale-y-0 group-hover:scale-y-150 transition-transform duration-300 ease-out z-0"/>
          </li>
        </ul>
    </>
  )
}

export default Navitem
