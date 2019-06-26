import {FETCH_DEPARTMENT,ADD_DEPARTMENT} from "../actions/actionTypes";

const initialState={
    departmentList:[{
        _id:'',
        deptName:'',
    }]
}
const departmentReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_DEPARTMENT:{
            return{...state,departmentList: [...state.departmentList,action.payload]}
        }
        case FETCH_DEPARTMENT:{
            return {...state,departmentList:action.payload}
        }
        default:{
            return state;
        }
    }
}
export default departmentReducer;