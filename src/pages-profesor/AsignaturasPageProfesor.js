import  Exposure  from '@material-ui/icons/Exposure'
import React from 'react'
import { Asignatura } from '../components/Asignatura'
import { useParams } from 'react-router'
import ExplicitIcon from '@material-ui/icons/Explicit';
import OpacityIcon from '@material-ui/icons/Opacity';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BuildIcon from '@material-ui/icons/Build';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import BugReportIcon from '@material-ui/icons/BugReport'; 
import { getAsignaturaByCursoId } from '../helpers/getAsignaturaByCursoId';
   
export const AsignaturasPageProfesor = () => {
    const {cursos} = useSelector(state => state.cursosProfesor);
    const {idCurso} = useParams();
    const curso = getAsignaturaByCursoId(idCurso,cursos);
    let color1 = '#F9DB67';
    let color2 = '#c4a010';
    let Icono = Exposure;
    return (
        <div className="container">
            {/* <h2 className="fw-bold fs-3" >{`${curso[0].idCurso.curso} ${curso[0].idCurso.letra}`}</h2> */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4">
                {
                    curso.idAsignatura.map(asignatura => {
                        if(asignatura.asignatura.toString().toLowerCase().includes('matemática')){
                            color1 = '#F9DB67';
                            color2 = '#c4a010';
                            Icono = Exposure;
                        }
                        else if(asignatura.asignatura.toString().toLowerCase().includes('lenguaje')){
                            color1 = '#DBE8FB';
                            color2 = '#5783c5';
                            Icono = ExplicitIcon;
                        }
                        else if(asignatura.asignatura.toString().toLowerCase().includes('química')){
                            color1 = '#FF6767';
                            color2 = '#d44545';
                            Icono = WhatshotIcon;
                        }
                        else if(asignatura.asignatura.toString().toLowerCase().includes('física')){
                            color1 = '#CDABF7';
                            color2 = '#8868BA';
                            Icono = OpacityIcon;
                        }
                        else if(asignatura.asignatura.toString().toLowerCase().includes('música')){
                            color1 = '#CDABF7';
                            color2 = '#8868BA';
                            Icono = AudiotrackIcon;
                        }
                        else if(asignatura.asignatura.toString().toLowerCase().includes('ciencias')){
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
                        
                        <Link className="deco-none" key={asignatura?._id} to={`/asignaturaProfesor/${asignatura._id}/${idCurso}`}>
                            <div className="col">
                                <Asignatura bacgroundColor={color1} title={asignatura.asignatura} icon={<Icono style={{ fontSize: 60,color: color2, }}  />}  />
                            </div>
                        </Link>
                    )})
                }

                
            </div>
        </div>
    )
}
