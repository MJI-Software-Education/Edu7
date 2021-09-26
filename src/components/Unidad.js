import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import DescriptionIcon from '@material-ui/icons/Description';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { useDispatch } from 'react-redux';
import { jobStartLoading } from '../controllers/tarea';
import { useSelector } from 'react-redux';
export const Unidad = ({unidad, index}) => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch( jobStartLoading( unidad._id ) )
    }, [dispatch])

    const tareas = useSelector(state => state.jobs.tareas);
    
    return (
        <div>
            <div className="bg-light py-4 px-4 d-flex flex-row align-items-center">
            <h1 className="fw-bold fs-1 text-muted"> {index}</h1>
            
            <h1 className="fw-normal fs-4 px-4">{unidad.unidad}</h1>
            </div>
            
                <div className="container py-4 ps-5 d-flex flex-column">
                    <a className="fw-normal fs-5 deco-none pointer " >
                        <DescriptionIcon className="mb-2" />
                        Material 1</a>
                    <a className="fw-normal fs-5 deco-none pointer " >
                        <DescriptionIcon className="mb-2" />
                        Material 2</a>
                    {
                        ( tareas ) &&
                        tareas.map( (t, index) => (

                            <Link key={ t.id } to={`/tareas/${ t.id }`} className="fw-normal fs-5 deco-none pointer " >
                                <DescriptionIcon className="mb-2" />
                                Tarea { index + 1 }
                            </Link>

                        ))

                    }

                    <div className="d-flex justify-content-between">
                        <div>
                        <Link to="/prueba/" className="fw-normal fs-5 deco-none pointer" >
                        <InsertDriveFileIcon className="mb-2" />Prueba</Link>
                        </div>
                        <div>
                            {
                                (index % 2 === 0) 
                                ? <CheckBoxIcon style={{color:'grey'}} />
                                : <CheckBoxOutlineBlankIcon />
                            }
                            
                            
                        </div>
                    </div>
                </div>
            
    </div>
    );
}
