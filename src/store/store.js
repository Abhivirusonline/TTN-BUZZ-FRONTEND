import {createStore,applyMiddleware} from "redux";
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const store=createStore(rootReducer,applyMiddleware(thunk,logger));
store.subscribe(()=>{
    console.log("store has changed "+store.getState());
});
export default store;