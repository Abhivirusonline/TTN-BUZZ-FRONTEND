import {FILE_COMPLAINT,FETCH_COMPLAINT} from "../actions/actionTypes";

const inititalState={
    complaintList:[]
}

const complaintReducer=(state=inititalState,action)=>{
    switch (action.type) {
        case FILE_COMPLAINT:{
            return{...state,complaintList: [...state.complaintList,action.payload]}
        }
        case FETCH_COMPLAINT:{
            return {...state,complaintList:action.payload}
        }
        default:{
            return state;
        }
    }
}
export default complaintReducer;