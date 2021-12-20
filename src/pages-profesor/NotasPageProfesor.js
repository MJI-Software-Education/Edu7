import { FormControl, InputLabel, makeStyles, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { dispatchCursoProfesorCleanAlumnos, dispatchGetNotas, dispatchGetPruebas, dispatchGetUsuarios } from '../controllers/cursos-profesor';
import Swal from 'sweetalert2'
import { notaAlumnoStartAddNew } from '../controllers/nota_alumno';
import { useForm } from '../hooks/useForm';
import { CellNotas } from '../components/CellNotas';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

export const NotasPageProfesor = () => {

    const dispatch = useDispatch();
    const classes = useStyles();
    
    const [curso, setCurso] = useState("");
    const [letra, setLetra] = useState("");
    const [asignatura, setAsignatura] = useState("");
    const [prueba, setPrueba] = useState("");
    const {_id:idUsuario} = useSelector(state => state.auth)
    const { cursos:courses } = useSelector(state => state.cursosProfesor);
    const cursos = [];
    const letras = [];
    const asignaturas = [];
    const map = new Map();

    useEffect(() => {
        dispatch(dispatchCursoProfesorCleanAlumnos())
    }, [dispatch])

    for (const curso of courses) {
        if(!map.has(curso.idCurso.curso)){
            map.set(curso.idCurso.curso, true);    // set any value to Map
            cursos.push(curso);
        }
    }

    for (const curso of courses) {
        if(!map.has(curso.idCurso._id)){
            map.set(curso.idCurso._id, true);    // set any value to Map
            letras.push(curso);
        }
    }

    for (const curso of courses) {
        if(!map.has(curso.idAsignatura._id)){
            map.set(curso.idAsignatura._id, true);    // set any value to Map
            asignaturas.push(curso);
        }
    }
    
    const { alumnos, pruebas, notas } = useSelector(state => state.cursosProfesor);

    const handleChangeCurso = (event) => {
        setCurso(event.target.value);
    };

    const handleChangeLetra = (event) => {
        setLetra(event.target.value);
    };

    const handleChangeAsignatura = (event) => {
        setAsignatura(event.target.value);
        handleAsignatura(event.target.value);
    };

    const handleChangePrueba = (event) => {
        setPrueba(event.target.value);
    };

    const handleClick = () => {
        if (curso !== "" && letra !== "" && asignatura !== "" && prueba !== "") {
            dispatch( dispatchGetUsuarios( letra ) );
            dispatch( dispatchGetNotas(letra, asignatura, prueba))
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Ups...',
                text: 'Porfavor completa todos los filtros antes de continuar!',
              })
        }
    }

    const handleAsignatura = (e) => {
        dispatch( dispatchGetPruebas( idUsuario, e ) );
    }

    return (
        <div>
            <h2 className="fw-bold fs-3">Notas</h2>
            <div className="row">
                <div className="container">
                    <div className="card p-4 m-2">
                        <div className="row">
                            <div className="col-md-3">
                                <FormControl variant="filled" style={{width:'200px', paddingBottom:'10px'}} className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-filled-label">Cursos</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={curso}
                                        onChange={handleChangeCurso}
                                        required={true}
                                    >
                                        <MenuItem value="MJIServer">
                                            <em>Seleccione</em>
                                        </MenuItem>
                                        {
                                            ( cursos?.length > 0 ) &&
                                            cursos.map( (c) => (
                                                <MenuItem key={c.idCurso._id} name={c.idCurso.curso} value={c.idCurso._id}>{c.idCurso.curso}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="col-md-3">
                                <FormControl variant="filled" style={{width:'200px', paddingBottom:'10px'}} className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-filled-label">Letra</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={letra}
                                        onChange={handleChangeLetra}
                                        required={true}
                                    >
                                        <MenuItem value="MJIServer">
                                            <em>Seleccione</em>
                                        </MenuItem>
                                        {
                                            ( letras?.length > 0 ) &&
                                            letras.map( (c) => (
                                                <MenuItem key={c.idCurso._id} name={c.idCurso.letra} value={c.idCurso._id}>{c.idCurso.letra}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="col-md-3">
                                <FormControl variant="filled" style={{width:'200px', paddingBottom:'10px'}} className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-filled-label">Asignatura</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={asignatura}
                                        onChange={handleChangeAsignatura}
                                        required={true}
                                    >
                                        <MenuItem value="MJIServer">
                                            <em>Seleccione</em>
                                        </MenuItem>
                                        {
                                            courses?.map( (c) => (
                                                ( c.idAsignatura?.length > 0 ) &&
                                                c.idAsignatura.map( (a) => (
                                                    ( c.idCurso._id === letra ) &&
                                                    <MenuItem onChange={ handleAsignatura } name={a.asignatura} key={a._id} value={a._id}>{a.asignatura}</MenuItem>
                                                ))
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="col-md-2">
                                <FormControl variant="filled" style={{width:'200px', paddingBottom:'10px'}} className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-filled-label">Prueba</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={prueba}
                                        onChange={handleChangePrueba}
                                        required={true}
                                    >
                                        <MenuItem value="MJIServer">
                                            <em>Seleccione</em>
                                        </MenuItem>

                                        {
                                            ( pruebas?.length > 0 ) && 
                                            pruebas.map( p => (
                                                <MenuItem key={p.id} name={p.descripcion} value={p.id}>{p.descripcion}</MenuItem>
                                            ))
                                        }

                                    </Select>
                                </FormControl>
                            </div>
                            <div>
                                <button type="submit" onClick={handleClick} className="btn btn-success">Filtrar</button>
                            </div>
                        </div>
                    </div>
                    <div className="card p-4 m-2">
                        <h5>Alumnos:</h5>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell >Nombre</TableCell>
                                        <TableCell align="left">Apellido Paterno</TableCell>
                                        <TableCell align="left">Apellido Materno</TableCell>
                                        <TableCell align="left">Rut</TableCell>
                                        <TableCell align="left">Nota</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {
                                    ( alumnos?.length > 0) ?
                                    alumnos.map( (a, index) => (
                                        <TableRow key={a._id}>
                                            <TableCell>{ a.nombre }</TableCell>
                                            <TableCell>{ a.apellidoP }</TableCell>
                                            <TableCell>{ a.apellidoM }</TableCell>
                                            <TableCell>{ a.run }</TableCell>
                                            {
                                                ( notas?.length > 0 ) &&
                                                <CellNotas n={notas} index={index} a={a} prueba={prueba} curso={curso} asignatura={asignatura} />
                                            }
                                        </TableRow>
                                    ))
                                    : <TableCell>Ups... Parece que aún no hay registros</TableCell>
                                }
                                   
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}
