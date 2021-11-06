const initialState = {
    checking:true,
    horario:{}
}

export const horarioReducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'getHorario':
            return {
                ...state,
                checking:false,
                horario:action.payload
            }
        case 'endCheck':
            return {
                checking:false,
            }
    
        default:
            return state;
    }
}