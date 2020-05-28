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
         <Link to ="team" className="nav-link">Meet the Team</Link>
          <Link to ="Schedule" className="nav-link">Upcoming Games</Link>
          <Link to ="https://www.nbastore.co.nz/stores/nba/en/c/shop-by-team/eastern/detroit-pistons" className="nav-link">Merchandise</Link>
          
         </nav>

        </div>
    )
}

