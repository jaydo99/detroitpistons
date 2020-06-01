import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";


import './App.css';
import Nav from "./components/js/nav";
import home from "./pages/js/home";
import team from "./pages/js/team";
import schedule from "./pages/js/schedule";
import kennard from "./pages/js/kennard"
import blakeg from "./pages/js/griffin"
import myk from "./pages/js/mykhailiuk"
import martin from "./pages/js/martin"








function App() {
  return (
    
    <div className="App">
      
      <Router>
      <Nav/>
      
      <Route path="/home" component={home}/>
      <Route path="/team" component={team}/>
      <Route path="/schedule" component={schedule}/>
      <Route path="/griffin" component={blakeg}/>
      <Route path="/kennard" component={kennard}/>
      <Route path="/myk" component={myk}/>
      <Route path="/martin" component={martin}/>

    </Router>
     
     <home/>
     
    

    </div>
  

  
  );
}



export default App;
