import React from 'react'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import ContactForm from './components/ContactForm'

const App = () => {
  return (
    <div className='h-screen w-screen font-display overflow-x-hidden '>
        <Navbar/>
        <Contact/>
        <ContactForm/>
    </div>
  )
}

export default App
