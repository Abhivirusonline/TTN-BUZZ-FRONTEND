import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import "./Header.css";
class Header extends Component{
    logout=()=>{
    localStorage.removeItem('token');
    this.props.history.push('/');
    }

    render() {
        console.log("isAdmin :"+this.props.isAdmin);
        const {isAdmin} =this.props;
        return(
            <header>
                <nav>
                    <NavLink to={"/dashboard"} activeClassName={"selected-item"} title={"News feed"}><i className="far fa-newspaper"></i></NavLink>
                    <NavLink to={"/dashboard/complaints"} activeClassName={"selected-item"}title={"Complaints"}><i className="fas fa-file-alt"></i></NavLink>
                    {
                        isAdmin?<NavLink to={"/dashboard/resolve"} activeClassName={"selected-item"} title={"Resolve"}><i className="fas fa-bullhorn"></i></NavLink>:null
                    }
                    <NavLink to={"/dashboard/settings"} activeClassName={"selected-item"} title={"Settings"}><i className="fas fa-user-cog"></i></NavLink>
                    <div onClick={this.logout}  title={"Logout"}><i className="fas fa-sign-out-alt"></i></div>
                </nav>
                <section>
                  <h1 className={"banner-text"}>
                      POSTING YOUR THOUGHTS NEVER BEEN SO EASY..
                  </h1>
                </section>
            </header>
        );
    }
}
export default Header;