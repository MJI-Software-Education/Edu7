import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { tareaAlumnoStartAddNew } from '../controllers/tarea_alumno';

export const CardBodyJob = ({ idTarea, idUnidad, enunciados }) => {

    const dispatch = useDispatch();

    const [index, setindex] = useState(0);
    const [isVisibleNext, setisVisibleNext] = useState(false);
    const [isVisibleBack, setisVisibleBack] = useState(false);
    const [isFinished, setIsFinished] = useState(true);
    
    const [tareaAlumno, setTareaAlumno] = useState([]);
    
    const usuario = useSelector(state => state.auth);

    const Asignatura_id = localStorage.getItem('idAsignatura');

    let history = useHistory();

    const { _id } = usuario;

    const idItems = [];

    const { id:idCurso } = usuario.idCurso;

    useEffect(() => {
        handleRest();
    }, [])

    useEffect(() => {
        saveSelection()
    }, [tareaAlumno])

    useEffect(() => {
        handleValidateBtnBack();
        handleValidateBtnNext();
    }, [index])

    const handleValidateBtnBack = () => {
        if ( index === 0 ) {
            setisVisibleBack(true);
        }else {
            setisVisibleBack(false);
        }
    }

    const handleValidateBtnNext = () => {
        if ( index === enunciados.length - 1 ) {
            setisVisibleNext(true);
            setIsFinished(false);
        }else {
            setisVisibleNext(false);
            setIsFinished(true);
        }
    }

    const handleExit = () => {

        const jobs = JSON.parse(localStorage.getItem('tareaAlumno'));

        if ( jobs.length === enunciados.length ) {

            jobs.map( (t, index) => {
                idItems[index] = t.itemSelected;
            })

            const newTarea = {
                idUsuario: _id,
                idCurso: idCurso,
                idAsignatura: Asignatura_id,
                idUnidad: idUnidad,
                idTarea: idTarea,
                seleccionItems: idItems
            }
            dispatch(tareaAlumnoStartAddNew( newTarea ) );
            localStorage.setItem('tareaAlumno','');
            history.push(`/asignatura/${ Asignatura_id }`); 
        } else {
            document.getElementById("1").innerHTML = '<div class="alert alert-danger" role="alert">'+
            'Aún no has terminado... Porfavor completa la tarea antes de terminar'+'</div>'
        }
    }

    const handleRest = () => {
        setindex(0);
    }

    const handleNext = (e) => {
        e.preventDefault();
        setindex( index + 1 );
    }

    const handleBack = () => {
        setindex( index - 1 );
    }

    const saveSelection = () => {

        if ( tareaAlumno?.length > 0 ) {
            localStorage.setItem('tareaAlumno', JSON.stringify(tareaAlumno) );
        }
    }

    const handleChangeSelected = ( e ) => {

        const isEmpty = tareaAlumno.filter( tarea => tarea.idEnunciado === e.target.name );

        if ( isEmpty.length > 0 ){
            tareaAlumno.map((tarea) => ( tarea.idEnunciado === e.target.name && tarea.itemSelected !== e.target.value ) && (tarea.itemSelected = e.target.value))
        } else {
            setTareaAlumno([ ...tareaAlumno, {
                idEnunciado: e.target.name,
                itemSelected: e.target.value
            }])
        }
        localStorage.setItem('tareaAlumno', JSON.stringify(tareaAlumno));   
    }

    const handleChecked = ( i ) => {

        if ( localStorage.getItem('tareaAlumno')?.length > 0 ) {

            const jobs = JSON.parse(localStorage.getItem('tareaAlumno'));

            jobs.map( j => {
                if ( j.itemSelected === i._id ) {
                    const radio = document.getElementById(i._id);
                    radio?.setAttribute("checked",true);
                }
            })

        }
    }
  
    return (
        <div className="card border-secondary m-2">
            <div className="card-body">
                <h5 className="card-title mb-5">{ enunciados[index]?.enunciado }</h5>
                
                <form onSubmit={handleNext}>
                    <div className="form-check">
                        {
                            enunciados[index]?.items.map( i => {
                                
                                handleChecked(i);

                            return(

                                <div>
                                    <input className="form-check-input" type="radio" onChange={ handleChangeSelected } value={ i._id } name={ i.idEnunciado } id={ i._id } key={ i._id } required />
                                    <label className="form-check-label" form={ i.idEnunciado }>
                                        { i.item }
                                    </label>
                                </div>
                                
                            )})
                        }
                    </div>
                    <div className="position-relative mt-5 p-2">
                        <div className="row">
                            <span id="1" className="mt-4">
                            </span>
                            <div className="btn-group position-absolute top-0 start-50 translate-middle col-md-6">
                                <button type="button" onClick={handleBack} name="btnBack" hidden={isVisibleBack} className="m-1 btn btn-success">Atrás</button>
                                <button type="submit" name="btnNext" hidden={isVisibleNext} className="m-1 btn btn-success">Siguiente</button>
                                <button type="button" onClick={handleExit} name="btnfinish" hidden={isFinished} className="m-1 btn btn-success">Terminar</button>
                            </div>    
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}
