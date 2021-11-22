import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchGetHorario } from '../controllers/horarioProfesor';
import { useHorario } from '../hooks/useHorario';

export const HorarioPageProfesor = () => {
    const dispatch = useDispatch();
    const { idCurso } = useSelector(state => state.auth);
    // useEffect(() => {
    //     dispatch(dispatchGetHorario(idCurso.id));
    // }, [dispatch])

    const { horario, checking } = useSelector(state => state.horario);
    const bloquesServer = horario?.bloques || [];
    const bloques = useHorario();
    const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];

    return (
        <div>
            <table className="table table-striped table-bordered ">
                <thead>
                    <tr className="text-uppercase text-center">
                        <th _ngcontent-cwj-c102="">
                        </th>
                        <th>Lunes</th>
                        <th>Martes</th>
                        <th>Miércoles</th>
                        <th>Jueves</th>
                        <th>Viernes</th>
                        <th>Sábado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-uppercase text-center">
                        <th _ngcontent-cwj-c102="">
                            08:15 - 09:00	
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="text-uppercase text-center">
                        <th _ngcontent-cwj-c102="">
                        09:00 - 09:45	
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="text-uppercase text-center">
                        <th _ngcontent-cwj-c102="">
                        09:55 - 10:40
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="text-uppercase text-center">
                        <th _ngcontent-cwj-c102="">
                        10:40 - 11:25
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="text-uppercase text-center">
                        <th _ngcontent-cwj-c102="">
                        11:35 - 12:20
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="text-uppercase text-center">
                        <th _ngcontent-cwj-c102="">
                        12:20 - 13:05
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="text-uppercase text-center">
                        <th _ngcontent-cwj-c102="">
                        13:15 - 14:00
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="text-uppercase text-center">
                        <th _ngcontent-cwj-c102="">
                        14:00 - 14:45
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>                    
                    <tr className="text-uppercase text-center">
                        <th _ngcontent-cwj-c102="">
                        14:45 - 15:30
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="text-uppercase text-center">
                        <th _ngcontent-cwj-c102="">
                        15:40 - 16:25
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="text-uppercase text-center">
                        <th _ngcontent-cwj-c102="">
                        16:25 - 17:10
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="text-uppercase text-center">
                        <th _ngcontent-cwj-c102="">
                        17:20 - 18:05
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>        
                </tbody>
            </table>
        </div>
    )
}
