
export const getAsignaturaById = (id, asignaturas) => {
    const asignatura = asignaturas.filter(a => a._id === id);
    return asignatura[0];
}

export const getPruebaById = (id, pruebas) => {
    const prueba = pruebas.filter(p => p.id === id);
    return prueba[0];
}
