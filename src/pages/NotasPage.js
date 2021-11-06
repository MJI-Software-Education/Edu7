import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardBodyNotas } from '../components/CardBodyNotas';
import { CardTitleNotas } from '../components/CardTitleNotas';
import { notaAlumnoStartLoading } from '../controllers/nota_alumno';
import { NotaContext } from '../useContext/NotaContext';

export const NotasPage = () => {

    const dispatch = useDispatch();
    const { idCurso, _id:idUsuario } = useSelector(state => state.auth);
    const asignaturas = idCurso.asignaturas;
    
    const {notas_alumno} = useSelector(state => state.notas_alumno);
    
    useEffect(() => {
        dispatch( notaAlumnoStartLoading( idUsuario ) )
    }, [dispatch])


    const [notaAsig, setnotaAsig] = useState({});

    return (
        <div className="row">
            <div className="container">
                <div className="card p-4 m-2">
                    <NotaContext.Provider value={{ notaAsig, setnotaAsig }}>
                        <CardTitleNotas asignaturas={ asignaturas } /> 
                    </NotaContext.Provider>
                </div>
                {
                    (notas_alumno) ?
                    <div className="card p-4 m-2">
                        <NotaContext.Provider value={{ notaAsig, setnotaAsig }}>
                            <CardBodyNotas notas_alumno={ notas_alumno } />
                        </NotaContext.Provider>
                    </div>
                    :
                    <div>
                        <h2>Ups... parece que todavia no hay notas</h2>
                    </div>
                }
            </div>
        </div>
    )
}
