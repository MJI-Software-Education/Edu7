import React from 'react'

export const CardTitleJob = ({ title, subtitle }) => {
    return (
        <div className="card border-secondary m-2">
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <span className="card-subtitle">{ subtitle }</span>
            </div>
        </div>
    )
}
