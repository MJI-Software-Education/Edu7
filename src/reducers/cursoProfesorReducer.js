const initialState = {
    checking:true,
    cursos:[],
    alumnos:[],
    pruebas:[]
}

export const cursoProfesorReducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'getCursosProfesor':
            return {
                ...state,
                checking:false,
                cursos:action.payload
            }
            case 'getUsuariosProfesor':
                return {
                    ...state,
                    checking:false,
                    alumnos:action.payload
                }
            case 'getPruebasProfesor':
                return {
                    ...state,
                    checking:false,
                    pruebas:action.payload
                }

        case 'cursoProfesorLogout':
            return {
                checking:false,
                cursos:[],
                alumnos:[],
                pruebas:[]
            }
    
        default:
            return state;
    }
}