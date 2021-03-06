import { fetchConToken } from "../helpers/fetch";


export const dispatchGetCursos =(idUsuario)=>{
    return async(dispatch) =>{
        const resp = await fetchConToken(`cursoProfesor/get`,{idUsuario},'POST');
        if(resp.ok){
            dispatch(getCursosProfesor(resp.cursoProfesor));
        }else{
            dispatch(endCheck())
        }
    }
}

export const dispatchGetUsuarios =(idCurso)=>{
    return async(dispatch) =>{
        const resp = await fetchConToken(`cursoProfesor/getUsuarios`,{idCurso},'POST');
        if(resp.ok){
            dispatch(getUsuariosProfesor(resp.usuariosProfesor));
        }else{
            dispatch(endCheck())
        }
    }
}

export const dispatchGetPruebas =(idUsuario, idAsignatura)=>{
    return async(dispatch) =>{
        const resp = await fetchConToken(`cursoProfesor/getPruebas`,{idUsuario,idAsignatura},'POST');
        if(resp.ok){
            dispatch(getPruebasProfesor(resp.pruebasProfesor));
        }else{
            dispatch(endCheck())
        }
    }
}

export const dispatchGetNotas =(idCurso, idAsignatura, idNota)=>{
    return async(dispatch) =>{
        const resp = await fetchConToken(`cursoProfesor/getNotas`,{idCurso, idAsignatura, idNota},'POST');
        if(resp.ok){
            dispatch(getNotasProfesor(resp.NotasAlumnoProfesor));
        }else{
            dispatch(endCheck())
        }
    }
}

export const dispatchCursoProfesorCleanAlumnos = () => {
    return async (dispatch) => {
        dispatch(clearAlumnos());
    }
}

export const dispatchCursoProfesorLogout = () => {
    return async (dispatch) => {
        dispatch(endCheck());
    }
}

const getCursosProfesor = (cursoProfesor) =>( {
    type:'getCursosProfesor',
    payload:cursoProfesor
});

const getUsuariosProfesor = (usuarioProfesor) =>( {
    type:'getUsuariosProfesor',
    payload:usuarioProfesor
});

const getPruebasProfesor = (pruebasProfesor) =>( {
    type:'getPruebasProfesor',
    payload:pruebasProfesor
});

const getNotasProfesor = (notasProfesor) =>( {
    type:'getNotasProfesor',
    payload:notasProfesor
});

const endCheck = () =>( {
    type:'cursoProfesorLogout',
});

const clearAlumnos = () =>( {
    type:'cursoProfesorCleanAlumnos',
});