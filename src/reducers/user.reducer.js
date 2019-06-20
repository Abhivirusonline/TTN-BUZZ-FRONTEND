import {FETCH_USER} from "../actions/actionTypes";

const initialState={
    userData:[{
        username:'',
        role:''
    }]
}
const userReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_USER:{
            return{...state,userData:[...state.userData,action.payload]};
        }
        default:{
            return state;
        }
    }
}
export default userReducer;