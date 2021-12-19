import { fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';

export const jobStartAddNew = (idCurso, idAsignatura,idUnidad, titulo, subtitle, dateInit, dateEnd) => {
    return async ( dispatch ) => {
        try {
            
            const body = await fetchConToken('tareas', {idCurso, idAsignatura,idUnidad, titulo, subtitle, dateInit, dateEnd}, 'POST');
            console.log(body)
            if ( body.ok ) {
                dispatch( jobAddNew( body.tarea ) )
            }

        } catch (error) {
            console.log(error);
        }
    }
}
export const DispatchNewItem = (idEnunciado,item,isCorrect=false,tareaId) => {
    return async ( dispatch ) => {
        try {
               console.log(tareaId)
            const body = await fetchConToken('items', {idEnunciado,item,isCorrect}, 'POST');
            console.log(body)
            if ( body.ok ) {
                dispatch( dispatchNewItem( body.item,tareaId ) )
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
const dispatchNewItem = (item,tareaId) => ({
    type: 'dispatchNewItem',
    payload: item,
    tareaId:tareaId
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

export const jobStartLoading = ( idAsignatura ) => {
    return async ( dispatch ) => {
        try {
            
            const body = await fetchConToken('tareas/getTareas',{ idAsignatura }, 'POST');

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