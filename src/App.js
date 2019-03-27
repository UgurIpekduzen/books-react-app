import React, { Component } from 'react';
import Create from './components/Create';
import SearchAndList from './components/SearchAndList';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Detail from './components/Detail';
export class App extends Component {
  

  render() {
    return (
      <Router>
        <div className="App container"> 
          <Route exact path = "/" component = {SearchAndList}/>
          <Route exact path = "/detail/:id" component = {Detail}/>
          <Route exact path = "/create" component = {Create}/>
        </div>
      </Router>
    )
    
  }
}

export default App
