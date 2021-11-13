import { fetchConToken } from "../helpers/fetch";


export const dispatchGetCursos =(idUsuario)=>{
    return async(dispatch) =>{
        const resp = await fetchConToken(`cursoProfesor/get`,{idUsuario},'POST');
        console.log(resp);
        if(resp.ok){
            dispatch(getCursosProfesor(resp.cursoProfesor));
        }else{
            dispatch(endCheck())
        }
    }
}


const getCursosProfesor = (cursoProfesor) =>( {
    type:'getCursosProfesor',
    payload:cursoProfesor
});
const endCheck = () =>( {
    type:'endCheck',
});