const initialState = {
    checking:true,
    cursos:[],
    alumnos:[],
    pruebas:[],
    notas:[]
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
        case 'getNotasProfesor':
            return {
                ...state,
                checking:false,
                notas:action.payload
            }

        case 'cursoProfesorCleanAlumnos':
            return {
                ...state,
                alumnos:[],
            }

        case 'cursoProfesorLogout':
            return {
                initialState
            }
        
        default:
            return state;
    }
}