import { combineReducers } from 'redux'
import timer from "./timeReducers"
import arrowList from "./arrowReducers"

export default combineReducers({timer, arrowList});