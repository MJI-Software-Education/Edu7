import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { CardBodyJob } from '../components/CardBodyJob';
import { CardTitleJob } from '../components/CardTitleJob';

export const TareasPage = () => {
 
    const { idTarea } = useParams();

    let history = useHistory();

    const handleExit = () => {
        history.push('/asignaturas');
    }

    const tareas = useSelector(state => state.jobs.tareas);

    let job;

    tareas.map( t => {
        if ( t.id === idTarea ) {
            job = t;
        }
    })

    return (
        <div>
            <div className="card p-3">
                <div className="position-relative p-1">
                    <div className="row">
                        <div class="d-md-flex justify-content-md-start ">
                            <button type="button" onClick={ handleExit } name="btnBack" className="m-1 btn btn-outline-danger">Salir</button>
                        </div>
                    </div>
                </div>
                <div>
                    <CardTitleJob key={ job?.id } title = { job?.titulo } subtitle = { job?.subtitle } />
                    <CardBodyJob enunciados={ job?.enunciados } key= { job?.id } />
                </div>
            </div>
        </div>
    )
}