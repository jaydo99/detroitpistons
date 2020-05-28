import React from 'react'
import "../css/home.css";

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
         <h2>Get to know the starting line-up in this new interactive feature</h2>
         </div>
         </div>
         
         <div className="schedule-preview">
         <div className="container1">

         <h1>UPCOMING GAMES</h1>
         <h2>Learn some history djfcrcrhfj</h2>
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
         <h2>Get to know the starting line-up in this new interactive feature</h2>
         </div>
         </div>
        
        </div>

        
    
    )
}
