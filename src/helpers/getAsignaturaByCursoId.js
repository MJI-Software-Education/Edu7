
export const getAsignaturaByCursoId = (id, cursos) => {
    const asignatura = cursos.filter(a => a.idCurso._id === id);
    return asignatura[0];
}


export const getCursoById = (id, cursos) => {
    const asignatura = cursos.filter(a => a.idAsignatura.idCurso === id);
    return asignatura;
}

