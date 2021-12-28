import { fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';


export const asistenciaProfesorStartAddNew = ( idUsuario, idCurso, fecha, year, asistencia ) => {
    return async ( dispatch ) => {
        try {
            const body = await fetchConToken(`asistencia/${ idUsuario }`, { idCurso, fecha, year, asistencia }, 'POST');
            if ( body.ok ) {
                dispatch( asistenciaProfesorUpdated( body.asistencia ) )
            }

        } catch (error) {
            console.log(error);
        }
    }
}

const asistenciaProfesorUpdated = (asistencia) => ({
    type: types.asistenciaCursoUpdated,
    payload: asistencia,
})

export const AsistenciaProfesorStartLoading = ( idCurso, fecha ) => {
    return async ( dispatch ) => {
        try {
            
            const body = await fetchConToken('asistencia/getAsistenciaAlumnos',{ idCurso, fecha }, 'POST');
            dispatch( asistenciaProfesorLoaded( body.asistencia ) )

        } catch (error) {
            console.log(error)
        }
    }
}

export const dispatchCleanAsistencia = () => {
    return async (dispatch) => {
        dispatch(clearAsistencia());
    }
}

const asistenciaProfesorLoaded = ( asistenciaProfesor ) => ({
    type: types.asistenciaCursoLoaded,
    payload: asistenciaProfesor
})

const clearAsistencia = () =>( {
    type:'asistenciaProfesorLogout',
});