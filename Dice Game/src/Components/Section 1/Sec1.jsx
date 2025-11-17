import React from 'react'
import S1img from './S1img'
import SecText from './SecText'

const Sec1 = ({play}) => {
  return (
    <div className="w-full h-full flex justify-center">
        <div className="flex justify-between items-center ">
          <S1img />
          <SecText playgame={play} />
        </div>
      </div>
  )
}

export default Sec1
