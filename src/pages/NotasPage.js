import React from 'react';
import { CardBodyNotas } from '../components/CardBodyNotas';
import { CardTitleNotas } from '../components/CardTitleNotas';

export const NotasPage = () => {
    return (
        <div className="row">
            <div className="container">
                <div className="card p-4 m-2">
                    <CardTitleNotas /> 
                </div>
                <div className="card p-4 m-2">
                    <CardBodyNotas />
                </div>
            </div>
        </div>
    )
}
