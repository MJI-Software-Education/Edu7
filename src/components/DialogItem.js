import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { useDispatch } from 'react-redux';
import { DispatchNewItem } from '../controllers/tarea';
import { useForm } from '../hooks/useForm';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const DialogItem = ({idEnunciado,tareaId,cuerpo,mode}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [form, onChange,setState] = useForm({
      item:cuerpo===undefined ?'': cuerpo.item,
      isCorrect:cuerpo===undefined ?'':cuerpo.isCorrect
  });
  const {item, isCorrect} = form;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
   const onClick = () => {
       setOpen(false);
     dispatch(DispatchNewItem(idEnunciado,item,isCorrect,tareaId));
   }
   const onEdit = () => {
       setOpen(false);
     dispatch(DispatchNewItem(idEnunciado,item,isCorrect,tareaId));
   }

 

  return (
    <div>
      
      {
        mode===2 ?
        <div  className="fw-normal fs-5 deco-none pointer" onClick={handleClickOpen} >
     
                                {cuerpo.item}
     </div>:
     <Button variant="outlined" color="primary" onClick={handleClickOpen}>
     +
   </Button>
      }
      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
        {
           mode===2?cuerpo.item:'Item'
        }
        </DialogTitle>
        <DialogContent>
        <div  className="caja">
            <div className="container bg-white p-4 rounded ">

                {<>
                    <div className="container bg-light h-50">   
                        <section className="container d-flex flex-column ">
                     <input className="mb-4" onChange={onChange} type="text" name="item" value={item} placeholder='Item' />
                     <input className="mb-4" type="text" onChange={onChange} name="isCorrect" value={isCorrect} placeholder='¿Es correcto?' />
                        </section>
                </div>
                


                <div className="container d-flex justify-content-center mt-4">
                    <button onClick={onClick} className="btn btn-success mx-4">
                      {
                        mode===2?'Guardar':'Agregar Item'
                      }
                    </button>
                    
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
