import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './Nav.css'
function Nav() {
  return (
    <nav className='nav'>
        <ul>
          <li><Link to="/">Bosh sahifa</Link> </li>
          <li><Link to="/fired-users">Ishdan bo'shatilganlar</Link></li>
        </ul>
  
    </nav>
  )
}

export default Nav