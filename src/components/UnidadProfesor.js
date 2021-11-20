import React from 'react'
import { Link } from 'react-router-dom';
import DescriptionIcon from '@material-ui/icons/Description';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import { useSelector } from 'react-redux';
import "../styles/tarea.css";
import { ModalUnidad } from './ModalUnidad';
import { DialogModal } from './Dialog';

export const UnidadProfesor = ({unidad, index, tareas, materiales, tareaAlumno, pruebas,idAsignatura, idCurso}) => {
    const baseURL = 'http://localhost:8080/api/material';
    const conexion = localStorage.getItem('conexion');

    const {_id} = useSelector(state => state.auth);
  
    return (
        <div>
            <div className="bg-light py-4 px-4 d-flex flex-row align-items-center justify-content-between">
                <div className="d-flex flex-row align-items-center">
                    <h1 className="fw-bold fs-1 text-muted"> {index}</h1>
                    <h1 className="fw-normal fs-4 px-4">{unidad.unidad}</h1>
                </div>
            <ModalUnidad key={unidad.codUnidad} unidad={unidad} />
           
            </div>
            
            
                <div className="container px-4 py-4 ps-5 d-flex flex-column">
                <div className="container d-flex flex-column">
                <h1 className="fw-bold fs-4">Materiales</h1>
                    {
                        materiales?.map(material=>(
                            <a href={`${baseURL}/${conexion}/${material.id}`}  key={material.id} className="fw-normal fs-5 deco-none pointer " >
                            <DescriptionIcon className="mb-2" />
                            {material.name.split('.')[0]}</a>
                        ))
                    }
                <div className="d-flex justify-content-end pointer">
                <DialogModal idUnidad={unidad._id} idCurso={idCurso} idAsignatura={idAsignatura}/>
                        </div>
                    </div>
                    <div className="container d-flex flex-column">
                <h1 className="fw-bold fs-4">Tareas</h1>
                    {                    
                        tareas?.map((t, index)=>{
                            
                            const filteredJob = tareaAlumno?.filter( f => f.idTarea === t.id && f.idUsuario === _id && f.idUnidad === t.idUnidad )

                            if (filteredJob.length >= 1) {
                                const link = document.getElementById( t.id );
                                link?.setAttribute("class","fw-normal fs-5 deco-none pointer disabled");
                            }

                            return(
                            <Link id={ t.id } key={ t.id } to={`/tareas/${ t.id }`} className="fw-normal fs-5 deco-none pointer" >
                                <AssignmentTurnedInIcon className="mb-2" />
                                Tarea { index + 1 }
                            </Link>
                            
                        )})
                    }
                    <div className="d-flex justify-content-end pointer">
                                +
                        </div>
                        </div>
                        <div className="container d-flex flex-column">
                        <h1 className="fw-bold fs-4">Pruebas</h1>
                        {
                            pruebas?.map(prueba=>(
                                <div key={prueba.id} className="d-flex justify-content-between ">
                                <div>
                                <Link to={`/prueba/${idAsignatura}/${unidad._id}/${prueba.id}`} className="fw-normal fs-5 deco-none pointer" >
                                <InsertDriveFileIcon className="mb-2" />{prueba.name}</Link>
                                </div>
                                <div>
                                {
                                    (index % 2 === 0) 
                                    ? <CheckBoxIcon style={{color:'grey'}} />
                                    : <CheckBoxOutlineBlankIcon />
                                }
                                
                                
                                </div>
                                </div>
                            ))
                        }
                        <div className="d-flex justify-content-end pointer">
                                +
                        </div>
                        </div>
                   
                </div>
            
    </div>
    );
}
