import { TableCell } from '@material-ui/core';
import React from 'react'
import { useDispatch } from 'react-redux';
import { notaAlumnoStartAddNew } from '../controllers/nota_alumno';
import { useForm } from '../hooks/useForm';

export const CellNotas = ({n, index, a, prueba, curso, asignatura}) => {

    const dispatch = useDispatch();

    const [ form, onChange ] = useForm({
        valor: ( a._id == n[index]?.idUsuario) ? n[index]?.nota : 1
    });

    const handleChangeNota = (e, idAlumno) => {

        const onlyDouble = /^-?[\d.]+(?:e-?\d+)?$/;
        let decimal = parseFloat(form.valor).toFixed(1);        

        if( onlyDouble.test(decimal) ){
            if (e.keyCode === 13 && decimal <= 7.0 && decimal >= 1.0) {
                document.getElementById(idAlumno).setAttribute("disabled",true);
                dispatch(notaAlumnoStartAddNew(prueba, idAlumno, curso, asignatura, decimal.replace(".",",") ));
                setTimeout(() => {
                    document.getElementById(idAlumno).removeAttribute("disabled");
                    document.getElementById(idAlumno).setAttribute("class","rounded border border-success border-3");
                }, 1500);
            } else {
                document.getElementById(idAlumno).removeAttribute("class");
            }
        }
    }

    return (
        <div>
            <TableCell key={n[index]?.idUsuario}> <input className="rounded" type="text" name='valor' value={form.valor} onChange={onChange} onKeyDown={(e) => handleChangeNota(e,a._id)} min="1.0" step="0.1" max="7.0" id={a._id} placeholder="6.5" /> </TableCell>
        </div>
    )
}
