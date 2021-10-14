
import { fetchConToken } from "../helpers/fetch";


export const dispatchGetAsistencia =(idUsuario)=>{
    return async(dispatch) =>{
        const resp = await fetchConToken('asistencia/getAsistencia',{idUsuario},'POST');
        if(resp.ok){
            dispatch(getAsistencia(resp.asistencia));
        }else{
            dispatch(endCheck())
        }
    }
}

const getAsistencia = (asistencia) =>( {
    type:'getAsistencia',
    payload:asistencia
});
const endCheck = () =>( {
    type:'endCheck',
});