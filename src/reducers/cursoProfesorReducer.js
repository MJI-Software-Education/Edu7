const initialState = {
    checking:true,
    cursos:[]
}

export const cursoProfesorReducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'getCursosProfesor':
            return {
                ...state,
                checking:false,
                cursos:action.payload
            }
        case 'endCheck':
            return {
                checking:false,
            }
    
        default:
            return state;
    }
}