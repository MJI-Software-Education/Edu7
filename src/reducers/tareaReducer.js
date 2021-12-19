import { types } from '../types/types';

const initialState = {
    tareas: [],
}

export const tareaReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.jobAddNew:
            return {
                ...state,
                tareas: [
                    ...state.tareas,
                    action.payload,
                ]
            }
        case 'newEnunciado':
            return {
                ...state,
                tareas: [
                    ...state.tareas,
                    state.tareas
                    .filter(t=>t.id === action.payload.idTarea)[0]
                    .enunciados.push(action.payload)
                ]
            }
        case 'dispatchNewItem':
            return {
                ...state,
                tareas: [
                    ...state.tareas,
                    state.tareas
                    .filter(t=>t.id === action.tareaId)[0]
                    .enunciados.filter(e=>e._id===action.payload.idEnunciado)[0]
                    .items.push(action.payload)
                ]
            }
        case 'dispatchDeleteEnunciado':
            console.log(action.payload)
            const nuevo = state.tareas.filter(t=>t.id === action.tareaId)[0] ;
            nuevo.enunciados = nuevo.enunciados.filter(e=>e._id != action.payload);
            console.log(nuevo)
            return {
                ...state,
                    tareas:state.tareas.map(t=>t.id===action.tareaId ? nuevo:t)
            }

        case types.jobUpdated:
            return {
                ...state,
                tareas: state.tareas.map(
                    t => ( t._id === action.payload._id ) ? action.payload : t
                )
            }

        case types.jobLoaded:
            return {
                ...state,
                tareas: [ ...action.payload ]
            }

        default:
            return state;
    }

}
