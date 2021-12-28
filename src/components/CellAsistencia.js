import { TableCell } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asistenciaProfesorStartAddNew } from '../controllers/asistenciaProfesor';
import '../styles/opacityButton.css';

export const CellAsistencia = ({ a, fecha, letra }) => {

    const dispatch = useDispatch();

    const { asistenciaProfesor } = useSelector(state => state.asistenciaProfesor);

    const arrayAsistencia = asistenciaProfesor?.filter( asist => asist.idUsuario === a._id );

    let oldAsistencia = [];

    const handleAsistencia = ( e ) => {
        document.getElementById(e.target.id).setAttribute("disabled",true);
        cleanOpacityButton();
        dispatch( asistenciaProfesorStartAddNew( a._id, letra, fecha.toISOString(), fecha.getFullYear() , e.target.value ) )
        setTimeout(() => {
            document.getElementById(e.target.id).removeAttribute("disabled");
        }, 1500);
    }

    
    const cleanOpacityButton = () => {
        document.getElementById(oldAsistencia[0]).setAttribute("class",oldAsistencia[1]);
    }

    const opacityButton = () => {

        switch (arrayAsistencia[0]?.asistencia) {
            case "Presente":
                document.getElementById(`${a._id}/p`).setAttribute("class","btn btn-success opacity");
                oldAsistencia = [
                    `${a._id}/p`,
                    'btn btn-success'
                ]
                break;
            case "Ausente":
                document.getElementById(`${a._id}/a`).setAttribute("class","btn btn-danger opacity");
                oldAsistencia =[
                    `${a._id}/a`,
                    'btn btn-danger'
                ]
                break;
            case "Retraso":
                document.getElementById(`${a._id}/r`).setAttribute("class","btn btn-warning opacity");
                oldAsistencia = [
                    `${a._id}/r`,
                    'btn btn-warning'
                ]
                break;
            case "Justificado":
                document.getElementById(`${a._id}/j`).setAttribute("class","btn btn-info opacity");
                oldAsistencia = [
                    `${a._id}/j`,
                    'btn btn-info'
                ]
                break;
            default:
                break;
        }

    }


    useEffect(() => {
        opacityButton();
    }, [arrayAsistencia])

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
