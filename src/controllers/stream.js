import { fetchConToken } from "../helpers/fetch";

export const dispatchGetStream =(idCurso)=>{
    return async(dispatch) =>{
        dispatch(startCheck());
        const resp = await fetchConToken(`stream/getStream/`,{idCurso},'POST');
        console.log(resp);
        if(resp.ok){
            dispatch(getStream(resp.url));
        }else{
            dispatch(endCheck())
        }
    }
}

const getStream = (url) =>( {
    type:'getStream',
    payload:url
});
const endCheck = () =>( {
    type:'endCheck',
});
const startCheck = () =>( {
    type:'startCheck',
});