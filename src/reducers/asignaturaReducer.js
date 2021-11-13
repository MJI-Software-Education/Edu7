const initialState = {
    checking:true,
    asignatura:{}
}

export const asignaturaReducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'getAsignatura':
            return {
                ...state,
                checking:false,
                asignatura:action.payload
            }
        case 'endCheck':
            return {
                checking:false,
            }
        case 'startCheck':
            return {
                checking:true,
            }
    
        default:
            return state;
    }
}