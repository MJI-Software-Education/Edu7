import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

export const Curso = ({title, bacgroundColor,icon}) => {
    const useStyles = makeStyles((theme) => ({
        asignatura:{
            textDecoration:'none',
            height: '400px',
            borderRadius: '24px',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            transitionDuration: '0.5s',
            "&:hover": {
                backgroundColor: bacgroundColor,
                transform: 'translate(0px, -5px)',
            }},
        circulo:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: bacgroundColor,
            padding: '20px',
            width: '100px',
            height: '100px',
            borderRadius: '100%',
          }
    }));
    const styles = useStyles();
    return (
        <div className={`shadow ${styles.asignatura}`}>
                        <div className={styles.circulo}>
                            {icon}
                        </div>
                        <div style={{
                            width:'80%',
                            textAlign:'center',
                            marginTop:'10px'
                        }}>
                            <h2 className="fw-bold fs-4 text-muted " >{title}</h2>     
                        </div>
        </div>
    )
}
