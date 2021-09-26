import React from 'react'
import { useParams } from 'react-router'
import { getAsignaturaById } from '../helpers/getAsignaturaById'
import { useSelector } from 'react-redux'
import { Unidad } from '../components/Unidad'
import { Link } from 'react-router-dom'

export const AsignaturaPage = () => {
    const {idCurso} = useSelector(state => state.auth);
    const asignaturas = idCurso.asignaturas;
    const {idAsignatura} = useParams();
    const asignatura = getAsignaturaById(idAsignatura, asignaturas);
 
    return (
        <div>
            <div className="d-flex flex-row align-items-baseline ">
                <Link className="fw-bold fs-3 deco-none negro" to="/asignaturas" >Asignaturas </Link>
                <h2 className="fw-bold fs-3" > /{asignatura.asignatura}</h2>
            </div>
            <div className="container shadow-sm p-4 bg-white rounded">
                {
                    asignatura.unidades.map((unidad, index)=>(
                       <Unidad key={unidad._id} unidad={unidad} index={index+1}/> 
                    ))
                }
            </div>
        </div>
    )
}