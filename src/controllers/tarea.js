import { fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';

export const jobStartAddNew = () => {
    return async ( dispatch ) => {
        try {
            
            const body = await fetchConToken('tareas', {}, 'POST');

            if ( body.ok ) {
                dispatch( jobAddNew( body.tarea ) )
            }

        } catch (error) {
            console.log(error);
        }
    }
}

const jobAddNew = (job) => ({
    type: types.jobAddNew,
    payload: job,
})

export const jobStartUpdated = ( tarea, _id ) => {
    return async ( dispatch ) => {
        try {
            
            const body = await fetchConToken(`tareas/${ _id }`, { tarea }, 'PUT');

            if ( body.ok ) {
                dispatch( jobUpdated( body.tarea ) )
            }

        } catch (error) {
            console.log(error)
        }
    }
}

const jobUpdated = (job) => ({
    type: types.jobUpdated,
    payload: job,
})

export const jobStartDelete = ( _id ) => {
    return async ( dispatch ) => {
        try {
            
            const body = await fetchConToken(`tareas/${ _id }`, {}, 'DELETE');

            if ( body.ok ) {
                dispatch( jobUpdated( body.tarea ) )
            }

        } catch (error) {
            console.log(error)
        }
    }
}

export const jobStartLoading = ( idUnidad ) => {
    return async ( dispatch ) => {
        try {
            
            const body = await fetchConToken('tareas/getTareas',{ idUnidad }, 'POST');

            dispatch( jobLoaded( body.tareas ) )

        } catch (error) {
            console.log(error)
        }
    }
}

const jobLoaded = ( jobs ) => ({
    type: types.jobLoaded,
    payload: jobs
})