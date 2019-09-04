import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav mr-auto" >
          <li class="nav-item">
            <NavLink exact class="nav-link" to="/bookcases">My Bookcases</NavLink>
          </li>
          <li class="nav-item">
            <NavLink exact class="nav-link" to="/bookcases/new" >New Bookcase</NavLink>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar