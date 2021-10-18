import React, { useEffect, useState }  from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { dispatchLogin } from '../controllers/auth';
import { dispatchGetColegios } from '../controllers/colegio';
import { useForm } from '../hooks/useForm';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import '../index.css';
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
export const LoginPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(dispatchGetColegios());       
    }, [dispatch]);
    const {colegios} = useSelector(state=>state.colegios);
    const [form, onChange] = useForm({
        // email:'miguel@albanezz.com',
        email:'ORTIZ@hotmail.com',
        password:'123456'
    });
    const {email, password} = form;
    const onSubmit =(e)=>{
        e.preventDefault();
        dispatch(dispatchLogin(email,password,colegio));
    }
    const classes = useStyles();
    const [colegio, setColegio] = useState('');
  
    const handleChange = (event) => {
        setColegio(event.target.value);
    };
    return (
        <div className="contenido">
            <div className="row-2">
                <div className="imagen"> 
                    <img alt="imagen de portada" src="https://static.vecteezy.com/system/resources/previews/002/072/005/non_2x/modern-gradient-purple-blue-background-free-vector.jpg" />
                </div>
                <div className="center">
                    <form onSubmit={onSubmit}>
                        <h1>Sign in</h1>
                        <FormControl variant="filled" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-filled-label">Colegio</InputLabel>
                            <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={colegio}
                            onChange={handleChange}
                            >
                            <MenuItem value="MJIServer">
                                <em>MJI</em>
                            </MenuItem>
                            {
                                colegios.map(colegio=>(
                                    <MenuItem key={colegio.id} value={colegio.nombre.replace(/ /g, "")}>{colegio.nombre}</MenuItem>
                                ))
                            }
                            </Select>
                        </FormControl>
                        <input type="text" name="email" value={email} onChange={onChange} placeholder="email" />
                        <input type="password" name="password" value={password} onChange={onChange} placeholder="password" />
                        <button>Ingresar</button>
                        <h3>¿Olvidó su contraseña?</h3>
                    </form>
                </div>
            </div>
        </div>
    )
}
