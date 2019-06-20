import React,{Component} from "react";
import {BrowserRouter as Router,Link,Route,Switch,Redirect} from "react-router-dom";
import Profile from "./profile";
import axios from "axios";
import constant from '../../config/constants';
import CreateBuzz from "../buzz/Buzz";

class Dashboard extends Component{
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        localStorage.setItem("token",cookieValue);
    }

    componentDidMount() {

    }
    render() {
        let {isAuth,loading}=this.props.state;
        return(loading?
                <h2 onLoad={this.props.state.handleLogin}>Loading......</h2>
                :
                isAuth?
                <div>
                    <Profile user={this.props.state.user}/>
                    <CreateBuzz/>
                </div>
                 :
                 <Redirect to={'./login'}/>
        );
    }
}

export default Dashboard;