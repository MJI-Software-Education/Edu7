import { types } from '../types/types';

const initialState = {
    cursoProfesor: [],
}

export const cursoProfesorReducer = ( state = initialState, action ) => {
    switch (action.type) {

        case types.cursoProfesorLoaded:
            return {
                ...state,
                cursoProfesor: [ ...action.payload ]
            }        
    
        default:
            return state;
    }
}