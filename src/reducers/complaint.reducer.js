import {FILE_COMPLAINT,FETCH_COMPLAINT,FETCH_DEPARTMENT} from "../actions/actionTypes";

const initialState={
    complaintList:[{
        _id:'',
        department:{},
        issueTitle:'',
        concern:'',
        RaisedBy:{},
        attachment: '',
        assignedTo:'',
    }]
}

const complaintReducer=(state=initialState,action)=>{
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