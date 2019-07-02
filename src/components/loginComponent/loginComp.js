import React,{Component} from "react";
import "./loginComp.css";
import logo from "./logo.jpg";
import constant from "../../config/constants";
class Login extends Component{
    componentDidMount() {
        if(localStorage.getItem('token'))
            this.props.history.push('/dashboard')
    }
    render() {
        return(
            <div className={"login-background"}>
                <div className={"login-card"}>
                    <img src={logo} alt="logo"/>
                    <h2>Create Your Own Buzz</h2>
                    <a href={constant.AuthURL} ><input type="button" value={"Sign in with Google"}/></a>
                </div>
            </div>
        );
    }
}
export default Login;



