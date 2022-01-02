import React, { useEffect, useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { registerLocale, setDefaultLocale } from "react-datepicker";

import { dispatchCursoProfesorCleanAlumnos, dispatchGetUsuarios } from '../controllers/cursos-profesor';
import Swal from 'sweetalert2';

import es from 'date-fns/locale/es';
import { CellAsistencia } from '../components/CellAsistencia';
import { AsistenciaProfesorStartLoading } from '../controllers/asistenciaProfesor';
registerLocale('es', es)

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export const AsistenciaPageProfesor = () => {

    const dispatch = useDispatch();
    const classes = useStyles();
    const [curso, setCurso] = useState("");
    const [letra, setletra] = useState("");
    const [fecha, setfecha] = useState(new Date());
    const { cursos:courses } = useSelector(state => state.cursosProfesor);
    const cursos = [];
    const letras = [];
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

    const { alumnos } = useSelector(state => state.cursosProfesor);

    const handleChange = (event) => {
        setCurso(event.target.value);
    };

    const handleChange2 = (event) => {
        setletra(event.target.value);
    };

    const handleClick = () => {
        if (curso !== "" && letra !== "") {
            dispatch( AsistenciaProfesorStartLoading( letra, fecha.toISOString() ) )
            setTimeout(() => {
                dispatch( dispatchGetUsuarios( letra ) );
            }, 100);
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Ups...',
                text: 'Porfavor completa todos los filtros antes de continuar!',
              })
        }
    }

    const rows = [];

    let verificar = 0;

    // const handleStartDateChange = (e) => {
    //     console.log(e);
    //     setfecha(e);
    // }
    return (
        <div>
            <h1>Asistencia</h1>
            <br />
            <div className="row">
                <div className="container">
                    <div className="card p-4 m-2">
                        <div className="row">
                            <div className="col-md-3">
                                <FormControl variant="filled" style={{ width: '200px', paddingBottom: '10px', marginRight: '50px' }} className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-filled-label">Curso</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={curso}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="MJIServer">
                                            <em>Seleccione</em>
                                        </MenuItem>
                                        {
                                            ( cursos.length > 0 ) &&
                                            cursos.map( (c) => (
                                                <MenuItem key={c.idCurso._id} name={c.idCurso.curso} value={c.idCurso._id}>{c.idCurso.curso}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="col-md-3">
                                <FormControl variant="filled" style={{ width: '200px', paddingBottom: '10px' }} className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-filled-label">Letra</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={letra}
                                        onChange={handleChange2}
                                    >
                                        <MenuItem value="MJIServer">
                                            <em>Seleccione</em>
                                        </MenuItem>
                                        {
                                            ( letras.length > 0 ) &&
                                            letras.map( (c) => (
                                                <MenuItem key={c.idCurso._id} name={c.idCurso.letra} value={c.idCurso._id}>{c.idCurso.letra}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="col-md-3">
                                <DatePicker
                                    locale="es"
                                    selected={fecha}
                                    onChange={(fecha) => setfecha(fecha)}
                                    dateFormat="dd-MM-yyyy"
                                />
                            </div>
                            <div className="col-md-3">
                                <button type="submit" onClick={handleClick} className="btn btn-success">Filtrar</button>
                            </div>
                            <div className="card p-1 m-1">
                                <h6>Siglas para la asistencia:</h6>
                                <label>P : Presente</label>
                                <label>A : Ausente</label>
                                <label>J : Justificado</label>
                                <label>R : Retraso</label>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>

            <div className="card p-4 m-2">
                <h5>Alumnos:</h5>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell align="left">Apellido Paterno</TableCell>
                                <TableCell align="left">Apellido Materno</TableCell>
                                <TableCell align="left">RUT</TableCell>
                                <TableCell align="left">Asistencia</TableCell>
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
                                            <CellAsistencia a={a} index={index} fecha={fecha} letra={letra} />
                                        </TableRow>
                                    ))
                                    : <TableCell>Ups... Parece que aún no hay registros</TableCell>
                                }
                                   
                                </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
