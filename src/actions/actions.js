import {CREATE_BUZZ,FETCH_BUZZ,DELETE_BUZZ,REACT_BUZZ,RESOLVE_COMPLAINT,FILE_COMPLAINT,ASSIGN_COMPLAINT,USER_LOGIN} from "./actionTypes";
import axiosInstance from "../utilities/axiosInterceptor";
import constant from '../config/constants';

export const displayBuzz=(data)=>({
    type:FETCH_BUZZ,
    payload:data
});

export const fetchbuzz=()=>dispatch=>{
    axiosInstance.get(constant.buzzAPI)
            .then(res=>{
                dispatch(displayBuzz(res.data));
            }).catch(err=>{
                console.log('fetch operation failed : '+err);
        })
};

export const saveBuzz=formData=>dispatch=>{
        axiosInstance({
            method:'post',
            url:constant.buzzAPI,
            data:formData,
            config:{ headers:{'Content-Type':'multipart/form-data'}}
        }).then(res=>{
            console.log("data saved on server and now dispatch to save in store");
            dispatch({
                type: CREATE_BUZZ,
                payload:res.data
            });
        }).catch(err=>{
            console.log("action error to save buzz on server"+err);
        })
};

export const deleteBuzz=(id)=>dispatch=>{
        axiosInstance.delete(constant.buzzAPI,{
            body:{
                _id:id
            }
        }).then(res=>{
            dispatch({
                type:DELETE_BUZZ,
                payload:res.data
            });
        }).catch(err=>console.log(err))
    }