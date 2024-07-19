
// "use client";

import React from 'react'
import NavLinks from './NavLinks'
import NavSearch from './NavSearch'

const Navbar = () => {
    console.log("Navbar rendered...")
  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <NavLinks />
      <NavSearch />
    </div>
  )
}

export default Navbar
