import React from 'react'
import "../css/team.css";

import rose from "../../components/images/rose.png";


export default function team() {
    return (
        <div className="teamintro">
          <div className="playername">
          <h1>Derrick Rose</h1>  
          <h2>Point Guard</h2>
        </div>
        <img src={rose} id="rose" alt="pitcture-of-derrick-rose" />
        <h1> #25</h1>
        </div>
    )
}
