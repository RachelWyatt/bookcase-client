import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto" >
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/bookcases">My Bookcases</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/bookcases/new" >New Bookcase</NavLink>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar