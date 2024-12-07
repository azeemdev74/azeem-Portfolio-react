import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  useEffect(() => {
   
  window.scrollTo(0,0)
   
  }, [])
  
  
  return (
    <div>
      
      <Navbar/>
      <Hero />
      <About />
      <Services />
      <Experience/>
      <Contact />
      <Footer />

    </div>
  )
}

export default App
