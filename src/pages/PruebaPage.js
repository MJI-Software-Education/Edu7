import React, { useEffect, useState } from 'react'
import GetAppIcon from '@material-ui/icons/GetApp';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { getPruebaById } from '../helpers/getAsignaturaById';
import { useDispatch, useSelector } from 'react-redux';
import { Contenido } from '../components/Contenido';
import Dropzone from 'react-dropzone';
import { dispatchGetPrueba, dispatchSubirPrueba } from '../controllers/prueba-alumno';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
export const PruebaPage = () => {
    const dispatch = useDispatch();
    const {idPrueba} = useParams();
    const {idAsignatura} = useParams();
    const {idUnidad} = useParams();

    useEffect(() => {
        dispatch(dispatchGetPrueba(idPrueba))
    }, [dispatch])

    const baseURL = 'http://localhost:8080/api/pruebaAlumno';
    const {pruebasAlumno,checking} = useSelector(state => state.pruebasAlumno);
    const {idCurso} = useSelector(state => state.auth);
    const conexion = localStorage.getItem('conexion');
    const {pruebas} = useSelector(state => state.pruebas);
    const prueba = getPruebaById(idPrueba, pruebas);
    const fechaTermino = prueba.termino.split('T')[0];
    const horaTermino = prueba.termino.split('T')[1];
    const fechaInicio = prueba.inicio.split('T')[0];
    const horaInicio = prueba.inicio.split('T')[1];
    const termino = `${fechaTermino} ${horaTermino.split('.')[0]}`;
    const inicio = `${fechaInicio} ${horaInicio.split('.')[0]}`;
    // const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    
    const pruebaAlumno = pruebasAlumno?.idPrueba === idPrueba && pruebasAlumno ;

  const [file, setFile] = useState('');
  const [extension, setExtension] = useState('');
  const fileName = (
   <>
   {file?.path}
   </>
  
  );

  const onClick = () => {
    dispatch(dispatchSubirPrueba(idCurso.id,idAsignatura,idUnidad,idPrueba,file));

  }

  const handleDrop = (archivo, algo)=>{
    const nombreCortado = archivo[0].name.split('.');
    const valor = nombreCortado[nombreCortado.length - 1];
    setExtension(valor);
    setFile(archivo[0]);
  }

  const deleteFile = ()=>{
      setFile('');
  }
  if(checking){
      return (
          <h2>Cargando...</h2>
      )
  }
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
                <Contenido success={(pruebaAlumno) && 'verde'} title="Estado de la entrega" status={(pruebaAlumno) ? 'Enviado para calificar' : 'No entregado'} background="bg-gray1" />
                <Contenido title="Estado de la calificación" status="Sin calificar" background="bg-gray2" />
                <Contenido title="Fecha de publicación" status={inicio} background="bg-gray1" />
                <Contenido title="Fecha de entrega" status={termino} background="bg-gray2" />
                <hr />
                {
                    pruebaAlumno
                    ?
                    <Contenido  title="Archivos enviados" status={<a href={`${baseURL}/${conexion}/${pruebaAlumno.id}`}  key={pruebaAlumno.id} className="fw-normal fs-6 deco-none pointer " >
                    <InsertDriveFileIcon className="mb-2" />
                    {pruebaAlumno.name.split('.')[0]}</a>} background="bg-gray1" />
                    
                    :<>
                    <div className="container bg-light h-50 border-split">   
                        <section className="container">
                        {
                            (file === '')
                            ?<Dropzone onDrop={handleDrop}>
                            {({getRootProps, getInputProps}) => (
                                <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <div className="py-5 d-flex flex-column align-items-center justify-content-center pointer">
                                                        <GetAppIcon style={{fontSize:60}} />
                                                        <h2 className=" fs-4">Subir archivos</h2>
                                                    </div>
                                </div>
                                </section>
                            )}
                            </Dropzone>
                            :<h2>{file[0]}</h2>
                        }
                        
                            <aside className="d-flex justify-content-start">
                                <ul className="d-flex  align-items-center justify-content-start" >
                                    {
                                       file && 
                                       <div className="d-flex flex-column w-100 h-100 align-items-center justify-content-center">
                                       <img className="tipos" src={`../../../assets/${extension}.png`} alt="imagen de word" />
                                       <div className="w-sm mt-sm text-center">{fileName}</div>
                                        <button onClick={deleteFile} className="btn custom-btn">Borrar</button>
                                       </div>
                                    }
                                
                                    </ul>
                            </aside>
                        </section>
                </div>
                


                <div className="container d-flex justify-content-center mt-4">
                    <button onClick={onClick} className="btn btn-success mx-4">Agregar entrega</button>
                    
                </div>
                    </>
                }
                
            </div>
        </div>
    )
}
