// import React from 'react'

import { Outlet } from "react-router-dom"


// import Layout from "./Layout"

function Appointment() {
  document.title='Appointment'
  return (
    <>
    <Outlet/>
    </>
    
  )
}

export default Appointment