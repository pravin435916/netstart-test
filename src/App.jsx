import React from 'react'
import Home from './component/Home'
import Products from './component/Products'
import Footer from './component/Footer'

function App() {
  return (
    <div className='w-full h-full relative  bg-gradient-to-b from-white to-[#FCF8C6] overflow-hidden'>
      <Home />
      <Products />
      <Footer/>
    </div>
  )
}

export default App