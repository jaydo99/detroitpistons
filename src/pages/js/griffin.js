import React from 'react'
import "../css/team.css";
import martin from "./martin"
import {Link} from "react-router-dom"



import blakeg from "../../components/images/griffin.png"

export default function griffin() {
    return (
        <div className="team-page">
        <div className="teamintro">
           
          <div className="playername">
           <h1>BLAKE </h1>  
           <h1>GRIFFIN</h1>
           <br></br>
           <h2>power foward</h2>
           <br></br>
           <br></br>
           <br></br>
           <Link to ="martin" className="next-player">NEXT</Link>
           
           
 
         </div>
         <img src={blakeg} id="griffin" alt="pitcture-of-blake-griffin" />
         
         <h1 className="playernumber"> #23</h1>
         </div>
         
         
         
         
         </div>
    )
}
