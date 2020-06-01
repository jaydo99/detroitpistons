import React from 'react'
import "../css/team.css";
import {Link} from "react-router-dom"
import griffin from "./griffin"

import mykimg from "../../components/images/smallfoward.png"

export default function myk () {
    return (
        <div className="team-page">
        <div className="teamintro">
           
          <div className="playername">
           <h1>	SVIATOSLAV</h1>  
           <h1>MYKHAILIUK</h1>
           <br></br>
           <h2>small foward</h2>
           <br></br>
           <br></br>
           <br></br>
           <Link to ="griffin" className="next-player">NEXT</Link>
           
 
         </div>
         <img src={mykimg} id="myk" alt="pitcture-of-sviatoslav-shooting" />
         
         <h1 className="playernumber"> #19</h1>
         </div>
         
         
         
         
         </div>
    )
}
