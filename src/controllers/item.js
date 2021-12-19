import { fetchConToken } from '../helpers/fetch';
export const DispatchNewItem = (idEnunciado,item,isCorrect=false,tareaId) => {
    return async ( dispatch ) => {
        try {
            const body = await fetchConToken('items', {idEnunciado,item,isCorrect}, 'POST');
            if ( body.ok ) {
                dispatch( dispatchNewItem( body.item,tareaId ) )
            }

        } catch (error) {
            console.log(error);
        }
    }
}
export const DispatchEditItem = (item,isCorrect=false,tareaId,id) => {
    return async ( dispatch ) => {
        try {
            const body = await fetchConToken(`items/${id}`, {item,isCorrect}, 'PUT');
            if ( body.ok ) {
                dispatch( dispatchEditItem( body.item,tareaId ) )
            }

        } catch (error) {
            console.log(error);
        }
    }
}

export const DispatchDeleteItem = (id,idEnunciado,tareaId) => {
    return async ( dispatch ) => {
        try {

            const body = await fetchConToken(`items/${id}`, {}, 'DELETE');
            console.log(body)
            if ( body.ok ) {
                dispatch( dispatchDeleteItem( id,idEnunciado,tareaId ) )
            }

        } catch (error) {
            console.log(error);
        }
    }
}
const dispatchNewItem = (item,tareaId) => ({
    type: 'dispatchNewItem',
    payload: item,
    tareaId:tareaId
})

const dispatchEditItem = (item,tareaId) => ({
    type: 'dispatchEditItem',
    payload: item,
    tareaId:tareaId
})

const dispatchDeleteItem = (id,idEnunciado,tareaId) => ({
    type: 'DispatchDeleteItem',
    payload: id,
    idEnunciado: idEnunciado,
    tareaId:tareaId
})