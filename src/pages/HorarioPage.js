import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchGetHorario } from '../controllers/horario';
import { useHorario } from '../hooks/useHorario';

export const HorarioPage = () => {
    const dispatch = useDispatch();
    const {idCurso} = useSelector(state => state.auth);
    useEffect(() => {
        dispatch(dispatchGetHorario(idCurso.id));
    }, [dispatch])
    const {horario,checking} = useSelector(state => state.horario);
    const bloquesServer = horario.bloques;
    const bloques = useHorario();
    const dias = ['lunes','martes','miercoles','jueves','viernes','sabado'];
    if(checking){
        return (
            <div className="loading">
                <h1>Cargando...</h1>
            </div>
        );
    }
    return (
        <div>
            <table className="table table-striped table-bordered "><thead ><tr className="text-uppercase text-center"><th _ngcontent-cwj-c102=""></th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th><th>Sábado</th>
                
                </tr></thead><tbody>
                    {
                        bloques.map((bloque, i)=>(
                <tr key={i}><td className="text-center text-nowrap">{bloque.horaInicial} - {bloque.horaFinal}</td>
                        {
                            dias.map(dia=>(
                                <th key={`${dia}-${i}`}>
                                   {
                                       bloquesServer?.map(bloq=>{
                                           if(bloq.dia === dia){
                                               if(bloq.bloque?.includes(i+1)){
                                                   return (
                                                       <div key={`${bloq}-${i}`} className="text-center d-flex flex-column">
                                                           <h3 className="tit-asig">{bloq.idAsignatura.asignatura}</h3>
                                                           <h3 className="tit-curso opacity-sm">{bloq.idCurso.curso}-{bloq.idCurso.letra}</h3>
                                                           <h3 className="tit-profesor opacity-sm">{bloq.idUsuario.nombre}</h3>

                                                           </div>
                                                   )
                                               }
                                           }
                                       })
                                   } 
                                </th>
                            ))
                        }
                </tr>
                
                        ))
                    }
                
                
                </tbody></table>
        </div>
    )
}
