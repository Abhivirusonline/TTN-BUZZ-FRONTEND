import {CREATE_BUZZ,FETCH_BUZZ,DELETE_BUZZ} from "../actions/actionTypes";

const initialState={
    buzzList:[]
};
const buzzReducer=(state=initialState,action)=>{
    switch (action.type) {
        case CREATE_BUZZ:
            return{...state,buzzList:action.payload,...state.buzzList}
        case FETCH_BUZZ:
            return{...state,buzzList:action.payload};
        case DELETE_BUZZ:
             state.buzzList=state.buzzList.filter((buzz)=>{
                if(buzz._id!=action.payload){
                    return buzz;
                }
            });
             return {...state,buzzList:state.buzzList};
        default:{
            return state;
        }
    }
}

export default buzzReducer;