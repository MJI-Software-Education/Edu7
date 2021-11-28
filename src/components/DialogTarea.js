import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { useDispatch } from 'react-redux';
import { jobStartAddNew } from '../controllers/tarea';
import { useForm } from '../hooks/useForm';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const DialogTareaModal = ({idAsignatura,idUnidad,idCurso}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [form, onChange] = useForm({
      title:'',
      subtitle:'',
      dateInit: Date.now(),
      dateEnd: Date.now(),
  });
  const {title, subtitle,dateInit, dateEnd} = form;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
   const onClick = () => {

     dispatch(jobStartAddNew(idCurso,idAsignatura,idUnidad,title,subtitle,dateInit,dateEnd));

   }
 

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        +
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Nueva tarea</DialogTitle>
        <DialogContent>
        <div  className="caja">
            <div className="container bg-white p-4 rounded ">

                {<>
                    <div className="container bg-light h-50">   
                        <section className="container d-flex flex-column ">
                     <input className="mb-4" onChange={onChange} type="text" name="title" value={title} placeholder='Título' />
                     <input className="mb-4" type="text" onChange={onChange} name="subtitle" value={subtitle} placeholder='Subtítulo' />
                     <input className="mb-4" type="date" onChange={onChange} name="dateInit" value={dateInit} placeholder='Subtítulo' />
                     <input className="mb-4" type="date" onChange={onChange} name="dateEnd" value={dateEnd} placeholder='Subtítulo' />
                        </section>
                </div>
                


                <div className="container d-flex justify-content-center mt-4">
                    <button onClick={onClick} className="btn btn-success mx-4">Agregar entrega</button>
                    
                </div>
                    </>
                }
                
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
