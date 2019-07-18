import {CREATE_BUZZ_STARTED,CREATE_BUZZ_SUCCESS,CREATE_BUZZ_FAILED,
    FETCH_BUZZ_STARTED,FETCH_BUZZ_FAILED,FETCH_BUZZ_SUCCESS,
    DELETE_BUZZ_STARTED,DELETE_BUZZ_FAILED,DELETE_BUZZ_SUCCESS,
    LIKE_BUZZ, DISLIKE_BUZZ
} from "../actions/actionTypes";

const initialState={
    buzzList:[]
};
const buzzReducer=(state=initialState,action)=>{
    switch (action.type) {
        case CREATE_BUZZ_STARTED:{
            return state;
        }
        case CREATE_BUZZ_SUCCESS:
            const buzzList = [action.payload,...state.buzzList];
            return{...state,buzzList}

        case CREATE_BUZZ_FAILED:
            return state;

        case FETCH_BUZZ_STARTED:
            return state;
        case FETCH_BUZZ_SUCCESS:
            const buzz = state.buzzList.concat(...action.payload);
            return{ ...state,
                buzzList: buzz
            };
        case FETCH_BUZZ_FAILED:
            return state;

        case DELETE_BUZZ_STARTED:
            return state;

        case DELETE_BUZZ_SUCCESS:{
            state.buzzList=state.buzzList.filter((buzz)=>{
                if(buzz._id!==action.payload){
                    return buzz;
                }
            });
            return {...state,buzzList:state.buzzList};
        }
        case DELETE_BUZZ_FAILED:
            return state;

        case LIKE_BUZZ:
            const updatedBuzList = state.buzzList.map(item=>{
                if(item._id === action.payload._id){
                    return action.payload;
                }
                return item;
            })
            return {...state,buzzList:updatedBuzList}

        case DISLIKE_BUZZ:
            const New_BuzList = state.buzzList.map(item=>{
                if(item._id === action.payload._id){
                    return action.payload;
                }
                return item;
            })
            return {...state,buzzList:New_BuzList}
        default:{
            return state;
        }
    }
}

export default buzzReducer;