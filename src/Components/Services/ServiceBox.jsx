import React from 'react'

const ServiceBox = ({icon,title,desc}) => {
    return (
        <>
            <div className="serviceData">
                <p className='serIcon'>{icon}</p>
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </>
    )
}

export default ServiceBox