import React from 'react'

import "../css/schedule.css";
import raps from "../../components/images/raps.svg";
import blazers from "../../components/images/blazers.svg";
import lakers from "../../components/images/lakers.svg";
import magic from "../../components/images/magic.svg";
import gsw from "../../components/images/gsw.svg";
import bucks from "../../components/images/bucks.svg";
import logo from "../../components/images/logo.svg";


export default function schedule() {
    return (
        <div className="schedule-body">
        <div className="fixture1">
         <div className="team-section">
         <img src={raps} id="fixturelogo" alt="toronto-raptors-logo" />
         <h3>TORONTO RAPTORS</h3>
        </div>
         <div className="game-details">
         <h1>SATURDAY MARCH 14</h1>   
         <h2>SCOTIABANK ARENA, TORONTO, ON</h2>
         <br></br>
         <h3>TV: FOX SPORTS DETROIT RADIO: 97.1 FM THE TICKET</h3>
         </div>
         <div className="team-section">
         <img src={logo} id="pistonslogo" alt="detroit-pistons-logo" />
         <h3>DETROIT PISTONS</h3>
         </div>
       </div>
       <div className="fixture1">
         <div className="team-section">
         <img src={logo} id="pistonslogo" alt="detroit-pistons-logo" />
         <h3>DETROIT PISTONS</h3>
        </div>
         <div className="game-details">
         <h1>TUESDAY MARCH 17</h1>   
         <h2>LITTLE CAESARS ARENA, DETROIT, MI</h2>
         <br></br>
         <h3>TV: FOX SPORTS DETROIT RADIO: 97.1 FM THE TICKET</h3>
         </div>
         <div className="team-section">
         <img src={magic} id="magiclogo" alt="orlando-magic-logo" />
         <h3>ORLAND MAGIC</h3>
         </div>
       </div>
       <div className="fixture1">
         <div className="team-section">
         <img src={logo} id="pistonslogo" alt="detroit-pistons-logo" />
         <h3>DETROIT PISTONS</h3>
        </div>
         
         <div className="game-details">
         <h1>FRIDAY MARCH 20</h1>   
         <h2>LITTLE CAESARS ARENA, DETROIT, MI </h2>
         <br></br>
         <h3>TV: FOX SPORTS DETROIT RADIO: 97.1 FM THE TICKET</h3>
         </div>
         <div className="team-section">
         <img src={gsw} id="gswlogo" alt="golden-state-logo" />
         <h3>GOLDEN STATE WARRIORS</h3>
         </div>
       </div>
       
       <div className="fixture1">
         <div className="team-section">
         <img src={logo} id="pistonslogo" alt="detroit-pistons-logo" />
         <h3>DETROIT PISTONS</h3>
        </div>
         
         <div className="game-details">
         <h1>SUNDAY MARCH 22</h1>   
         <h2>LITTLE CAESARS ARENA, DETROIT, MI</h2>
         <br></br>
         <h3>TV: FOX SPORTS DETROIT RADIO: 97.1 FM THE TICKET</h3>
         </div>
         <div className="team-section">
         <img src={lakers} id="lakerslogo" alt="la-lakers-logo" />
         <h3>LOS ANGELES LAKERS</h3>
         </div>
       </div>
       
       <div className="fixture1">
         <div className="team-section">
         <img src={bucks} id="buckslogo" alt="detroit-pistons-logo" />
         <h3>MILWAUKEE BUCKS</h3>
        </div>
         
         <div className="game-details">
         <h1>MONDAY MARCH 23</h1>   
         <h2>FISERV FORUM, MILWAUKEE, WI</h2>
         <br></br>
         <h3>TV: FOX SPORTS DETROIT RADIO: 97.1 FM THE TICKET</h3>
         </div>
         <div className="team-section">
         <img src={logo} id="pistonslogo" alt="la-lakers-logo" />
         <h3>DETROIT PISTONS</h3>
         </div>
       </div>

       <div className="fixture1">
         <div className="team-section">
         <img src={logo} id="pistonslogo" alt="detroit-pistons-logo" />
         <h3>DETROIT PISTONS</h3>
        </div>
         
         <div className="game-details">
         <h1>WEDNESDAY MARCH 25</h1>   
         <h2>LITTLE CAESARS ARENA, DETROIT, MI </h2>
         <br></br>
         <h3>TV: FOX SPORTS DETROIT RADIO: 97.1 FM THE TICKET</h3>
         </div>
         <div className="team-section">
         <img src={blazers} id="blazerslogo" alt="portland-trailblazers-logo" />
         <h3>PORTLAND TRAILBLAZERS</h3>
         </div>
       </div>
       
        </div>
    )
}
