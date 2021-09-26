import React from 'react'
import GetAppIcon from '@material-ui/icons/GetApp';
import { Link } from 'react-router-dom';
export const PruebaPage = () => {
    return (
        <div>
            <div className="d-flex flex-row align-items-baseline ">
                <Link className="fw-bold fs-3 deco-none negro" to="/asignaturas" >Asignaturas </Link>
                
                <h2 className="fw-bold fs-3" > /Prueba 1</h2>
            </div>
            <div className="container bg-white p-4 rounded shadow-sm">
                <h2>Instrucciones</h2>
                <p>Non sunt est anim duis nostrud. Aute nulla ea voluptate amet reprehenderit in laboris eiusmod. Voluptate commodo sint duis aliqua. Adipisicing anim proident excepteur proident et veniam sit fugiat.</p>
                <hr />
                <div className="container bg-light h-50">
                    <div className="py-5 d-flex flex-column align-items-center justify-content-center pointer">
                        <GetAppIcon style={{fontSize:60}} />
                        <h2 className=" fs-4">Subir archivos</h2>
                    </div>
                </div>
                <div className="container d-flex justify-content-center mt-4">
                    <button className="btn btn-success mx-4">Guardar</button>
                    <button className="btn btn-danger">Cancelar</button>
                </div>
            </div>
        </div>
    )
}
