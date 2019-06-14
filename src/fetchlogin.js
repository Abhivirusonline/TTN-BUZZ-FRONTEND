import React,{Component} from "react";

class FetchLogin extends Component{
    constructor(props){
        super(props);
    }

render() {
    var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    console.log("cookie value",cookieValue);
    localStorage.setItem("token",cookieValue);
    var newvar = localStorage.getItem(("token"));
    console.log("newvar", newvar);
    return(
        <div>
            hello
        </div>
    );
}

}


export default FetchLogin;
