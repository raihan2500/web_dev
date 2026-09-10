import React from 'react'
import { Outlet } from 'react-router-dom'
function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products"></a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/contact">contact</a></li>
      </ul>
      <Outlet />
    </nav>
  )
}

export default Navbar