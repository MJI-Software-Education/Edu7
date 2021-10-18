import { fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';

export const tareaAlumnoStartAddNew = ({ idUsuario, idCurso, idAsignatura, idUnidad, idTarea, seleccionItems }) => {
    return async ( dispatch ) => {
        try {

            const body = await fetchConToken('tareaAlumno/',{ idUsuario, idCurso, idAsignatura, idUnidad, idTarea, seleccionItems },'POST');

            if ( body.ok ) {
                // dispatch( tareaAlumnoAddNew( body.tarea_alumno ) )
            }

        } catch (error) {
            console.log(error);
        }
    }
}

export const tareaAlumnoAddNew = ( tarea ) => ({
    type: types.tareaAlumnoAddNew,
    payload: tarea,
})

export const tareaAlumnoStartUpdated = ( tarea, _id ) => {
    return async ( dispatch ) => {
        try {
            
            const body = await fetchConToken(`tareas/${ _id }`, { tarea }, 'PUT');

            if ( body.ok ) {
                dispatch( tareaAlumnoUpdated( body.tarea ) )
            }

        } catch (error) {
            console.log(error)
        }
    }
}

export const tareaAlumnoUpdated = (tarea) => ({
    type: types.tareaAlumnoUpdated,
    payload: tarea,
})

export const tareaAlumnoStartLoading = ( idUsuario, idAsignatura ) => {
    return async ( dispatch ) => {
        try {

            const body = await fetchConToken('tareaAlumno/getTareaAlumno',{ idUsuario, idAsignatura }, 'POST');

            dispatch( tareaAlumnoLoaded( body.tareas_alumno ) )

        } catch (error) {
            console.log(error)
        }
    }
}

const tareaAlumnoLoaded = ( tareas ) => ({
    type: types.tareaAlumnoLoaded,
    payload: tareas
})