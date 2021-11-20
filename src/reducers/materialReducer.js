const initialState = {
    checking:true,
    materiales:[]
}

export const materialReducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'getMateriales':
            return {
                ...state,
                checking:false,
                materiales:action.payload
            }
        case 'subirMaterial':
            return {
                ...state,
                checking:false,
                materiales:[...state.materiales,action.payload]
            }
        case 'endCheck':
            return {
                checking:false,
            }
    
        default:
            return state;
    }
}