import React,{Component} from "react";
import "./loginComp.css";
import logo from "./logo.jpg";
import url from "../../config/constants";
class LoginComp extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={"login-background"}>
                <div className={"login-card"}>
                    <img src={logo} alt="logo"/>
                    <h2>Create Your Own Buzz</h2>
                    <a href={url.url} ><input type="button" value={"G Sign in with Google"}/></a>
                </div>
            </div>
        );
    }
}
export default LoginComp;



