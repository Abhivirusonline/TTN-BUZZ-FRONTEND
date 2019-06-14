import React,{Component} from "react";
import "./profile.css";
class Profile extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {displayName,photoURL,email,isAdmin}=this.props.user;
        return(
            <div className={"profile"}>
                <img src={photoURL} alt="profile photo" width={"200"} height={"240"}/>
                <h3>{displayName}</h3>
                <h4>{email}</h4>
                <label htmlFor="admin status">{""+isAdmin}</label>
            </div>
        );
    }
}
export default Profile;