import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { DialogItem } from './DialogItem';

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
  const classes = useStyles();
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
          <div className="d-flex flex-column">

            {enunciado.items.map(e=>(
                <h2 className="fst-normal fs-5">
                    {e.item}
                </h2>
            ))}
          </div>
         
          
        </AccordionDetails>
        <div className="d-flex justify-content-end pointer p">
                <DialogItem idEnunciado={enunciado._id} tareaId={enunciado.idTarea}/>
                        </div>
      </Accordion>
    </div>
  );
}