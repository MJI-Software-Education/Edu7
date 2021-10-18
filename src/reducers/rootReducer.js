import {combineReducers} from 'redux';
import { authReducer } from "./authReducer";
import { tareaReducer } from './tareaReducer';
import { colegioReducer } from './colegioReducer';
import { materialReducer } from './materialReducer';
import { asistenciaReducer } from './asistenciaReducer';
import { tareaAlumnoReducer } from './tareaAlumnoReducer';

export const rootReducer = combineReducers({
    auth:authReducer,
    colegios:colegioReducer,
    materiales:materialReducer,
    asistencia:asistenciaReducer,
    unidades:tareaReducer,
    tareaAlumno:tareaAlumnoReducer,
})