import React,{Component} from "react";
import "./userBlock.css";
import {connect} from "react-redux";

class UserBlock extends Component{
    constructor(props) {
        super(props);

    }


    componentDidMount() {

    }
    render() {
        return(
            <div className={"user-block"}>

            </div>
        );
    }
}

const takestoredata=state=>{
    return {user:state.userReducer.userData}
}

export default connect(takestoredata)(UserBlock);