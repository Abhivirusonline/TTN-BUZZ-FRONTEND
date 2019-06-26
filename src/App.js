import React,{Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Routes from "./routes"
class App extends Component{
    constructor(props) {
        super(props);
    }

    render() {
    return (
        <div className="App">
         <Router>
             <Routes/>
          </Router>
        </div>
    );
  }
}

export default App;
