import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { dispatchGetCursos } from '../controllers/cursos-profesor';
import { FormControl, InputLabel, Select,MenuItem,makeStyles } from '@material-ui/core';
import { dispatchDeleteStream, dispatchGetStream, dispatchNewStream } from '../controllers/stream';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
export const WelcomePageProfesor = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const {_id:idUsuario} = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(dispatchGetCursos(idUsuario))
    }, [dispatch])

    useEffect(() => {
        dispatch(dispatchGetStream(idUsuario))
    }, [dispatch])

    const [curso, setCurso] = useState("");
    const { cursos } = useSelector(state => state.cursosProfesor);
    const { url,checking } = useSelector(state => state.stream);
    
    const handleChangeCurso = (event) => {
        setCurso(event.target.value);
    };

    const onClick = ()=>{
        dispatch(dispatchNewStream(curso));

    }

    const deleteClick = ()=>{
        dispatch(dispatchDeleteStream(curso))
    }
    if(checking){
        return (
            <h1>Cargando...</h1>
        )
    }

    return (
        <div className='container'>
            <section className='d-flex flex-row justify-content-between align-items-center px-5' style={{height:'80vh'}}>
                <div className='d-flex flex-column'>
                    <h1>Crea una nueva reunión</h1>
                    <p>Los servicios requieren que elimines las reuniones activas antes de comenzar otra</p>
                    <div className='d-flex'>
                        {
                            url !==undefined
                            ? <button onClick={deleteClick} style={{backgroundColor:'#F5009B', color:'white'}} className='btn mr-5'>Terminar reunión</button>
                            : <button onClick={onClick} style={{backgroundColor:'#4D4AA0', color:'white'}} className='btn mr-5'>Crear reunión</button>
                        }
                   
                    <FormControl variant="filled" style={{width:'200px'}} className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-filled-label">Cursos</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={curso}
                                        onChange={handleChangeCurso}
                                        required={true}
                                    >
                                 
                                        {
                                            ( cursos?.length > 0 ) &&
                                            cursos.map( (c) => (
                                                <MenuItem key={c.idCurso._id} name={c.idCurso.curso} value={c.idCurso._id}>{c.idCurso.curso}-{c.idCurso.letra}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                    </div>
                </div>
                <div>

                </div>
            </section>
        </div>
    )
}
