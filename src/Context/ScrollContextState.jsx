import React from 'react'
import ScrollContext from './ScrollContext'

const ScrollContextState = (props) => {
    const scrollToSection=(id)=>{
  
        const section= document.getElementById(id);
        if (section) {
          section.scrollIntoView({behavior:'smooth'})
        
        
        }
        }

  return (
    <ScrollContext.Provider value={{scrollToSection}}>
        {props.children}
    </ScrollContext.Provider>
  )
}

export default ScrollContextState
