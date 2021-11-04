import { fetchConToken, fetchConTokenArchivos } from "../helpers/fetch";


export const dispatchSubirPrueba =(idCurso, idAsignatura, idUnidad, idPrueba, file)=>{
    return async(dispatch) =>{
        const resp = await fetchConTokenArchivos(`pruebaAlumno/${idCurso}/${idAsignatura}/${idUnidad}/${idPrueba}`,file,'POST');
        if(resp.ok){
            dispatch(subirPrueba(resp.prueba));
        }else{
            dispatch(endCheck())
        }
    }
}
export const dispatchGetPrueba =(idPrueba)=>{
    return async(dispatch) =>{
        dispatch(check())
        const resp = await fetchConToken(`pruebaAlumno/${idPrueba}`,{},'POST');
        if(resp.ok){
            dispatch(subirPrueba(resp.prueba));
        }else{
            dispatch(endCheck())
        }
    }
}


const subirPrueba = (pruebas) =>( {
    type:'subirPrueba',
    payload:pruebas
});
const endCheck = () =>( {
    type:'endCheck',
});
const check = () =>( {
    type:'check',
});