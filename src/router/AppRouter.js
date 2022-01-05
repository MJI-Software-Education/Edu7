
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { renew } from '../controllers/auth';
import { LoginPage } from '../pages/LoginPage';
import { DashBoardRoutes } from './DashboardRoutes';
import { DashBoardRoutesProfesor } from './DashboardRoutesProfesor';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
export const AppRouter = () => {
    const dispatch = useDispatch();
    const {checking,_id,role} = useSelector(state => state.auth);
    
    useEffect(() => {
        dispatch(renew())
        
    }, [dispatch]);
   
    if(checking){
        return (
            <div className="loading">
                <img  style={{width:'200px'}}   alt="Logo de edu7" src={`../assets/logopurpuraedu7.png`} />
            </div>
        );
    }
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes isAuthenticated={!!_id} path="/login" Component={LoginPage} />
                    <PrivateRoutes isAuthenticated={!!_id} role={role} exact path="/" Component={DashBoardRoutes} SecondComponent={DashBoardRoutesProfesor} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
