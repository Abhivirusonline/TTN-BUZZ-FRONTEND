import {CREATE_BUZZ, FETCH_BUZZ, DELETE_BUZZ, LIKE_BUZZ, DISLIKE_BUZZ} from "../actions/actionTypes";

const initialState={
    buzzList:[]
};
const buzzReducer=(state=initialState,action)=>{
    switch (action.type) {
        case CREATE_BUZZ:
            const buzzList = [action.payload,...state.buzzList];
            return{...state,buzzList}

        case FETCH_BUZZ:
            const buzz = state.buzzList.concat(...action.payload);
            return{ ...state,
                buzzList: buzz
            };

        case DELETE_BUZZ:{
            state.buzzList=state.buzzList.filter((buzz)=>{
                if(buzz._id!=action.payload){
                    return buzz;
                }
            });
            return {...state,buzzList:state.buzzList};
        }
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