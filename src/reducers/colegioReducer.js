const initialState = {
    checking:true,
    colegios:[]
}

export const colegioReducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'getColegios':
            return {
                ...state,
                checking:false,
                colegios:action.payload
            }
        case 'endCheck':
            return {
                checking:false,
            }
    
        default:
            return state;
    }
}