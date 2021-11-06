import React, { useContext } from 'react';
import "../styles/notaAsignatura.css";
import { NotaContext } from '../useContext/NotaContext';

export const CardTitleNotas = ({ asignaturas }) => {

    const { notaAsig, setnotaAsig } = useContext(NotaContext);

    const handleClick = ({target}) => {
        setnotaAsig( target.id );
    }

    return (
        <div>
            {
                asignaturas.map( a => (
                    <div className="card border-secondary">
                        <div id={ a._id } onClick={ handleClick } className="card-body click">
                            { a.asignatura }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
