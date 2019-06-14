import React,{Component} from "react";
//import {BrowserRouter as Router,Link,Route,Switch,Redirect} from "react-router-dom";
import Profile from "./profile";
import axios from "axios";
import constant from '../../config/constants';
import CreateBuzz from "../buzz/CreateBuzz";

class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.state={
            isAuth:false,
            loading:true,
            user:{}
        }
    }
    componentWillMount() {
        let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        localStorage.setItem("token",cookieValue);
    }

    componentDidMount() {
    let token=localStorage.getItem(('token'));
    axios.get(constant.profileAPI,{
        headers:{
                "Authorization":token
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
    render() {
        return(
            <div>
                <Profile user={this.state.user}/>
                <CreateBuzz/>
            </div>
        );
    }
}

export default Dashboard;