import axiosInstance from "../utilities/axiosInterceptor";
import {FETCH_USER,FETCH_ALL_USERS} from "./actionTypes";
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
export const fetchAllUser=()=>dispatch=>{
    axiosInstance.get(constant.getAllUser)
        .then(res=>{
            dispatch({
                type:FETCH_ALL_USERS,
                payload: res.data
            })
        })
        .catch(err=>console.log("error :",err))
}
export const updatePhoto=()=>dispatch=>{
    axiosInstance.post(constant.profileAPI)
        .then(res=>{
            dispatch({
                type:FETCH_USER,
                payload:res.data
            });
        }).catch(err=>{
        console.log("-------> err"+err);
    });
}
