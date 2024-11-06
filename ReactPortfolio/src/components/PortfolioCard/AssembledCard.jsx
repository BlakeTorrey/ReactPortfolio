import React from 'react';


export default function Card({ title, description, image }) {
    return(
        <div
            className="card"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className='card-content'>
                <h2 className="card-title">{title}</h2>
                <p className='card-description'>{description}</p>
            </div>
        </div>
    );
}