import React from 'react'
import "../css/team.css";
import {Link} from "react-router-dom"

import kennard from "./kennard"

import rose from "../../components/images/rose.png";



export default function team() {
    return (
       
       <div className="team-page">
       <div className="teamintro">
          
         <div className="playername">
          <h1>DERRICK </h1>  
          <h1>ROSE</h1>
          <br></br>
          <h2>point guard</h2>
          <br></br>
          <br></br>
          <br></br>
          <Link to ="kennard" className="next-player">NEXT</Link>
          

        </div>
        <img src={rose} id="rose" alt="pitcture-of-derrick-rose" />
        
        <h1 className="playernumber"> #25</h1>
        </div>
        
        
        
        
        </div>
    )

}
