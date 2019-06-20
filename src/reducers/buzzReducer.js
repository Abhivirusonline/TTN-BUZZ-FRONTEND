import {CREATE_BUZZ,FETCH_BUZZ,DELETE_BUZZ,REACT_BUZZ,RESOLVE_COMPLAINT,FILE_COMPLAINT,ASSIGN_COMPLAINT,USER_LOGIN} from "./actionTypes";

const initialState={
    buzz:[]
};
export const buzzReducer=(state=initialState,action)=>{
    switch (action.type) {
        case CREATE_BUZZ:
            return{...state,post:action.payload,...state.buzz}
        case FETCH_BUZZ:
            return{...state,buzz:action.payload};
        case DELETE_BUZZ:
             state.buzz=state.buzz.filter((buzz)=>{
                if(buzz._id!=action.payload){
                    return buzz;
                }
            });
             return {...state,buzz:state.buzz};

    }
}