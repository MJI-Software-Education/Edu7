import { fetchConToken } from "../helpers/fetch";


export const dispatchNewEnunciado =(idTarea, enunciado)=>{
    return async(dispatch) =>{
        const resp = await fetchConToken('enunciados/',{idTarea,enunciado},'POST');
        console.log(resp)
        if(resp.ok){
            dispatch(newEnunciado(resp.enunciado));
        }else{
            dispatch(endCheck())
        }
    }
}

const newEnunciado = (enunciado) =>( {
    type:'newEnunciado',
    payload:enunciado
});
const endCheck = () =>( {
    type:'endCheck',
});