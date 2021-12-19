import { fetchConToken } from "../helpers/fetch";


export const dispatchNewEnunciado =(idTarea, enunciado)=>{
    return async(dispatch) =>{
        const resp = await fetchConToken('enunciados/',{idTarea,enunciado},'POST');
        if(resp.ok){
            dispatch(newEnunciado(resp.enunciado));
        }else{
            dispatch(endCheck())
        }
    }
}
export const DispatchDeleteEnunciado = (id,tareaId) => {
    return async ( dispatch ) => {
        try {
            const body = await fetchConToken(`enunciados/${id}`, {}, 'DELETE');
            console.log(tareaId);
            if ( body.ok ) {
                dispatch( dispatchDeleteEnunciado(id,tareaId) )
            }

        } catch (error) {
            console.log(error);
        }
    }
}
const dispatchDeleteEnunciado = (idEnunciado,tareaId) => ({
    type: 'dispatchDeleteEnunciado',
    payload: idEnunciado,
    tareaId:tareaId
})

const newEnunciado = (enunciado) =>( {
    type:'newEnunciado',
    payload:enunciado
});
const endCheck = () =>( {
    type:'endCheck',
});