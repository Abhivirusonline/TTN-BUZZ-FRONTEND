import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";
const Header=(props)=>{
    const {isAdmin}=props.isAdmin;
    console.log("props is :"+props.isAdmin);
    return(
        <nav>
            <Link to={"../dashboard"}>Buzz</Link>
            <Link to={"../complaints"}>Complaints</Link>
            <Link to={"../resolve"}>Resolve</Link>
            <Link to={"../settings"}>Settings</Link>
            <a href={'http://localhost:3000/auth/logout'}>Logout</a>
        </nav>
    );
}
export default Header;