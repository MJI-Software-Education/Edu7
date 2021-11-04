import { fetchConToken } from "../helpers/fetch";


export const dispatchGetColegios =()=>{
    return async(dispatch) =>{
        const resp = await fetchConToken('colegio/get',{},'POST');
        if(resp.ok){
            dispatch(getColegios(resp.colegios));
        }else{
            dispatch(endCheck())
        }
    }
}

const getColegios = (cursos) =>( {
    type:'getColegios',
    payload:cursos
});
const endCheck = () =>( {
    type:'endCheck',
});