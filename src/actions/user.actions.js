import axiosInstance from "../utilities/axiosInterceptor";
import {FETCH_USER} from "./actionTypes";
import constant from '../config/constants';

export const fetchUser=()=>dispatch=>{
    axiosInstance.get(constant.profileAPI)
        .then(res=>{
            dispatch({
                type:FETCH_USER,
                payload:res.data
            });
        }).catch(err=>{
       console.log("-------> err"+err);
    });
}
