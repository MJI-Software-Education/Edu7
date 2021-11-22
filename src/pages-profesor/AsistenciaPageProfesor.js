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
import { dispatchGetAsistencia } from '../controllers/asistencia';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
//import { DateTime } from 'luxon';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

//const hoy = DateTime.now().toFormat('dd/LL/yyyy');

const cursos = [
    {
        id: 1,
        curso: 'Primero'
    },
    {
        id: 2,
        curso: 'Segundo'
    },
    {
        id: 3,
        curso: 'Tercero'
    },
    {
        id: 4,
        curso: 'Cuarto'
    },
    {
        id: 5,
        curso: 'Quinto'
    },
    {
        id: 6,
        curso: 'Sexto'
    },
    {
        id: 7,
        curso: 'Septimo'
    },
    {
        id: 8,
        curso: 'Octavo'
    },
    {
        id: 9,
        curso: 'Primero Medio'
    },
    {
        id: 10,
        curso: 'Segundo Medio'
    },
    {
        id: 11,
        curso: 'Tercero Medio'
    },
    {
        id: 12,
        curso: 'Cuarto Medio'
    },
];

const letras = [
    {
        id: 1,
        letra: 'A'
    },
    {
        id: 2,
        letra: 'B'
    },
    {
        id: 3,
        letra: 'C'
    },
    {
        id: 4,
        letra: 'D'
    }
];

//const startDate = moment().format("MMM Do YY");
//const now = moment();


export const AsistenciaPageProfesor = () => {

    const classes = useStyles();
    const [curso, setCurso] = useState();
    const [letra, setletra] = useState();
    const [fecha, setfecha] = useState( new Date() );

    const handleChange = (event) => {
        setCurso(event.target.value);
    };

    const handleChange2 = (event) => {
        setletra(event.target.value);
    };

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
            <div className="container">
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
                            cursos.map(curso => (
                                <MenuItem key={curso.id} value={curso.id}>{curso.curso}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <FormControl variant="filled" style={{ width: '200px', paddingBottom: '10px', marginRight: '10px' }} className={classes.formControl}>
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
                            letras.map(letra => (
                                <MenuItem key={letra.id} value={letra.id}>{letra.letra}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <button> buscar </button>
                <DatePicker    
                    locale="es" 
                    selected={fecha}              
                    onChange={(fecha) => setfecha(fecha)}  
                    dateFormat="dd-MM-yyyy"                     
                />
                {console.log(fecha)}
            </div>
            <br/>
            <div>

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
                            {rows.map((row) => {
                                verificar = 0; return (
                                    <TableRow key={row.date}>
                                        <TableCell component="th" scope="row">
                                            {row.date}
                                        </TableCell>
                                        <TableCell align="left">{row.asistente}</TableCell>
                                        {

                                        }

                                        {
                                            (verificar === 0) && <TableCell align="left"><div className="btn-asistencia nulo">Sin registro</div></TableCell>
                                        }
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
