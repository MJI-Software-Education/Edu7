import { fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';


export const asistenciaProfesorStartAddNew = ( idUsuario, idCurso, fecha, year, asistencia ) => {
    return async ( dispatch ) => {
        try {
            //Variables iguales al Server
            const body = await fetchConToken(`asistencia/${ idUsuario }`, { idCurso, fecha, year, asistencia }, 'POST');
            if ( body.ok ) {
                dispatch( asistenciaProfesorAddNew( body.asistencia ) )
            }

        } catch (error) {
            console.log(error);
        }
    }
}

const asistenciaProfesorAddNew = (asistencia) => ({
    type: types.asistenciaProfesorAddNew,
    payload: asistencia,
})

export const AsistenciaProfesorStartLoading = ( idCurso, fecha ) => {
    return async ( dispatch ) => {
        try {
            
            const body = await fetchConToken('asistencia',{ idCurso, fecha }, 'POST');
            console.log(body);

            dispatch( asistenciaProfesorLoaded( body.usuarios ) )

        } catch (error) {
            console.log(error)
        }
    }
}

const asistenciaProfesorLoaded = ( asistenciaProfesor ) => ({
    type: types.asistenciaProfesorLoaded,
    payload: asistenciaProfesor
})