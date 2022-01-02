import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ListaTest } from '../components/ListaTest';
import { dispatchGetStream } from '../controllers/stream';
import { Button } from '@material-ui/core';
import './Dashboard.css';

export const DashboardPage = () => {
   const {nombre,apellidoP,idCurso} = useSelector(state => state.auth)
   console.log(idCurso)
   const dispatch = useDispatch();
   useEffect(() => {
       dispatch(dispatchGetStream(idCurso.id))
    }, [])
    const {url,checking} = useSelector(state => state.stream);
    
    if(checking){
        return (
            <h1>Cargando...</h1>
        )
    }
    return (
        <div className="">
            <div style={{height: '300px'}}>
                <div className="container shadow-sm rounded-3 mb-4 purple p-5 h-75  d-flex justify-content-center  justify-content-lg-between align-items-center">
                    <div className="d-flex flex-column">
                    <h2 className="fs-2 fw-bold">HOLA {nombre}</h2>    
                    <h2 className="fs-5 ">Bienvenido/a a Edu7</h2>    
                    </div>
                    <div className="img d-none d-lg-block">
                        <img src={`../assets/welcome.png`} alt="imagen de bienvenida" />
                    </div>
                </div>
            </div>
            {
                (url !==undefined) && <div style={{height: '200px'}}>
                <div className="container shadow-sm rounded-3 mb-4  p-5 h-75  d-flex justify-content-center  justify-content-lg-between align-items-center" style={{backgroundColor:'#4D4AA0'}}>
                    <div className="d-flex flex-column">
                    <h2 className="fs-2 fw-bold text-white">Stream iniciado</h2>    
                    
              <Button style={{borderColor:'white'}}   variant="outlined"  className="boton deco-none" color="inherit"><a  className=" deco-none text-white" href={`${url.url}`}>Entrar a reunion</a></Button> 
            
            
          
                    </div>
                    <div className="img d-none d-lg-block">
                        <img src={`../assets/stream.png`} alt="imagen de bienvenida" />
                    </div>
                </div>
            </div>
            }
            
           
            <div className="row gy-5 ">
                
                    <div className="col-12 col-lg-8 ">
                        <div className="row gy-5">
                            <div className="col-12 col-lg-7">
                                <div className="title">
                                    <h2 className="fw-bold fs-3" >Notas</h2>
                                </div>
                                <div className="contenido">

                                </div>
                            </div>
                            <div className=" col-12 col-lg-5 ">
                                <div className="asistencia">
                                    <div className="title">
                                        <h1 className="fw-bold fs-3">Asistencia</h1>
                                        </div>
                                        <div className="contenido">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                        <h4 className="fw-bold pt-5">Próximas pruebas</h4>
                            <ListaTest title='Matematicas' date='12/03/2021' />
                            <ListaTest title='Lenguaje' date='12/03/2021' />
                            
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                            <div className="horario">
                                <div className="title">
                                    <h1 className="fw-bold fs-3">Horario</h1>
                                </div>
                                <div className="contenido">

                                </div>
                            </div>   
                    </div> 
            </div>
        </div>
    )
}
