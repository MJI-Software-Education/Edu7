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
        case 'dispatchEditItem':
            const nuevaTarea = state.tareas.filter(t=>t.id === action.tareaId)[0] ;
            const nuevoEnunciado = nuevaTarea.enunciados.filter(e=>e._id === action.payload.idEnunciado)[0];
            nuevoEnunciado.items = nuevoEnunciado.items.map(i=>i._id === action.payload._id ?action.payload:i);
            nuevaTarea.enunciados = nuevaTarea.enunciados.map(e=>e._id === action.payload.idEnunciado?nuevoEnunciado:e);
            
            return {
                ...state,
                    tareas:state.tareas.map(t=>t.id===action.tareaId ? nuevaTarea:t)
            }
        case 'DispatchDeleteItem':
            const nuevaTarea2 = state.tareas.filter(t=>t.id === action.tareaId)[0] ;
            const nuevoEnunciado2 = nuevaTarea2.enunciados.filter(e=>e._id === action.idEnunciado)[0];
            nuevoEnunciado2.items = nuevoEnunciado2.items.filter(i=>i._id !== action.payload);
            nuevaTarea2.enunciados = nuevaTarea2.enunciados.map(e=>e._id === action.idEnunciado?nuevoEnunciado2:e);
            
            return {
                ...state,
                    tareas:state.tareas.map(t=>t.id===action.tareaId ? nuevaTarea2:t)
            }
        case 'dispatchDeleteEnunciado':
            const nuevo = state.tareas.filter(t=>t.id === action.tareaId)[0] ;
            nuevo.enunciados = nuevo.enunciados.filter(e=>e._id != action.payload);
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
