import React,{Component} from "react";
import "./dashboard.css"
import {Route,Switch} from "react-router-dom";
import Buzz from "../buzz/Buzz";
import Header from "../Header/Header";
import {connect} from "react-redux";
import Complaints from "../complaints/complaints";
import Resolve from "../resolve/resolve";
import SideNav from "../sidenav/sidenav";
import Settings from "../settings/settings";
import {fetchUser} from "../../actions/user.actions";
import 'react-toastify/dist/ReactToastify.min.css';


class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        const {match} = this.props;
        return (
            <div className={"dashboard"}>
                <Header history={this.props.history} isAdmin={this.props.user.isAdmin}/>
                <SideNav/>
                <Switch>
                <Route exact path ={`${match.path}/`} component={Buzz} />
                <Route exact path ={`${match.path}/buzz`} component ={Buzz}/>
                <Route exact path ={`${match.path}/complaints`} component ={Complaints}/>
                <Route exact path ={`${match.path}/resolve`} component ={Resolve}/>
                <Route exact path={`${match.path}/settings`} component={Settings}/>
                <Route path={`${match.path}`} render={()=><div>You are lost...........</div>}/>
                </Switch>
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