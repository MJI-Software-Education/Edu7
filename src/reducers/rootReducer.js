import {combineReducers} from 'redux';
import { authReducer } from "./authReducer";
import { tareaReducer } from './tareaReducer';

export const rootReducer = combineReducers({
    auth:authReducer,
    jobs:tareaReducer,
})