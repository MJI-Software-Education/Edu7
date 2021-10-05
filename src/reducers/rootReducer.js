import {combineReducers} from 'redux';
import { authReducer } from "./authReducer";
import { tareaReducer } from './tareaReducer';
import { colegioReducer } from './colegioReducer';

export const rootReducer = combineReducers({
    auth:authReducer,
    jobs:tareaReducer,
    colegios:colegioReducer
})