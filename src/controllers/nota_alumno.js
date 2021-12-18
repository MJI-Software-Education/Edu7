import { fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';

export const notaAlumnoStartAddNew = ( idNota, idUsuario, idCurso, idAsignatura, nota) => {
    return async ( dispatch ) => {
        try {
            
            const body = await fetchConToken('notasAlumno', { idNota, idUsuario, idCurso, idAsignatura, nota}, 'POST');
            if ( body.ok ) {
                dispatch( notaAlumnoAddNew( body.notas_alumno ) )
            }

        } catch (error) {
            console.log(error);
        }
    }
}

const notaAlumnoAddNew = (notas_alumno) => ({
    type: types.nota_alumnoAddNew,
    payload: notas_alumno,
})

export const notaAlumnoStartUpdated = ( nota, id ) => {
    return async ( dispatch ) => {
        try {
            
            const body = await fetchConToken(`notasAlumno/${ id }`, { nota }, 'PUT');

            if ( body.ok ) {
                dispatch( notaAlumnoUpdated( body.nota_alumno ) )
            }

        } catch (error) {
            console.log(error)
        }
    }
}

const notaAlumnoUpdated = (nota_alumno) => ({
    type: types.nota_alumnoUpdated,
    payload: nota_alumno,
})

export const notaAlumnoStartDelete = ( id ) => {
    return async ( dispatch ) => {
        try {
            
            const body = await fetchConToken(`notasAlumno/${ id }`, {}, 'DELETE');

            if ( body.ok ) {
                dispatch( notaAlumnoUpdated( body.nota_alumno ) )
            }

        } catch (error) {
            console.log(error)
        }
    }
}

export const notaAlumnoStartLoading = ( idUsuario ) => {
    return async ( dispatch ) => {
        try {
            
            const body = await fetchConToken('notasAlumno/getNotasAlumno',{ idUsuario }, 'POST');
            dispatch( notaAlumnoLoaded( body.notas_alumno ) )

        } catch (error) {
            console.log(error)
        }
    }
}

const notaAlumnoLoaded = ( notas_alumno ) => ({
    type: types.nota_alumnoLoaded,
    payload: notas_alumno
})

const notaAlumnoChecking = () => ({
    type: types.nota_alumnoChecking
})