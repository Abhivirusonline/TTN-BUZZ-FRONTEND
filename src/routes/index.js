import React from "react";
import {Route,Redirect,Switch} from "react-router-dom";
import Login from '../components/loginComponent/loginComp';
import SaveToken from '../components/utilities/saveToken';
import Dashboard from '../components/dashboard/dashboard';

const Routes =()=>{
    return(
      <React.Fragment>
          <Switch>
            <Route exact path={"/"} component={Login} />
            <Route exact path={"/token"} component={SaveToken}/>
            <PrivateRoute  path={"/dashboard"} component={Dashboard}/>
            <Route render={()=><div>You are lost</div>}/>
          </Switch>
      </React.Fragment>
    );
}
const PrivateRoute=({component:Component,...restProps})=>{
    return(
        <Route
            {...restProps}
            render={(props)=>{
               return localStorage.getItem('token')?
                    <Component {...props}/>
                    :
                    <Redirect to={"/"}/>
            }}
        />
    );
};

export default Routes;