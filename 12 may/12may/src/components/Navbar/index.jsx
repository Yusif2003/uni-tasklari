import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{background:'blue',height:"80px"}}>
      <ul style={{listStyle:"none",display:"flex",justifyContent:"center"}}>
      <li style={{marginTop:'30px'}}>
        <Link to="/">Drivers</Link>
      </li>
      <li style={{marginTop:'30px'}}>
        <Link to="/Favorites">Favorites</Link>
      </li>
      </ul>
      
    </div>
  )
}

export default Navbar;