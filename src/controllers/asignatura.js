import { fetchConToken } from "../helpers/fetch";


export const dispatchGetAsignatura =(id)=>{
    return async(dispatch) =>{
        dispatch(startCheck());
        const resp = await fetchConToken(`asignatura/getAsignatura/${id}`,{},'POST');
        if(resp.ok){
            dispatch(getAsignatura(resp.asignatura));
        }else{
            dispatch(endCheck())
        }
    }
}


const getAsignatura = (asignatura) =>( {
    type:'getAsignatura',
    payload:asignatura
});
const endCheck = () =>( {
    type:'endCheck',
});
const startCheck = () =>( {
    type:'startCheck',
});