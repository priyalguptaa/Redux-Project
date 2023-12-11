import {combineReducers} from 'redux'
// this is rootreducer it combines all the reducers in it
import cardItems from "./reducers";

// this is high level component because it merge all the reducers
export default combineReducers({
    cardItems,
});