import axiosInstance from "../utilities/axiosInterceptor";
import {FILE_COMPLAINT, FETCH_COMPLAINT,FETCH_DEPARTMENT,UPDATE_COMPLAINT_STATUS} from "./actionTypes";
import constant from '../config/constants';

export const fileComplaint=formData=>dispatch=>{
    console.log('form data in file complaint',formData);
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

export const updateComplaintStatus=e=>dispatch=>{
    axiosInstance({
        method:'patch',
        url:constant.complaintAPI,
        data:{complaintId:e.target.id, complaintStatus:e.target.value}
        })
        .then(res=>{
            dispatch({
                type:UPDATE_COMPLAINT_STATUS,
                payload:res.data
            });
        })
        .catch(err=>alert(err));
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

export const showComplaintList=()=>dispatch=>{
    axiosInstance.get(constant.complaintAPI)
        .then(res=>{
            dispatch({
                type:FETCH_COMPLAINT,
                payload:res.data
            });
        })
}