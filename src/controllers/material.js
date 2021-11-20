import { fetchConToken, fetchConTokenArchivos } from "../helpers/fetch";

export const dispatchGetMateriales =(idCurso, idAsignatura)=>{
    return async(dispatch) =>{
        const resp = await fetchConToken(`material/${idAsignatura}/${idCurso}`,{},'POST');
        console.log(resp);
        if(resp.ok){
            dispatch(getMateriales(resp.materiales));
        }else{
            dispatch(endCheck())
        }
    }
}
export const dispatchSubirMaterial =(idCurso, idAsignatura, idUnidad, file)=>{
    return async(dispatch) =>{
        const resp = await fetchConTokenArchivos(`material/${idCurso}/${idAsignatura}/${idUnidad}`,file,'POST');
        console.log(resp);
        if(resp.ok){
            dispatch(subirMaterial(resp.material));
        }else{
            dispatch(endCheck())
        }
    }
}


const getMateriales = (materiales) =>( {
    type:'getMateriales',
    payload:materiales
});
const subirMaterial = (material) =>( {
    type:'subirMaterial',
    payload:material
});
const endCheck = () =>( {
    type:'endCheck',
});