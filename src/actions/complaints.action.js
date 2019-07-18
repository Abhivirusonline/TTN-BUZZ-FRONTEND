import axiosInstance from "../utilities/axiosInterceptor";
import {FILE_COMPLAINT, FETCH_COMPLAINT,FETCH_DEPARTMENT,UPDATE_COMPLAINT_STATUS} from "./actionTypes";
import constant from '../config/constants';
import {toast} from "react-toastify";

export const fileComplaint=formData=>dispatch=>{
    let toastId=null;
    axiosInstance({
        method:'post',
        url:constant.complaintAPI,
        data:formData,
        config:{headers:{'Content-Type':'multipart/form-data'}},
        onUploadProgress:p=>{
            const progress=Math.round((p.loaded*100)/p.total);
            if (toastId===null){
                toastId=toast(`Please Wait while we file your complaint`,{progress});
            }else {
                toast.update(toastId,{
                    render:"Processing"
                });
            }
        }
    }).then(res=>{
        dispatch({
            type:FILE_COMPLAINT,
            payload:res.data
        });
        toast.done(toastId);
    }).catch(err=>{
        alert(JSON.stringify(err));
        toast.error("Complaint Registration Failed");
    })
}

export const updateComplaintStatus=e=>dispatch=>{
    axiosInstance({
        method:'patch',
        url:constant.complaintAPI,
        data:{complaintId:e.target.id, complaintStatus:e.target.value}
        })
        .then(res=>{
            toast.success("Complaint Status Changed Successfully")
            dispatch({
                type:UPDATE_COMPLAINT_STATUS,
                payload:res.data
            });
        })
        .catch(err=>toast.error("Updating Complaint Status Failed"));
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