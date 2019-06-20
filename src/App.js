import React,{Component} from 'react';
import {BrowserRouter as Router,Link,NavLink,Route,Redirect,Switch} from "react-router-dom";
import './App.css';
import LoginComp from "./components/loginComponent/loginComp";
import Dashboard from "./components/dashboard/dashboard";
import FetchLogin from "./fetchlogin";
import Header from "./components/Header/Header";
import axios from "axios";
import PostBuzz from './components/buzz/postBuzz';
import Buzz from "./components/buzz/Buzz";
import Profile from './components/dashboard/profile';
import constant from "./config/constants";
import Complaints from "./components/complaints/complaints";
class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            isAuth:false,
            loading:true,
            user:{},
            isAdmin:true,
        }
    }
    handleLogin =() => {
        let token=localStorage.getItem(('token'));
        alert("token is :"+token);
        if(token){
            axios.get(constant.profileAPI,{
                headers:{
                    "authorization":token
                }
            })
                .then(result=>{
                    this.setState({
                        isAuth:true,
                        loading:false,
                        user:result.data
                    })
                })
                .catch(err=>{
                    console.log("error occurred in axios get");
                })
        }
        else
        {
            this.setState({
                loading:false
            })
        }
    }



    render() {
    return (
        <div className="App">
         {/*<Router>*/}
         {/*    <Header isAdmin={this.state.isAdmin}/>*/}
         {/*    <Route*/}
         {/*    exact path={"/login"}*/}
         {/*    component={()=><LoginComp/>}*/}
         {/*    />*/}
         {/*     <Route*/}
         {/*       exact path={"/dashboard"}*/}
         {/*       component={()=>(*/}
         {/*        <Dashboard handleLogin={this.handleLogin} state={this.state}/>*/}
         {/*       )}*/}
         {/*     />*/}
         {/* </Router>*/}
         <Profile/>
         <PostBuzz/>
         <Buzz/>
        </div>
    );
  }
}

export default App;
