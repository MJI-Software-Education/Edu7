import React, { useContext } from 'react';
import { NotaContext } from '../useContext/NotaContext';
const { DateTime } = require("luxon");

export const CardBodyNotas = ({ notas_alumno }) => {

    const { notaAsig } = useContext(NotaContext);

    const notasFiltered = notas_alumno.filter( n => n.idAsignatura === notaAsig );

    return (
        <div>
            <div className="container">
                {
                    ( notasFiltered.length > 0 ) &&

                    <div className="row mb-3">
                        <div className="col-md-2">
                            Docente:
                        </div>
                        <div className="col-md-10">
                            { notasFiltered[0]?.idNota.idUsuario.nombre +' '+ notasFiltered[0]?.idNota.idUsuario.apellidoP +' '+ notasFiltered[0]?.idNota.idUsuario.apellidoM }
                        </div>
                    </div>
                }
                <div className="card border-secondary">
                    <div className="container p-3">
                        {
                            ( notasFiltered.length > 0 ) &&
                            notasFiltered?.map( (n, index) => (
                                <div className="card border p-3">
                                    <div className="row">
                                        <div className="col-md-2">
                                            { index + 1 }
                                        </div>
                                        <div className="col-md-4">
                                            {n.idNota.descripcion}
                                        </div>
                                        <div className="col-md-4">
                                            { DateTime.fromISO( n.idNota.fecha ).toFormat('dd/LL/yyyy') }
                                        </div>
                                        <div className="col-md-2">
                                            {n.nota}
                                        </div>
                                    </div>
                                </div>       
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
