import { types } from '../types/types';

const initialState = {
    asistenciaProfesor: [],
}

export const asistenciaProfesorReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.asistenciaCursoUpdated:
            return {
                ...state,
                asistenciaProfesor: state.asistenciaProfesor.map(
                    a => ( a.id === action.payload.id ) ? action.payload : a
                )
            }

        case types.asistenciaCursoLoaded:
            return {
                ...state,
                asistenciaProfesor: [...action.payload]
            }

            case 'asistenciaProfesorLogout':
                return {
                    asistenciaProfesor: []
                }

        default:
            return state;
    }
}