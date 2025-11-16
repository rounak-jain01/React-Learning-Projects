import React from 'react'

const Rphoto = (props) => {
  return (
     <div className="h-[75%] relative ">
          <img
            className="h-full w-full object-cover rounded-3xl "
            src={`${props.image}`}
            alt=""
          />
            
          <div className={`absolute bottom-20 flex left-${props.left} gap-${props.gap} text-white border font-display font-bold`}>
            <div className="text-2xl">
              <h1>Writing <br /> Course</h1>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-4xl">100</h2>
              <p>Topics</p>
            </div>
          </div>
          
        </div>
  )
}

export default Rphoto
