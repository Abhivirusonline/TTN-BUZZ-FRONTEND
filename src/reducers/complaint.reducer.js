import {FILE_COMPLAINT,FETCH_COMPLAINT,UPDATE_COMPLAINT_STATUS} from "../actions/actionTypes";

const initialState={
    complaintList:[{
        _id:'',
        department:{},
        issueTitle:'',
        concern:'',
        RaisedBy:{},
        attachment: '',
        assignedTo:{},
    }]
}

const complaintReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FILE_COMPLAINT:{
            return{complaintList: [...state.complaintList,action.payload],...state}
        }
        case FETCH_COMPLAINT:{
            return {...state,complaintList:action.payload}
        }
        case UPDATE_COMPLAINT_STATUS:{
            const updatedComplaintList= state.complaintList.map(complaint=>{
                if(complaint._id=== action.payload._id){
                    return action.payload;
                }
                return complaint;
            })
            return {...state,buzzList:updatedComplaintList}
        }
        default:{
            return state;
        }
    }
}
export default complaintReducer;