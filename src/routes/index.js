import React,{Component} from "react";
import {Route,Redirect} from "react-router-dom";
import Login from '../components/loginComponent/loginComp';
import SaveToken from '../components/utilities/saveToken';
import Dashboard from '../components/dashboard/dashboard';

const Routes =()=>{
    return(
      <React.Fragment>
          <Route exact path={"/"} component={Login} />
          <Route exact path={"/token"} component={SaveToken}/>
          <PrivateRoute  path={"/dashboard"} component={Dashboard}/>
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