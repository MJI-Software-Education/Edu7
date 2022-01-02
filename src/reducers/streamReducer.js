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
        case 'deleteStream':
            return {
                checking:false,
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