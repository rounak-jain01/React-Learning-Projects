import React from 'react'
import {MessageSquareText} from 'lucide-react'

const FormButton = ({text, icon, isOutline}) => {
  return (
    <div className={`w-full`}>
      <button
      className={`min-w-full cursor-pointer flex gap-2 justify-center px-5 py-2 ${isOutline?"border":"bg-black text-white"}`}
      >
        {icon}
        {text}
      </button>
    </div>
  )
}

export default FormButton
