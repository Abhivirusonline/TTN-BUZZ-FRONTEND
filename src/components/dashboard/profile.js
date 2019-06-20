import React,{Component} from "react";
import "./profile.css";
import logo from "./20745.jpg";
class Profile extends Component{
    constructor(props) {
        super(props);
    }
    render() {
      //  const {displayName,photoURL,email,isAdmin}=this.props.user;
        return(
            <div className={"profile"}>
                <div className="card">
                    <img src={logo} alt="Avatar" style={{width:"100%"}}/>
                        <div className="container">
                            <h4><b>Abhishek Yadav</b></h4>
                        </div>
                </div>
            </div>
        );
    }
}
export default Profile;