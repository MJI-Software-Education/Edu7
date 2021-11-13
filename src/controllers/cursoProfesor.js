import { fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';

export const CursoProfesorStartLoading = ( idUsuario ) => {
    return async ( dispatch ) => {
        try {
            
            const body = await fetchConToken('cursoProfesor/get',{ idUsuario }, 'POST');
            console.log(body);

            dispatch( cursoProfesorLoaded( body.cursoProfesor ) )

        } catch (error) {
            console.log(error)
        }
    }
}

const cursoProfesorLoaded = ( cursoProfesor ) => ({
    type: types.cursoProfesorLoaded,
    payload: cursoProfesor
})