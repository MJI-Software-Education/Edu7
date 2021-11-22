import { fetchConToken } from "../helpers/fetch";


export const dispatchGetHorario =(idCurso)=>{
    return async(dispatch) =>{
        const resp = await fetchConToken(`horario/getHorario`,{idCurso},'POST');
        console.log(resp)
        if(resp.ok){
            dispatch(getHorario(resp.horario));
        }else{
            dispatch(endCheck())
        }
    }
}


const getHorario = (horario) =>( {
    type:'getHorario',
    payload:horario
});
const endCheck = () =>( {
    type:'endCheck',
});