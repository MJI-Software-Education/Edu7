const initialState = {
    checking:true,
    url:{}
}

export const streamReducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'getStream':
            return {
                ...state,
                checking:false,
                url:action.payload
            }
        case 'endCheck':
            return {
                checking:false,
            }
    
        default:
            return state;
    }
}