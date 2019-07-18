import axiosInstance from "../utilities/axiosInterceptor";
import {FETCH_USER,FETCH_ALL_USERS} from "./actionTypes";
import constant from '../config/constants';
import {toast} from "react-toastify";

export const fetchUser=()=>dispatch=>{
    axiosInstance.get(constant.profileAPI)
        .then(res=>{
            dispatch({
                type:FETCH_USER,
                payload:res.data
            });
        })
        .catch(err=>{
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
        .catch(err=>{
            console.log("error :",err)
        })
}
export const updatePhoto=(formData)=>dispatch=>{
    let toastId=null;
    axiosInstance({
        method:'post',
        url:constant.profileAPI,
        data:formData,
        onUploadProgress:p=> {
            const progress = Math.round((p.loaded * 100) / p.total);
            if (toastId === null) {
                toastId = toast(`Please Wait while we post your buzz :${progress}%`, {progress});
            } else {
                toast.update(toastId,{
                    render:`Uploaded Successfully ${progress}, Processing`,
                    type:toast.TYPE.SUCCESS
                });
            }
        }
    })
        .then(res=>{
            dispatch({
                type:FETCH_USER,
                payload:res.data
            });
            toast.done(toastId);
        }).catch(err=>{
        toast.error("Photo Updating failed")
    });
}
