import React from 'react'
import { NavLink } from 'react-router-dom'
import './Links.css'

const Links = ({ menu }) => {
  const {name, pathName} = menu;

  
  return (
    <NavLink className={`nav-item font-bold text-purple-600 transition-all ${({ isActive}) =>isActive ? "active" : ""}`} to={pathName}>{name}</NavLink>

  )
}

export default Links
