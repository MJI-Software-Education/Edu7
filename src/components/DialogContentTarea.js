import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { useDispatch } from 'react-redux';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { useForm } from '../hooks/useForm';
import { dispatchNewEnunciado } from '../controllers/enunciado';
import ExpansionTarea from './ExpansionTarea';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const DialogContentTareaModal = ({tarea}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [form, onChange] = useForm({
      title:'',
      enunciado:'',
      subtitle:'',
      dateInit: Date.now(),
      dateEnd: Date.now(),
  });
  const {title, subtitle,enunciado,dateInit, dateEnd} = form;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
   const onClick = () => {

     dispatch(dispatchNewEnunciado(tarea.id, enunciado));

   }
 

  return (
    <div>
      <div  className="fw-normal fs-5 deco-none pointer" onClick={handleClickOpen} >
                                <AssignmentTurnedInIcon className="mb-2" />
                                {tarea.titulo}
     </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Enunciados de la tarea {tarea.titulo}</DialogTitle>
        <DialogContent>
        <div  className="caja">
            <div className="container bg-white p-4 rounded ">

                <>
                    <div className="container bg-light h-50">   
                        <section className="container d-flex flex-column ">
                     <input className="mb-4" onChange={onChange} type="text" name="enunciado" value={enunciado} placeholder='Título' />
                     {
                         tarea.enunciados.map(enunciado=>(
                           <ExpansionTarea key={enunciado._id} tarea={tarea} enunciado={enunciado} />
                          
                         ))
                     }
                        </section>
                </div>
                


                <div className="container d-flex justify-content-center mt-4">
                    <button onClick={onClick} className="btn btn-success mx-4">Agregar enunciado</button>
                    
                </div>
                    </>
                
                
            </div>
        </div>
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
