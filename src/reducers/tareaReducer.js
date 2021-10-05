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
