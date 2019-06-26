import {combineReducers} from "redux";
import userReducer from './user.reducer';
import complaintReducer from './complaint.reducer';
import buzzReducer from './buzzReducer';
import departmentReducer from "./department.reducer";

const rootReducer=combineReducers({
    userReducer,
    buzzReducer,
    complaintReducer,
    departmentReducer,
});

export default rootReducer;