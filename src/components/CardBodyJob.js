import React, { useEffect, useState } from 'react';

export const CardBodyJob = ({ enunciados }) => {

    const [index, setindex] = useState(0);
    const [isDisabledNext, setisDisabledNext] = useState(false);
    const [isDisableBack, setisDisableBack] = useState(false)

    useEffect(() => {
        handleRest();
    }, [ ])

    useEffect(() => {
        handleValidateBtnBack();
        handleValidateBtnNext();
    }, [index])

    const handleValidateBtnBack = () => {
        if ( index == 0 ) {
            setisDisableBack(true);
        }else {
            setisDisableBack(false);
        }
    }

    const handleValidateBtnNext = () => {
        if ( index == enunciados.length - 1 ) {
            setisDisabledNext(true);
        }else {
            setisDisabledNext(false);
        }
    }

    const handleRest = () => {
        setindex(0);
    }

    const handleNext = () => {
        setindex( index + 1 );
    }

    const handleBack = () => {
        setindex( index - 1 );
    }
  
    return (
        <div className="card border-secondary m-2">
            <div className="card-body">
                <h5 className="card-title mb-5">{ enunciados[index]?.enunciado }</h5>
                
                <div className="form-check">

                    {
                        enunciados[index]?.items.map( i => (

                            <div>
                                <input className="form-check-input" type="radio" name={ i.idEnunciado } id={ i.id } />
                                <label className="form-check-label" for={ i.idEnunciado }>
                                    { i.item }
                                </label>
                            </div>
                            
                        ))
                    }

                </div>
                <div className="position-relative mt-5 p-2">
                    <div className="row">
                        <div class="btn-group position-absolute top-0 start-50 translate-middle col-md-6">
                            <button type="button" onClick={handleBack} name="btnBack" disabled={isDisableBack} className="m-1 btn btn-success">Atrás</button>
                            <button type="button" onClick={handleNext} name="btnNext" disabled={isDisabledNext} className="m-1 btn btn-success">Siguiente</button>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}
