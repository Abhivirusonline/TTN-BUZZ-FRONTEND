import axiosInstance from "../utilities/axiosInterceptor";
import {FILE_COMPLAINT,FETCH_COMPLAINT} from "./actionTypes";
import constant from '../config/constants';

export const fileComplaint=complaintData=>dispatch=>{
    axiosInstance({
        method:'post',
        url:constant.complaintAPI,
        data:complaintData,
        config:{headers:{'Content-Type':'multipart/form-data'}}
    }).then(res=>{
        dispatch({
            type:FILE_COMPLAINT,
            payload:res.data
        });
    })
}

export const showComplaintList=()=>dispatch=>{
    axiosInstance.get(constant.complaintAPI)
        .then(res=>{
            dispatch({
                type:FETCH_COMPLAINT,
                payload:res.data
            });
        })
}