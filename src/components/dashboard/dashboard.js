import React,{Component} from "react";
import "./dashboard.css"
import {BrowserRouter as Router,Link,Route,Switch,Redirect} from "react-router-dom";
import Buzz from "../buzz/Buzz";
import Header from "../Header/Header";
import {connect} from "react-redux";
import Complaints from "../complaints/complaints";
import Resolve from "../resolve/resolve";
import SideNav from "../sidenav/sidenav";
import {fetchUser} from "../../actions/user.actions";


class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {

        console.log("props in dashboard :"+this.props);
        const {match} = this.props;
        console.log('match inside dashboard component',match.path);
        return (
            <div className={"dashboard"}>
                <Header history={this.props.history} isAdmin={this.props.user.isAdmin}/>
                <SideNav/>
                <Route exact path ={`${match.path}/`} component={Buzz} />
                <Route exact path ={`${match.path}/buzz`} component ={Buzz}/>
                <Route exact path ={`${match.path}/complaints`} component ={Complaints}/>
                <Route exact path ={`${match.path}/resolve`} component ={Resolve}/>

            </div>
        );
    }
}
const mapStateToProps=state=>{
    return {user:state.userReducer.userData}
}
const mapDispatchToProps={
    fetchUser
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);