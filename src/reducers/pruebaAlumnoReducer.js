const initialState = {
    checking:true,
    pruebasAlumno:[]
}

export const pruebaAlumnoReducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'subirPrueba':
            return {
                ...state,
                checking:false,
                pruebasAlumno:action.payload
            }
        case 'endCheck':
            return {
                checking:false,
            }
        case 'check':
            return {
                checking:true,
            }
    
        default:
            return state;
    }
}