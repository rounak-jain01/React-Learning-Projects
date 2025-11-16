import React from 'react'
import FormD from './FormD'
import FormImage from './FormImage'

const ContactForm = () => {
  return (
    <div className='w-[75%] ml-[15%] flex justify-between'>
        <FormD/>
        <FormImage/>
    </div>
  )
}

export default ContactForm
