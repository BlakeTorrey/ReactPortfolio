import React from 'react';
import Card from '../PortfolioCard/AssembledCard';
import './../PortfolioCard/Card.css';


const PortfolioObjects = [
    {id: 1, title: "", description: "", image: ""},
    {id: 2, title: '', description: '', image: ''},
    {id: 3, title: '', description: '', image: ''},
];



export default function PortfolioPage() {
    return (
        <div className='card-list'>
            {PortfolioObjects.map(card => (
                <Card
                    key={card.id}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                    />
            ))}
        </div>
    )


}