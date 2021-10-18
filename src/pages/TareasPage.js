import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { CardBodyJob } from '../components/CardBodyJob';
import { CardTitleJob } from '../components/CardTitleJob';

export const TareasPage = () => {
 
    const { idTarea } = useParams();
    const Asignatura_id = localStorage.getItem('idAsignatura');

    const tareas = useSelector(state => state.unidades.tareas);

    let job;

    tareas.map( t => {
        if ( t.id === idTarea ) {
            job = t;
        }
    })

    return (
        <div className="row">
            <div className="card p-3">
                <div>
                    <CardTitleJob key={ job?.id } title={ job?.titulo } subtitle ={ job?.subtitle } />
                    <CardBodyJob key={ Asignatura_id } idTarea={ job?.id } idUnidad={ job?.idUnidad } enunciados={ job?.enunciados } />
                </div>
            </div>
        </div>
    )
}