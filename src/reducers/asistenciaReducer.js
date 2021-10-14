const initialState = {
    checking:true,
    asistencia:[]
}

export const asistenciaReducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'getAsistencia':
            return {
                ...state,
                checking:false,
                asistencia:action.payload
            }
        case 'endCheck':
            return {
                checking:false,
            }
    
        default:
            return state;
    }
}