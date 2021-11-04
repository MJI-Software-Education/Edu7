import { fetchConToken } from "../helpers/fetch";


export const dispatchGetPruebas =(idCurso, idUnidad)=>{
    return async(dispatch) =>{
        const resp = await fetchConToken(`prueba/${idCurso}/${idUnidad}`,{},'POST');
        if(resp.ok){
            dispatch(getPruebas(resp.pruebas));
        }else{
            dispatch(endCheck())
        }
    }
}


const getPruebas = (pruebas) =>( {
    type:'getPruebas',
    payload:pruebas
});
const endCheck = () =>( {
    type:'endCheck',
});