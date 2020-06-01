import React from 'react'
import "../css/team.css";
import {Link} from "react-router-dom"
import myk from "./mykhailiuk"

import kennardimg from "../../components/images/kennard.png"

export default function kennard() {
    return (
        <div className="team-page">
        <div className="teamintro">
           
          <div className="playername">
           <h1>LUKE </h1>  
           <h1>KENNARD</h1>
           <br></br>
           <h2>shooting guard</h2>
           <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
           <Link to ="myk" className="next-player">NEXT PLAYER></Link>
           
 
         </div>
         <img src={kennardimg} id="kennard" alt="picture-of-luke-kennard" />
         
         <h1 className="playernumber"> #5</h1>
         </div>
         
         
         
         
         </div>
    )
}
