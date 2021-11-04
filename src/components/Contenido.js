import React from 'react'

export const Contenido = ({title,status,background,success = ''}) => {
    return (

                    <div className={`d-flex justify-content-between  ${background}`}>
                        <div className=" w-25 paddingVanilla">
                            <h2 className="fw-normal fs-6">{title}</h2>
                        </div>
                        <div className={`w-100 h-100 paddingVanilla ${success}`}>
                            <h2 className="fw-normal fs-6 text-start">{status}</h2>
                        </div>
                    </div>
  
    )
}
