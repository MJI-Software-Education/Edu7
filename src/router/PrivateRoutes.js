import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoutes = ({
    isAuthenticated,
    Component,
    SecondComponent,
    role,
    ...rest
}) => {
    return (
        <Route {...rest} component={(props)=>(
            (isAuthenticated) ?(role === 'USUARIO') ? <Component {...props} /> : (role === 'DOCENTE') ? <SecondComponent {...props} /> :   <Redirect to="/profesor" />
                               : <Redirect to="/login" />
        )} />
            
    )
}
