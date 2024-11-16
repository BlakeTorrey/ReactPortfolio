import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

const PortfolioObjects = [
    {
        id: 1,
        title: "ReadMe Generator",
        description: "Generates a ReadMe for projects based on only a couple questions.",
        image: "/Images/ReadMeGenerator.png",
        github: 'https://github.com/BlakeTorrey/ReadMe-Generator'
    },
    {
        id: 2,
        title: 'Destination Weather',
        description: 'This page allows one to search a variety of cities and it will pull up the current weather, as well as a five day forecast.',
        image: '/Images/WeatherDashboard.png',
        github: 'https://github.com/BlakeTorrey/OpenWeatherApi',
    },
    {
        id: 3,
        title: 'Organizability',
        description: 'This application allows for people to add notes/tasks to a dashboard that keeps track of its urgency.',
        image: '/Images/NoteDashboard.png',
        github: 'https://github.com/samvs-tech/Organizability',
    },
];


export default function Card() {
    return (
        <div className='container py-5'>
            <h1 className="text-center mb-4">Previous Projects</h1>
            <div className="row">
                {PortfolioObjects.map((project) => (
                    <div className="col-md-4 mb-4" key={project.id}>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card">
                            <div
                                className="card shadow"
                                style={{
                                    backgroundImage: `url(${project.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '400px',
                                }}
                            >
                                <div className="card-overlay">
                                    <h3 className="Card-title">{project.title}</h3>
                                    <p className="card-description">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>

    );
}