import React, { useEffect, useState } from 'react';
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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const meses = [
  {
    id: 1,
    mes: 'Enero'
  },
  {
    id: 2,
    mes: 'Febrero'
  },
  {
    id: 3,
    mes: 'Marzo'
  },
  {
    id: 4,
    mes: 'Abril'
  },
  {
    id: 5,
    mes: 'Mayo'
  },
  {
    id: 6,
    mes: 'Junio'
  },
  {
    id: 7,
    mes: 'Julio'
  },
  {
    id: 8,
    mes: 'Agosto'
  },
  {
    id: 9,
    mes: 'Septiembre'
  },
  {
    id: 10,
    mes: 'Octubre'
  },
  {
    id: 11,
    mes: 'Noviembre'
  },
  {
    id: 12,
    mes: 'Diciembre'
  },
];


export const AsistenciaPage = () => {
  const classes = useStyles();
  const { _id } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [mes, setMes] = useState(1);
  const getDaysArray = (year, month) => {
    const names = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const date = new Date(year, month - 1);
    while (date.getMonth() == month - 1) {
      rows.push({ date: date.toISOString().split('T')[0] + "-" + names[date.getDay()], asistente: 'Ismael Ramos', fecha: date.toISOString().split('T')[0] });
      date.setDate(date.getDate() + 1);
    }
    return rows;
  }

  const handleChange = (event) => {
    setMes(event.target.value);
  };
  const rows = [];
  useEffect(() => {

    getDaysArray(2021, mes)
  }, [mes])

  useEffect(() => {
    dispatch(dispatchGetAsistencia(_id))
  }, [])
  getDaysArray(2021, mes);
  const { asistencia } = useSelector(state => state.asistencia);
  let verificar = 0;


  return (
    <div className="container">
      <h2 className="fw-bold fs-3" >Asistencia</h2>
      <FormControl variant="filled" style={{ width: '200px', paddingBottom: '10px' }} className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Meses</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={mes}
          onChange={handleChange}
        >
          <MenuItem value="MJIServer">
            <em>Seleccione</em>
          </MenuItem>
          {
            meses.map(mes => (
              <MenuItem key={mes.id} value={mes.id}>{mes.mes}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Fecha</TableCell>
              <TableCell align="left">Asistente</TableCell>
              <TableCell align="left">Estado</TableCell>
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
                    asistencia?.map(asist => {
                      if (asist.fecha.split('T')[0] === row.fecha) {
                        verificar++;
                        return <TableCell key={asist.fecha} align="left"><div className={`btn-asistencia ${asist.asistencia}`}>{asist.asistencia}</div></TableCell>
                      }
                    })
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
  )
}
