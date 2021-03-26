import { combineReducers } from 'redux'
import timer from "./timeReducers"
import arrowList from "./arrowGroupReducers"

export default combineReducers({timer, arrowList});