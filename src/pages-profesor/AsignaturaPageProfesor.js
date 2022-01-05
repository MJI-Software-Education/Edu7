import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import { jobStartLoading } from '../controllers/tarea';
import { dispatchGetAsignatura } from '../controllers/asignatura'
import { UnidadProfesor } from '../components/UnidadProfesor'
import { dispatchGetMateriales } from '../controllers/material'

export const AsignaturaPageProfesor = () => {
    const dispatch = useDispatch();
    const {idAsignatura} = useParams();
    const {idCurso} = useParams();
    useEffect(() => {
        dispatch(dispatchGetAsignatura(idAsignatura))
    }, [dispatch])
    useEffect(() => {
        dispatch( jobStartLoading( idAsignatura ) )
    }, [dispatch])
    useEffect(() => {
        dispatch( dispatchGetMateriales( idCurso,idAsignatura ) )
    }, [dispatch]);
    const {materiales} = useSelector(state => state.materiales);
    const {asignatura,checking} = useSelector(state => state.asignatura);
    const tareas = useSelector(state => state.unidades.tareas);
    const unidades = asignatura?.unidades;


    if(checking){
        return (
            <div className="loading">
                <img  style={{width:'200px'}}   alt="Logo de edu7" src={`../../../assets/logopurpuraedu7.png`} />
            </div>
        );
    }


    return (
        <div>
            <div className="d-flex flex-row align-items-baseline ">
                {/* <Link className="fw-bold fs-3 deco-none negro" to="/asignaturas" >Asignaturas </Link> */}
                <h2 className="fw-bold fs-3" > {asignatura?.asignatura}</h2>
            </div>
            <div className="container shadow-sm p-4 bg-white rounded">
                {
                    unidades?.map((unidad, index)=>{
                        const filterMateriales = materiales.filter(material => material.idUnidad === unidad._id)
                        const filterJob = tareas?.filter(tarea => tarea.idUnidad === unidad._id)
                        return(
                       <UnidadProfesor key={unidad._id} materiales={filterMateriales} tareas={filterJob} unidad={unidad} index={index+1}  idAsignatura={idAsignatura} idCurso={idCurso}/> 
                    )})
                }
            </div>
        </div>
    )
}