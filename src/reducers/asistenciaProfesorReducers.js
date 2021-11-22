import { types } from '../types/types';

const initialState = {
    asistenciaProfesor: [],
}

export const asistenciaProfesorReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.cursoProfesorAddNew:
            return {
                ...state,
                asistenciaProfesor: [
                    ...state.asistenciaProfesor,
                    action.payload
                ]
            }
        case types.cursoProfesorUpdated:
            return {
                ...state,
                asistenciaProfesor: state.asistenciaProfesor.map(
                    t => ( t._id === action.payload._id ) ? action.payload : t
                )
            }

        case types.cursoAsistenciaLoaded:
            return {
                ...state,
                asistenciaProfesor: [...action.payload]
            }

        default:
            return state;
    }
}