import React from 'react'
import GetAppIcon from '@material-ui/icons/GetApp';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { getPruebaById } from '../helpers/getAsignaturaById';
import { useSelector } from 'react-redux';
import { Contenido } from '../components/Contenido'
export const PruebaPage = () => {
    const {idPrueba} = useParams();
    const {pruebas} = useSelector(state => state.pruebas);
    const prueba = getPruebaById(idPrueba, pruebas);
    const fechaTermino = prueba.termino.split('T')[0];
    const horaTermino = prueba.termino.split('T')[1];
    const fechaInicio = prueba.termino.split('T')[0];
    const horaInicio = prueba.termino.split('T')[1];
    const termino = `${fechaInicio} ${horaInicio.split('.')[0]}`;
    const inicio = `${fechaInicio} ${horaInicio.split('.')[0]}`;
    
    return (
        <div>
            <div className="d-flex flex-row align-items-baseline ">
                <Link className="fw-bold fs-3 deco-none negro" to="/asignaturas" >Asignaturas </Link>
                
                <h2 className="fw-bold fs-3" > /{prueba.name}</h2>
            </div>
            <div className="container bg-white p-4 rounded shadow-sm">
                <h2 className="fw-bold fs-4">Instrucciones</h2>
                <p>{prueba.instrucciones}</p>
                <h2 className="fw-bold fs-4">Estado de la entrega</h2>
                <Contenido title="Estado de la entrega" status="No entregado" background="bg-gray1" />
                <Contenido title="Estado de la calificación" status="Sin calificar" background="bg-gray2" />
                <Contenido title="Fecha de publicación" status={inicio} background="bg-gray1" />
                <Contenido title="Fecha de entrega" status={termino} background="bg-gray2" />
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
