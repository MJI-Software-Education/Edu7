
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
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
export const AppRouter = () => {
    const dispatch = useDispatch();
    const {checking,_id} = useSelector(state => state.auth);
    
    useEffect(() => {
        dispatch(renew())
        
    }, [dispatch]);
   
    if(checking){
        return (
            <div className="loading">
                <h1>Edu7</h1>
            </div>
        );
    }
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes isAuthenticated={!!_id} path="/login" Component={LoginPage} />
                    <PrivateRoutes isAuthenticated={!!_id} exact path="/" Component={DashBoardRoutes} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
