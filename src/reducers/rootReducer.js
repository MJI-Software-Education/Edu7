import {combineReducers} from 'redux';
import { authReducer } from "./authReducer";
import { tareaReducer } from './tareaReducer';
import { colegioReducer } from './colegioReducer';
import { materialReducer } from './materialReducer';

export const rootReducer = combineReducers({
    auth:authReducer,
    jobs:tareaReducer,
    colegios:colegioReducer,
    materiales:materialReducer,
})