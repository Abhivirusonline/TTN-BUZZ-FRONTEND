import {CREATE_BUZZ, FETCH_BUZZ, DELETE_BUZZ, LIKE_BUZZ, DISLIKE_BUZZ} from "./actionTypes";
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

export const like=(id)=>dispatch=>{
    axiosInstance.put(constant.buzzLike,{
        data:{buzzId:id}
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

export const dislike=(id)=>dispatch=>{
    axiosInstance.put(constant.buzzDisLike,{
            data:{buzzId:id}
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
    console.log("buzz data is :"+formData.buzz);
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
    console.log(" id in delelte actions is :"+id);
        axiosInstance({
            method:'delete',
            url:constant.buzzAPI,
            data:{
                _id:id
            }
        }).then(res=>{
            dispatch({
                type:DELETE_BUZZ,
                payload:res.data
            });
        }).catch(err=>console.log(err))
}
