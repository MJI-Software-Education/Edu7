import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { getAsignaturaById } from '../helpers/getAsignaturaById'
import { useDispatch, useSelector } from 'react-redux'
import { Unidad } from '../components/Unidad'
import { Link } from 'react-router-dom'
import { dispatchGetMateriales } from '../controllers/material';
import { jobStartLoading } from '../controllers/tarea';
import { tareaAlumnoStartLoading } from '../controllers/tarea_alumno'
import Swal from 'sweetalert2';

export const AsignaturaPage = () => {
    const dispatch = useDispatch();
    const {idCurso, _id} = useSelector(state => state.auth);
    const asignaturas = idCurso.asignaturas;
    const {idAsignatura} = useParams();
    const asignatura = getAsignaturaById(idAsignatura, asignaturas);

    const tareaAlumno = useSelector(state => state.tareaAlumno.tareaAlumno);
    
    useEffect(() => {
        dispatch( jobStartLoading( idAsignatura ) )
    }, [dispatch])

    useEffect(() => {
        dispatch( tareaAlumnoStartLoading( _id, idAsignatura ))
    }, [dispatch, tareaAlumno])

    useEffect(() => {
        dispatch( dispatchGetMateriales( idCurso.id,idAsignatura ) )
    }, [dispatch]);

    const {materiales} = useSelector(state => state.materiales);

    const tareas = useSelector(state => state.unidades.tareas);

    localStorage.setItem('idAsignatura',idAsignatura);

    return (
        <div>
            <div className="d-flex flex-row align-items-baseline ">
                <Link className="fw-bold fs-3 deco-none negro" to="/asignaturas" >Asignaturas </Link>
                <h2 className="fw-bold fs-3" > /{asignatura.asignatura}</h2>
            </div>
            <div className="container shadow-sm p-4 bg-white rounded">
                {
                    asignatura.unidades.map((unidad, index)=>{
                        const filterMateriales = materiales.filter(material => material.idUnidad === unidad._id)
                        const filterJob = tareas?.filter(tarea => tarea.idUnidad === unidad._id && tarea.enunciados.length !== 0)
                        
                        return(
                       <Unidad key={unidad._id} unidad={unidad} index={index+1} tareas={filterJob} materiales={filterMateriales} tareaAlumno={ tareaAlumno } /> 
                    )})
                }
            </div>
        </div>
    )
}