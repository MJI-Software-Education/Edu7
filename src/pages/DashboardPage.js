import React from 'react'
import './Dashboard.css';

export const DashboardPage = () => {
   
    return (
        <div>
            <div className="row">
                <div className="col">
                    <div className="row-sm">
                        <div className="notas">
                            <div className="title">
                                <h1>Notas</h1>
                            </div>
                            <div className="contenido">

                            </div>
                        </div>
                        <div className="asistencia">
                            <div className="title">
                                    <h1>Asistencia</h1>
                                </div>
                                <div className="contenido">

                            </div>
                        </div>
                    </div>
                    <div className="lista">
                        <h2>Matematicas</h2>
                        <h2>12/03/2021</h2>
                    </div>
                    <div className="lista">
                        <h2>Lenguaje</h2>
                        <h2>12/03/2021</h2>
                    </div>
                </div>
                <div className="horario">
                    <div className="title">
                            <h1>Horario</h1>
                        </div>
                        <div className="contenido">

                    </div>
                </div>
            </div>
            <div>
             
            </div>
        </div>
    )
}
