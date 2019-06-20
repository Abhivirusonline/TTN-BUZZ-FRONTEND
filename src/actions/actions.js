import {CREATE_BUZZ,FETCH_BUZZ,DELETE_BUZZ,REACT_BUZZ,RESOLVE_COMPLAINT,FILE_COMPLAINT,ASSIGN_COMPLAINT,USER_LOGIN} from "./actionTypes";
import axios from 'axios';
import constant from '../config/constants';

export const displayBuzz=(data)=>({
    type:FETCH_BUZZ,
    payload:data
});

export const fetchbuzz=()=>{
    let token=localStorage.getItem(('token'));
    console.log("fetch buzz function called");
    return  dispatch=>{
        axios.get(constant.buzzAPI,{
            headers:{
                "authorization":token
            }
        })
            .then(res=>{
                dispatch(displayBuzz(res.data));
            }).catch(err=>{
                console.log('err in axios'+err);
        })
    }
};

export const saveBuzz=(data)=>{
    let token=localStorage.getItem(('token'));
    console.log('save post to db via frontend');
    return dispatch=>{
        axios.post(constant.buzzAPI,{
            headers:{
                "authorization":token
            },
            body:{
                data
            }

        }).then(res=>{
            dispatch({
                type: CREATE_BUZZ,
                payload:res.data
            });
        }).catch(err=>{
            console.log(err);
        })
    }
};

export const deleteBuzz=(id)=>{
    return dispatch=>{
        axios.delete(constant.buzzAPI,{
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
}