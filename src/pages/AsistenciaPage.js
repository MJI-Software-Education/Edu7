import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows2 = [
  createData('04-10-2021-Lunes', 'Ismael Ramos', <div className="btn-asistencia presente">Presente</div>),
  createData('05-10-2021-Martes', 'Ismael Ramos', <div className="btn-asistencia retraso">Retraso</div>),
  createData('06-10-2021-Miercoles','Ismael Ramos', <div className="btn-asistencia ausente">Ausente</div>),
  createData('07-10-2021-Jueves', 'Ismael Ramos', <div className="btn-asistencia presente">Presente</div>),
  createData('08-10-2021-Viernes', 'Ismael Ramos', <div className="btn-asistencia justificado">Justificado</div>),
];

const asistencia = [
    
]

export const AsistenciaPage = () => {
    const classes = useStyles();
   
    const getDaysArray = (year, month) => {
        const names = [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ];
        const date = new Date(year, month - 1, 1);
        const rows = [];
        while (date.getMonth() == month - 1) {
          rows.push({date:date.getDate() + "-" + names[date.getDay()], asistente:'Ismael Ramos'});
          date.setDate(date.getDate() + 1);
        }
        return rows;
      }
     const rows = getDaysArray(2021,10)
     console.log(rows2)
    return (
        <div className="container">
            <h2 className="fw-bold fs-3" >Asistencia</h2>
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
          {rows.map((row) => (
            <TableRow key={row.date}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="left">{row.asistente}</TableCell>
              <TableCell align="left"><div className="btn-asistencia justificado">Justificado</div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}
