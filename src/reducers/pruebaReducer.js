const initialState = {
    checking:true,
    pruebas:[]
}

export const pruebaReducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'getPruebas':
            return {
                ...state,
                checking:false,
                pruebas:action.payload
            }
        case 'endCheck':
            return {
                checking:false,
            }
    
        default:
            return state;
    }
}