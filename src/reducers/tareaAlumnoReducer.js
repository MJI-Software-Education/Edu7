import { types } from '../types/types';

const initialState = {
    tareaAlumno: [],
}

export const tareaAlumnoReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.tareaAlumnoAddNew:
            return {
                ...state,
                tareaAlumno: [
                    ...state.tareaAlumno,
                    action.payload,
                ]
            }
        
        case types.tareaAlumnoUpdated:
            return {
                ...state,
                tareaAlumno: state.tareaAlumno.map(
                    t => ( t.idEnunciado === action.payload.idEnunciado ) ? t = action.payload : t
                )
            }

        case types.tareaAlumnoLoaded:
            return {
                ...state,
                tareaAlumno: [ ...action.payload ]
            }

        default:
            return state;
    }

}
