import React from 'react'

export const ListaTest = ({title, date}) => {
    return (
        <div className="lista">
                <h4 className="fw-bold">{title}</h4>
                <h4 className="text-muted fs-5">{date}</h4>
        </div>
    )
}
