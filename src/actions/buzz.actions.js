import {
    CREATE_BUZZ_SUCCESS, CREATE_BUZZ_STARTED, CREATE_BUZZ_FAILED,
    FETCH_BUZZ, DELETE_BUZZ_SUCCESS,
    LIKE_BUZZ, DISLIKE_BUZZ, FETCH_BUZZ_SUCCESS
} from "./actionTypes";

import {toast} from "react-toastify";

import axiosInstance from "../utilities/axiosInterceptor";
import constant from '../config/constants';

export const displayBuzz=(data)=>({
    type:FETCH_BUZZ_SUCCESS,
    payload:data
});

export const fetchbuzz=(skip)=>dispatch=>{
    axiosInstance.get(constant.buzzAPI+"/"+skip)
            .then(res=>{
                dispatch(displayBuzz(res.data));
            }).catch(err=>{
                console.log('fetch operation failed : '+err);
        })
};

export const like=(e)=>dispatch=>{
    axiosInstance.put(constant.buzzLike,{
        data:{buzzId:e.target.id}
        }
    ).then(res=>{
            dispatch({
                type:LIKE_BUZZ,
                payload:res.data
            });
        })
        .catch(err=>{
            toast.error("some error occurred");
        })
}

export const dislike=(e)=>dispatch=>{
    axiosInstance.put(constant.buzzDisLike,{
            data:{buzzId:e.target.id}
        }
    ).then(res=>{
        dispatch({
            type:DISLIKE_BUZZ,
            payload:res.data
        });
    })
        .catch(err=>{
            console.log("error in liked actions.");
        })
}

export const saveBuzz = formData => dispatch => {
    let toastId=null;
    axiosInstance({
            method:'post',
            url:constant.buzzAPI,
            data:formData,
            config:{ headers:{'Content-Type':'multipart/form-data'}},
            onUploadProgress:p=> {
                const progress = Math.round((p.loaded * 100) / p.total);
                if (toastId === null) {
                    toastId = toast(`Please Wait while we post your buzz `, {progress});
                } else {
                    toast.update(toastId,{
                        render:`Uploaded Successfully ${progress}, Processing`,
                        type:toast.TYPE.SUCCESS,
                    });
                }
            }
        }).then(res=>{
            dispatch({
                type: CREATE_BUZZ_SUCCESS,
                payload:res.data
            });
            toast.done(toastId);
        }).catch(err=>{
            toast.error("Buzz Not Created");
        })
};

export const deleteBuzz=(e)=>dispatch=>{
        axiosInstance({
            method:'delete',
            url:constant.buzzAPI,
            data:{
                _id:e.target.id
            }
        }).then(res=>{
            dispatch({
                type:DELETE_BUZZ_SUCCESS,
                payload:res.data
            });
        }).catch(err=>console.log(err))
}

export const saveComment=(formData)=>dispatch=>{
    let toastId=null;
    axiosInstance({
        method:'put',
        url:constant.buzzAPI,
        data:formData,
        onUploadProgress:p=> {
            const progress = Math.round((p.loaded * 100) / p.total);
            if (toastId === null) {
                toastId = toast(`Please Wait while we post your comment `, {progress});
            } else {
                toast.update(toastId,{
                    render:`Uploaded Successfully ${progress}, Processing`,
                    type:toast.TYPE.SUCCESS,
                });
            }
        }
    }).then(res=>{
        toast.done(toastId);
        toast.success('done');
    }).catch(err=>{
        toast.dismiss(toastId);
        toast.error("comment Not posted"+err);
    })
}