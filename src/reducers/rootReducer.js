import {combineReducers} from 'redux';
import { authReducer } from "./authReducer";
import { colegioReducer } from './colegioReducer';

export const rootReducer = combineReducers({
    auth:authReducer,
    colegios:colegioReducer
})