import React from 'react'
import { Outlet ,useOutletContext } from 'react-router-dom'

const DeveloperPage = () => {
      const inputChange = useOutletContext();

  return (
    <>
    <section className="py-4 w-100">
           <Outlet context={inputChange}/>
        
        </section>
    </>
    
  )
}

export default DeveloperPage
