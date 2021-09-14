import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav>
            <h1>Edu7</h1>
            <ul>
                <Link className="li" to="/">Dashboard</Link>
                <Link className="li" to="/asignaturas">Asignaturas</Link>
                <Link className="li" to="/notas">Notas</Link>
            </ul>
        </nav>
    )
}
