import React,{Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Routes from "./routes"
import {ToastContainer,Slide} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
class App extends Component{
    render() {
    return (
        <div className="App">
            <ToastContainer
                pauseOnFocusLoss={false}
                newestOnTop={true}
                transition={Slide}
            />
         <Router>
             <Routes/>
          </Router>
        </div>
    );
  }
}

export default App;
