import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Dropzone from 'react-dropzone';
import GetAppIcon from '@material-ui/icons/GetApp';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { useDispatch } from 'react-redux';
import { dispatchSubirMaterial } from '../controllers/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const DialogModal = ({idAsignatura,idUnidad,idCurso}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = useState('');
  const [extension, setExtension] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const fileName = (
    <>
    {file?.path}
    </>
   
   );
 
   const onClick = () => {
     // console.log(files[0].props.children[0]);
     dispatch(dispatchSubirMaterial(idCurso,idAsignatura,idUnidad,file));
     setFile('');
     setOpen(false);
   }
 
   const handleDrop = (archivo, algo)=>{
     const nombreCortado = archivo[0].name.split('.');
     const valor = nombreCortado[nombreCortado.length - 1];
     setExtension(valor);
     setFile(archivo[0]);
   }
 
   const deleteFile = ()=>{
       setFile('');
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
        <DialogTitle id="alert-dialog-slide-title">Nuevo material</DialogTitle>
        <DialogContent>
        <div  className="caja">
            <div className="container bg-white p-4 rounded ">

                {<>
                    <div className="container bg-light h-50 border-split">   
                        <section className="container">
                        {
                            (file === '')
                            ?<Dropzone  onDrop={handleDrop}>
                            {({getRootProps, getInputProps}) => (
                                <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <div className="py-5 d-flex flex-column align-items-center justify-content-center pointer">
                                                        <GetAppIcon style={{fontSize:60}} />
                                                        <h2 className=" fs-4">Subir archivos</h2>
                                                    </div>
                                </div>
                                </section>
                            )}
                            </Dropzone>
                            :<h2>{file[0]}</h2>
                        }
                        
                            <aside className="d-flex justify-content-start">
                                <ul className="d-flex  align-items-center justify-content-start" >
                                    {
                                       file && 
                                       <div className="d-flex flex-column w-100 h-100 align-items-center justify-content-center">
                                       <img className="tipos" src={`../../../assets/${extension}.png`} alt="imagen de word" />
                                       <div className="w-sm mt-sm text-center">{fileName}</div>
                                        <button onClick={deleteFile} className="btn custom-btn">Borrar</button>
                                       </div>
                                    }
                                
                                    </ul>
                            </aside>
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
