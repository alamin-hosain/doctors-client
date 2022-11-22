import React from 'react'

const ServicesCard = ({ service }) => {
    const { icon, name, description } = service;
    return (
        <div className={`card card-side bg-base-100 shadow-lg p-4 flex  flex-col justify-center items-center`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body flex items-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div >
    )
}

export default ServicesCard