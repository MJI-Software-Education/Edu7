import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
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
    width: '50%',
    backgroundColor: '#168553',
    color:'white',
    border:'20px solid #C99675',
    borderRadius:'0px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const ModalOa = ({oa, index}) => {
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
     
    <div style={modalStyle} className={classes.paper}>
        <div>
            <h2 style={{textAlign:'center'}} className="color-white fw-bold fs-3">Objetivo {index+1}</h2>
            <hr/>
        </div>
      <span id="simple-modal-description">
    
      <h2 style={{textAlign:'center'}} className="fw-bold fs-5 color-white">{oa.oa}</h2>
      </span>
    </div>
  );
    return (
        <div >
         
          <h1 onClick={handleOpen} className="fw-normal fs-6 px-4 objetivo">{oa.codOA}</h1>
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
