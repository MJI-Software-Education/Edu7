import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import HelpIcon from '@material-ui/icons/Help';
import Backdrop from '@material-ui/core/Backdrop';
import { ModalOa } from './ModalOa';
function getModalStyle() {

  return {
    top: `${50}%`,
    left: `${50}%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '80%',
    backgroundColor: '#168553',
    color:'white',
    border:'20px solid #C99675',
    borderRadius:'0px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const ModalUnidad = ({unidad}) => {
    const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
     
    <div key={unidad._id} style={modalStyle} className={classes.paper}>
        <div>
            <h2 style={{textAlign:'center'}} className="color-white fw-bold fs-3">{unidad.unidad.split(':')[1]}</h2>
            <hr/>
        </div>
      <span id="simple-modal-description">
      <h2 className="fw-bold fs-5 color-white">Proposito</h2>
        {unidad.proposito}
      <h2 className="fw-bold fs-5 color-white mt-2">Palabras claves</h2>
      <div style={{
          display:'flex',
          flexWrap:'wrap',
        }}>
        {unidad.palabrasClaves.map(palabra=>(
            <p key={palabra}>{
                palabra.includes('.')? palabra.replace('.',',') : `${palabra},` 
                }</p>
            ))}
      </div>
      <h2 className="fw-bold fs-5 color-white">Conocimientos previos</h2>
      <div style={{
          display:'flex',
          flexWrap:'wrap',
        }}>
        {unidad.conocimientosPrevios.map(conocimiento=>(
            <p key={conocimiento}>{conocimiento.replace('.',',')}</p>
            ))}
            
      </div>
      <h2 className="fw-bold fs-5 color-white">Objetivos</h2>
      <div style={{
          display:'flex',
          flexWrap:'wrap',
        }}>
            {
                        unidad.oas.map((oa,index)=>(
                            
                            <ModalOa key={index} oa={oa} index={index}/>
                        ))
            }
            </div>
      </span>
    </div>
  );
    return (
        <div >
          <h1  style={{cursor:'pointer'}} onClick={handleOpen}>
            {<HelpIcon />}
          </h1>
          <Modal
             aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
            {body}
          </Modal>
        </div>
      );
}
