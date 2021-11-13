import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { getAsignaturaById } from '../helpers/getAsignaturaById'
import { useDispatch, useSelector } from 'react-redux'
import { Unidad } from '../components/Unidad'
import { Link } from 'react-router-dom'

import { dispatchGetAsignatura } from '../controllers/asignatura'

export const AsignaturaPageProfesor = () => {
    const dispatch = useDispatch();
    const {idAsignatura} = useParams();
    useEffect(() => {
        dispatch(dispatchGetAsignatura(idAsignatura))
    }, [dispatch])
    const {asignatura,checking} = useSelector(state => state.asignatura);
    const unidades = asignatura?.unidades;


    

    if(checking){
        return (
            <div className="loading">
                <h1>Cargando...</h1>
            </div>
        );
    }

    return (
        <div>
            <div className="d-flex flex-row align-items-baseline ">
                {/* <Link className="fw-bold fs-3 deco-none negro" to="/asignaturas" >Asignaturas </Link> */}
                <h2 className="fw-bold fs-3" > {asignatura.asignatura}</h2>
            </div>
            <div className="container shadow-sm p-4 bg-white rounded">
                {
                    unidades?.map((unidad, index)=>{
                       
                        
                        return(
                       <Unidad key={unidad._id} unidad={unidad} index={index+1}  idAsignatura={idAsignatura} /> 
                    )})
                }
            </div>
        </div>
    )
}