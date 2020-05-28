import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";


import './App.css';
import Nav from "./components/js/nav";
import home from "./pages/js/home";
import team from "./pages/js/team";
import schedule from "./pages/js/schedule";







function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
      <Route path="/home" component={home}/>
      <Route path="/team" component={team}/>
      <Route path="/schedule" component={schedule}/>
    </Router>
    
     
    

    </div>


  
  );
}

export default App;
