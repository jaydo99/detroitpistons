import React from 'react'
import "../css/home.css";
import  "../js/team"
import {Link} from "react-router-dom"


import cover from "../../components/images/title.jpg";
import teamimage from "../../components/images/img1.jpg";
import scheduleimage from "../../components/images/img3.jpg";
import merchimage from "../../components/images/img4.jpg";

export default function home() {
    return (
        <div className="landing-page">
        <img src={cover} id="cover" alt="picture-of-detroit-stadium" />
      
         <div className="meet-team-preview">
         <div className="container1">
         <img src={teamimage} id="img1" alt="picture-of-detroit-stadium" />
         </div>
         <div className= "container2">
         <h1>MEET THE TEAM</h1>
         <h2>Get to know your detroit pistons. Explore through the most recent starting line up before you see them on the floor!
          
    </h2>
         <br></br> <br></br>
         <Link to ="team" className="homepage-link">Find out more</Link>
         </div>
         </div>
         
         <div className="schedule-preview">
         <div className="container1">

         <h1>UPCOMING GAMES</h1>
         <h2>Have a look at game schedule for the Detroit Pistons to find information on who they are playing next.  </h2>
         <br></br><br></br>
       
         <Link to ="schedule" className="homepage-link">Find out more</Link>
         </div>
         <div className= "container2">
         
         <img src={scheduleimage} id="img3" alt="picture-of-detroit-stadium" />
         </div>
         </div>
         
         <div className="merch-preview">
         <div className="container1">
         <img src={merchimage} id="img4" alt="picture-of-detroit-stadium" />
         </div>
         <div className= "container2">
         <h1>MERCHANDISE</h1>
         <h2>Support your Detroit Pistons both on and off the court with the newest player apparel and supporter wear.</h2>
         <br></br><br></br>
         <a href= "https://pistonslockerroomstore.com/"> Shop here </a>
         </div>
         </div>
        
        </div>

        
    
    )
}
