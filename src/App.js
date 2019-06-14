import React,{Component} from 'react';
import {BrowserRouter as Router,Link,NavLink,Route,Redirect,Switch} from "react-router-dom";
import './App.css';
import LoginComp from "./components/loginComponent/loginComp";
import Dashboard from "./components/dashboard/dashboard";
import FetchLogin from "./fetchlogin";
import Header from "./components/Header/Header";

class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            isAuth:false,
            username:'',
            isAdmin:true,
        }
    }
    handleLogin = data => {
         this.setState({
             isAuth:true,
             username:data.displayName
         })
    }
    render() {
    return (
        <div className="App">
         <Router>
             <Header isAdmin={this.state.isAdmin}/>
             <Route
             exact path={"/login"}
             component={()=><LoginComp/>}
             />
              <Route
                exact path={"/dashboard"}
                component={()=>(
                 <Dashboard handleLogin={this.handleLogin}/>
                )}
              />
          </Router>
        </div>
    );
  }
}

export default App;
