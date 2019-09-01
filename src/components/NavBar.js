import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink exact activeClassName="active" to="/bookcases"  >My Bookcases</NavLink>
      <NavLink exact activeClassName="active" to="/bookcases/new" >New Bookcase</NavLink>
    </div>
  )
}

export default NavBar