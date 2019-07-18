import {FILE_COMPLAINT, FETCH_COMPLAINT, UPDATE_COMPLAINT_STATUS} from "../actions/actionTypes";

const initialState = {
    complaintList: []
}

const complaintReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILE_COMPLAINT: {
            return {...state, complaintList: [...state.complaintList, action.payload]}
        }
        case FETCH_COMPLAINT: {
            return {...state, complaintList: action.payload}
        }
        case UPDATE_COMPLAINT_STATUS: {
            const updatedComplaintList = state.complaintList.map(complaint => {
                if (complaint._id === action.payload[0]._id) {
                    return action.payload[0];
                }
                return complaint;
            })
            return {...state, complaintList: updatedComplaintList}
        }
        default: {
            return state;
        }
    }
}
export default complaintReducer;