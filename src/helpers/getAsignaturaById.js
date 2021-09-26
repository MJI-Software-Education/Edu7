
export const getAsignaturaById = (id, asignaturas) => {
    const asignatura = asignaturas.filter(a => a._id === id);
    return asignatura[0];
}
