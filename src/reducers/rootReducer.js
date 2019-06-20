import {combineReducers} from "redux";
import userReducer from './user.reducer';
import complaintReducer from './complaint.reducer';
import buzzReducer from './buzzReducer';

const rootReducer=combineReducers({
    userReducer,
    buzzReducer,
    complaintReducer
});

export default rootReducer;