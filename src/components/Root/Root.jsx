import { height } from '@fortawesome/free-brands-svg-icons/fa42Group'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {

  return (
    <div style={{height: "100vh", width: "100vw"}}>
    <Outlet />
    </div>

  )
}