import React,{Component} from "react";
import "./sidenav.css";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {fetchUser} from "../../actions/user.actions";

class SideNav extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        const {displayName,photoURL,email,isAdmin}=this.props.user;
        return(
            <section className={"side-nav col-xs-12 col-lg-4 col-sm-4 col-md-4 row"}>
                <div className={"profile"}>
                    <img src={photoURL} alt="Avatar" style={{width:"100%"}}/>
                </div>
                <ul>
                    <li>
                        <NavLink to={"/dashboard"} activeClassName={"selected-item"}>
                            <i className="far fa-newspaper"></i>
                            BUZZ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/complaints"} activeClassName={"selected-item"}>
                            <i className="fas fa-file-alt"></i>
                            COMPLAINTS
                        </NavLink>
                    </li>
                    {
                        this.props.user.isAdmin?
                            <li>
                                <NavLink to={"/dashboard/resolve"} activeClassName={"selected-item"}>
                                    <i className="fab fa-resolving"></i>
                                    RESOLVE
                                </NavLink>
                            </li>
                            :
                            null
                    }
                </ul>
            </section>
        );
    }

}
const mapStateToProps=state=>{
    return {user:state.userReducer.userData}
}
export default connect(mapStateToProps)(SideNav);