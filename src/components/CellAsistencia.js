import { TableCell } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { asistenciaProfesorStartAddNew } from '../controllers/asistenciaProfesor';

export const CellAsistencia = ({ a, fecha, letra }) => {

    const dispatch = useDispatch();

    const handleAsistencia = ( e ) => {
        document.getElementById(e.target.id).setAttribute("disabled",true);
        dispatch( asistenciaProfesorStartAddNew( a._id, letra, fecha.toISOString(), fecha.getFullYear() , e.target.value ) )
        setTimeout(() => {
            document.getElementById(e.target.id).removeAttribute("disabled");
        }, 1500);
    }

    return (
        <div>
            <TableCell id={ a._id }>
                <div class="btn-group" role="group">
                    <button id={`${a._id}/a`} type="button" class="btn btn-danger" value="Ausente" onClick={ (e) => handleAsistencia(e) }>A</button>
                    <button id={`${a._id}/r`} type="button" class="btn btn-warning" value="Retraso" onClick={ (e) => handleAsistencia(e) }>R</button>
                    <button id={`${a._id}/p`} type="button" class="btn btn-success" value="Presente" onClick={ (e) => handleAsistencia(e) }>P</button>
                    <button id={`${a._id}/j`} type="button" class="btn btn-info" value="Justificado" onClick={ (e) => handleAsistencia(e) }>J</button>
                </div>
            </TableCell>
        </div>
    )
}
