import React from 'react'
import { useDispatch } from 'react-redux';
import { dispatchLogin } from '../controllers/auth';
import { useForm } from '../hooks/useForm'
import '../index.css';
export const LoginPage = () => {
    const dispatch = useDispatch();
    const [form, onChange] = useForm({
        email:'miguel@albanezz.com',
        password:'123456'
    });
    const {email, password} = form;
    const onSubmit =(e)=>{
        e.preventDefault();
        dispatch(dispatchLogin(email,password));
    }
    return (
        <div className="contenido">
            <div className="row-2">
                <div className="imagen"> 
                    <img alt="imagen de portada" src="https://static.vecteezy.com/system/resources/previews/002/072/005/non_2x/modern-gradient-purple-blue-background-free-vector.jpg" />
                </div>
                <div className="center">
                    <form onSubmit={onSubmit}>
                        <h1>Sign in</h1>
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
