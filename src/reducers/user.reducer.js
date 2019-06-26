import {FETCH_USER} from "../actions/actionTypes";

const initialState={
    userData:{
        _id:'',
        displayName:'',
        isAdmin:false
    }
}
const userReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_USER:{
            return {...state, userData :action.payload} ;
        }
        default:{
            return state;
        }
    }
}
export default userReducer;

