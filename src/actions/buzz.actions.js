import {CREATE_BUZZ, FETCH_BUZZ, DELETE_BUZZ, LIKE_BUZZ, DISLIKE_BUZZ} from "./actionTypes";
import axiosInstance from "../utilities/axiosInterceptor";
import constant from '../config/constants';

export const displayBuzz=(data)=>({
    type:FETCH_BUZZ,
    payload:data
});

export const fetchbuzz=(skip)=>dispatch=>{
    console.log("url is :"+constant.buzzAPI+"/"+skip)
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
            console.log(" error in liked actions.");
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
    console.log("form data inside save buzz :"+formData);
        axiosInstance({
            method:'post',
            url:constant.buzzAPI,
            data:formData,
            config:{ headers:{'Content-Type':'multipart/form-data'}}
        }).then(res=>{
            dispatch({
                type: CREATE_BUZZ,
                payload:res.data
            });
        }).catch(err=>{
            alert("something went wrong.")
            console.log("action error to save buzz on server"+err);
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
                type:DELETE_BUZZ,
                payload:res.data
            });
        }).catch(err=>console.log(err))
}
