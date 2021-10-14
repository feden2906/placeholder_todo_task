import {mainReducer} from "./mainReducer";
import {combineReducers} from "redux";

const reducer = combineReducers ({mainReducer})
export {reducer}