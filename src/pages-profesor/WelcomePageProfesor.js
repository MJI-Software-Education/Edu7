import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { dispatchGetCursos } from '../controllers/cursos-profesor';


export const WelcomePageProfesor = () => {

    const dispatch = useDispatch();

    const {_id:idUsuario} = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(dispatchGetCursos(idUsuario))
    }, [dispatch])

    return (
        <div>
            <h1>WelcomePageProfesor</h1>
        </div>
    )
}
