import { fetchConToken } from "../helpers/fetch";

export const dispatchGetStream =(idCurso)=>{
    return async(dispatch) =>{
        dispatch(startCheck());
        const resp = await fetchConToken(`stream/getStream/`,{idCurso},'POST');
        console.log(resp);
        if(resp.ok){
            dispatch(getStream(resp));
        }else{
            dispatch(endCheck())
        }
    }
}
export const dispatchNewStream =(idCurso)=>{
    return async(dispatch) =>{
        dispatch(startCheck());
        const resp = await fetchConToken(`stream/`,{idCurso},'POST');
        console.log(resp);
        if(resp.ok){
            window.open(resp.urlAdmin, "Diseño Web", "width=1000, height=900")
            
            dispatch(getStream(resp));
        }else{
            dispatch(endCheck())
        }
    }
}
export const dispatchDeleteStream =(idCurso)=>{
    return async(dispatch) =>{
        dispatch(startCheck());
        const resp = await fetchConToken(`stream/`,{idCurso},'DELETE');
        console.log(resp);
        if(resp.ok){
            dispatch(deleteStream());
        }else{
            dispatch(endCheck())
        }
    }
}

const getStream = (url) =>( {
    type:'getStream',
    payload:url
});
const deleteStream = (url) =>( {
    type:'deleteStream',
    payload:url
});
const endCheck = () =>( {
    type:'endCheck',
});
const startCheck = () =>( {
    type:'startCheck',
});