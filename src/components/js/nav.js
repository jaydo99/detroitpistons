import React from 'react'
import {Link} from "react-router-dom"

import logo from "../images/logo.svg";
import "../css/nav.css";


export default function Nav() {
    return (
        <div className="main-nav">
         <div className="logo">
         <Link to ="home" className="logo-link"><img src={logo} id="logo" alt="logo" /></Link>
    
         </div>
          <nav>
         <Link to ="team" className="nav-link">MEET THE TEAM</Link>
          <Link to ="Schedule" className="nav-link">UPCOMING GAMES</Link>
          <a href= "https://pistonslockerroomstore.com/" className="nbastore"> MERCHANDISE </a>
          
         </nav>

        </div>
    )
}

