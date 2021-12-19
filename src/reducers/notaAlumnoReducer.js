import { types } from '../types/types';

const initialState = {
    checking:false,
    notas_alumno: [],
}

export const notaAlumnoReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.nota_alumnoAddNew:
            return {
                ...state,
                checking:false,
                notas_alumno: [
                    ...state.notas_alumno,
                    action.payload,
                ]
            }
            
        case types.nota_alumnoUpdated:
            return {
                ...state,
                checking:false,
                notas_alumno: state.notas_alumno.map(
                    n => ( n.id === action.payload.id ) ? action.payload : n
                )
            }
        
        case types.nota_alumnoLoaded:
            return {
                ...state,
                checking:false,
                notas_alumno: [ ...action.payload ]
            }

        case types.nota_alumnoChecking:
            return {
                checking:true,
            }
    
        default:
            return state;
    }
}
