import {combineReducers} from 'redux';
import { authReducer } from "./authReducer";
import { tareaReducer } from './tareaReducer';
import { colegioReducer } from './colegioReducer';
import { materialReducer } from './materialReducer';
import { asistenciaReducer } from './asistenciaReducer';
import { tareaAlumnoReducer } from './tareaAlumnoReducer';
import { pruebaReducer } from './pruebaReducer';
import { notaAlumnoReducer } from './notaAlumnoReducer';
import { pruebaAlumnoReducer } from './pruebaAlumnoReducer';
import { horarioReducer } from './horarioReducer';
import { cursoProfesorReducer } from './cursoProfesorReducer';
import { asignaturaReducer } from './asignaturaReducer';
//Probando automate de edu7
export const rootReducer = combineReducers({
    auth:authReducer,
    colegios:colegioReducer,
    materiales:materialReducer,
    asistencia:asistenciaReducer,
    unidades:tareaReducer,
    tareaAlumno:tareaAlumnoReducer,
    notas_alumno: notaAlumnoReducer,
    pruebas:pruebaReducer,
    pruebasAlumno:pruebaAlumnoReducer,
    horario:horarioReducer,
    cursosProfesor:cursoProfesorReducer,
    asignatura:asignaturaReducer
})