import React from 'react'

export const Contenido = ({title,status,background}) => {
    return (
        <div className="d-flex flex-column w-100">
                    <div className={`d-flex justify-content-between paddingVanilla ${background}`}>
                        <div className=" w-25">
                            <h2 className="fw-normal fs-6">{title}</h2>
                        </div>
                        <div className=" w-100">
                            <h2 className="fw-normal fs-6 text-start">{status}</h2>
                        </div>
                    </div>
        </div>
    )
}
