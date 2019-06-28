import {FETCH_USER,FETCH_ALL_USERS} from "../actions/actionTypes";

const initialState={
    userData:{
        _id:'',
        displayName:'',
        isActive:true,
        department:{},
        isAdmin:false
    },
    allUsers: []
}
const userReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_USER:{
            return {...state, userData :action.payload} ;
        }

        case FETCH_ALL_USERS: {
            return {
                ...state,
                allUsers: action.payload
            }
        }

        default:{
            return state;
        }
    }
}
export default userReducer;

