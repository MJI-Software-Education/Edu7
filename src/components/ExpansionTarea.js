import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { DialogItem } from './DialogItem';
import { useDispatch } from 'react-redux';
import { DispatchDeleteEnunciado } from '../controllers/enunciado';
import DeleteIcon from '@material-ui/icons/Delete';
import { DispatchDeleteItem } from '../controllers/item';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom:'5px'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function ExpansionTarea({tarea,enunciado}) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const onDelete = ()=>{
    dispatch(DispatchDeleteEnunciado(enunciado._id, enunciado.idTarea))
  }
  const onDeleteItem = (thisId)=>{

    dispatch(DispatchDeleteItem(thisId,enunciado._id, enunciado.idTarea))
  }
  return (
    <div className={classes.root}>
      <Accordion> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{enunciado.enunciado}</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <div className="d-flex flex-column w-100">

            {enunciado.items.map(e=>(
              <div className="d-flex justify-content-between">
                <h2 className="fst-normal fs-5">
                    <DialogItem key={e._id} idEnunciado={enunciado._id} tareaId={enunciado.idTarea} cuerpo={e} mode={2}/>
                </h2>
               

                <DeleteIcon onClick={()=>onDeleteItem(e._id)} className="red cursor"/>
              
              </div>
                  
            ))}
          </div>
         
          
        </AccordionDetails>
        <div className="d-flex justify-content-end pointer p">
          <button onClick={onDelete} className="btn btn-danger mr-5">Eliminar</button>
                <DialogItem idEnunciado={enunciado._id} tareaId={enunciado.idTarea}/>
                        </div>
      </Accordion>
    </div>
  );
}