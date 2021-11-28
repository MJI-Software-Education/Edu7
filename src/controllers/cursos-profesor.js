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

const endCheck = () =>( {
    type:'endCheck',
});