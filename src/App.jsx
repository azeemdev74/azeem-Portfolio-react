import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Experience from './components/Experience/Experience'

const App = () => {
  
  return (
    <div>
      
      <Navbar/>
      <Hero />
      <About />
      <Services />
      <Experience/>

    </div>
  )
}

export default App
