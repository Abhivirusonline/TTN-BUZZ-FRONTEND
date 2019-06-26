import axiosInstance from "../utilities/axiosInterceptor";
import {FILE_COMPLAINT, FETCH_COMPLAINT,  FETCH_DEPARTMENT,FETCH_ISSUETYPE} from "./actionTypes";
import constant from '../config/constants';

export const fileComplaint=formData=>dispatch=>{
    axiosInstance({
        method:'post',
        url:constant.complaintAPI,
        data:formData,
        config:{headers:{'Content-Type':'multipart/form-data'}}
    }).then(res=>{
        dispatch({
            type:FILE_COMPLAINT,
            payload:res.data
        });
    })
}

export const fetchDepartment=()=>dispatch=>{
    axiosInstance.get(constant.departmentAPI)
        .then(res=> {
            dispatch({
                type: FETCH_DEPARTMENT,
                payload: res.data
            })
        })
        .catch(err=>{
            console.log(err);
        })
}
export const fetchIssueType=()=>dispatch=>{
    axiosInstance.get(constant.issueTypeAPI)
        .then(res=>{
            dispatch({
                type:FETCH_ISSUETYPE,
                payload:res.data
            })
        })
        .catch(err=>{
            console.log("error in issutytpe fetch : "+err)
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