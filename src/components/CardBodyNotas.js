import React from 'react'

export const CardBodyNotas = () => {
    return (
        <div>
            <div className="container">
                <div className="row mb-3">
                    <div className="col-1">
                        Docente:
                    </div>
                    <div className="col-11">
                        Profesor X
                    </div>
                </div>
                <div className="card border-secondary">
                    <div className="container p-3">
                        <div className="card border p-3">
                            <div className="row">
                                <div className="col-3">
                                    1
                                </div>
                                <div className="col-3">
                                    Descipción
                                </div>
                                <div className="col-3">
                                    20/11/2021
                                </div>
                                <div className="col-3">
                                    6,5
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
