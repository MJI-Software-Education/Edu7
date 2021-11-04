import { fetchConToken } from "../helpers/fetch";


export const dispatchGetMateriales =(idCurso, idAsignatura)=>{
    return async(dispatch) =>{
        const resp = await fetchConToken(`material/${idAsignatura}/${idCurso}`,{},'POST');
        if(resp.ok){
            dispatch(getMateriales(resp.materiales));
        }else{
            dispatch(endCheck())
        }
    }
}


const getMateriales = (materiales) =>( {
    type:'getMateriales',
    payload:materiales
});
const endCheck = () =>( {
    type:'endCheck',
});