import  Exposure  from '@material-ui/icons/Exposure'
import React, { useEffect } from 'react'
import { Asignatura } from '../components/Asignatura'
import ExplicitIcon from '@material-ui/icons/Explicit';
import OpacityIcon from '@material-ui/icons/Opacity';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BuildIcon from '@material-ui/icons/Build';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import BugReportIcon from '@material-ui/icons/BugReport'; 
import { dispatchGetCursos } from '../controllers/cursos-profesor';
import { Curso } from '../components/Curso';
import { getAsignaturaByCursoId } from '../helpers/getAsignaturaByCursoId';
   
export const CursoPage = () => {
    const dispatch = useDispatch();
    const {_id} = useSelector(state => state.auth);
    useEffect(() => {
        dispatch(dispatchGetCursos(_id))
    }, [dispatch]);
    const {cursos:courses} = useSelector(state => state.cursosProfesor);
    const cursos = [];
    const map = new Map();
    for (const curso of courses) {
        if(!map.has(curso.idCurso._id)){
            map.set(curso.idCurso._id, true);    // set any value to Map
            cursos.push(curso);
        }
    }
    let color1 = '#F9DB67';
    let color2 = '#c4a010';
    let Icono = Exposure;
    return (
        <div className="container">
            <h2 className="fw-bold fs-3" >Cursos</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4">
                {
                    cursos.map(curso => {
                        if(curso.idCurso.curso.toString().toLowerCase().includes('matemática')){
                            color1 = '#F9DB67';
                            color2 = '#c4a010';
                            Icono = Exposure;
                        }
                        else if(curso.idCurso.curso.toString().toLowerCase().includes('lenguaje')){
                            color1 = '#DBE8FB';
                            color2 = '#5783c5';
                            Icono = ExplicitIcon;
                        }
                        else if(curso.idCurso.curso.toString().toLowerCase().includes('química')){
                            color1 = '#FF6767';
                            color2 = '#d44545';
                            Icono = WhatshotIcon;
                        }
                        else if(curso.idCurso.curso.toString().toLowerCase().includes('física')){
                            color1 = '#CDABF7';
                            color2 = '#8868BA';
                            Icono = OpacityIcon;
                        }
                        else if(curso.idCurso.curso.toString().toLowerCase().includes('música')){
                            color1 = '#CDABF7';
                            color2 = '#8868BA';
                            Icono = AudiotrackIcon;
                        }
                        else if(curso.idCurso.curso.toString().toLowerCase().includes('ciencias')){
                            color1 = '#BEFFD4';
                            color2 = '#61BD8D';
                            Icono = BugReportIcon;
                        }
                        else{
                            color1 = '#BEFFD4';
                            color2 = '#61BD8D';
                            Icono = BuildIcon;
                        }
                        return(
                            // {getAsignaturaByCursoId(curso._id, cursos)}
                        <Link className="deco-none" key={curso.idCurso._id}  to={`./asignaturasCurso/${curso.idCurso._id}`}>
                            
                            <div className="col">
                                <Curso bacgroundColor={color1} title={`${curso.idCurso.curso}-${curso.idCurso.letra}`} icon={<Icono style={{ fontSize: 60,color: color2, }}  />}  />
                            </div>
                        </Link>
                    )})
                }

                
            </div>
        </div>
    )
}
