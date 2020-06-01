import React from 'react'
import "../css/team.css";
import {Link} from "react-router-dom"
import team from "./team"

import martinimg from "../../components/images/martin.png"

export default function martin() {
    return (
        <div className="team-page">
        <div className="teamintro">
           
          <div className="playername">
           <h1>CHRISTIAN </h1>  
           <h1>WOOD</h1>
           <br></br>
           <h2>shooting guard</h2>
           <br></br>
           <br></br>
           <br></br>
           <Link to ="team" className="next-player">NEXT</Link>
           
 
         </div>
         <img src={martinimg} id="wood" alt="picture-of-christian-wood" />
         
         <h1 className="playernumber"> #35</h1>
         </div>
         
         
         
         
         </div>
    )
}
