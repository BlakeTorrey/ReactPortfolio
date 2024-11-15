import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Resume.css';

export default function ResumeCard() {
    return (

        <div className="container py-5">
            <header className="text-center mb-5">
                <h1 className="display-4">Blake Torrey</h1>
                <p className="lead">Full-stack Developer | Typescript | React | Node.js </p>
            </header>

            <section className="mb-5">
                <h2 className="h3 text-highlight mb-3">About Me</h2>
                <p className="aboutMe">
                    I am a passionate full-stack developer with a strong focus on creating scalable and user-friendly web applications. My main
                    area of focus is back-end development but I have learned a substational amount of front-end as well. I thrive in collaborative and
                    innovative environments.
                </p>
            </section>

            <section className="mb-5">
                <h2 className="h3 text-highlight mb-3">Skills</h2>
                <div className="d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <ul>
                                <li>Typescript</li>
                                <li>React.js</li>
                                <li>Express.js</li>

                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul>
                                <li>HTML5</li>
                                <li>Node.js</li>
                                <li>RESTful APIs</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul>
                                <li>CSS3</li>
                                <li>Bootstrap</li>
                                <li>SQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-5">
                <h2 className="h3 text-highlight mb-3">Experience</h2>
                <div>
                    <h3 className="h5">Software Development Boot Camp</h3>
                    <p className="text-muted">Aug 2024- Feb 2025</p>
                    <p>
                        - Developed and maintained web applications using React and Node.js.
                        <br />
                        - Collaborated on several projects to develop and implement unique projects.
                        <br />
                        - Improved and Refactored multiple projects after learning innovative development practices.
                    </p>
                </div>
            </section>

            <section className="mb-5">
                <h2 className="h3 text-highlight mb-3">Education</h2>
                <div>
                    <h3 className="h5">Bachelor of Science in Chemistry</h3>
                    <p className="text-muted">University of Utah, 2016-2021</p>
                    <p>
                        Relevant coursework: Research and Development, Advanced Analytical Chemistry, Calculus
                    </p>
                </div>
                <div>
                    <h3 className="h5">Bachelor of Science in Biology</h3>
                    <p className="text-muted">University of Utah, 2016-2021</p>
                    <p>
                        Relevant coursework: Bioinformatic Algorithms, statistics
                    </p>
                </div>
            </section>

            <section className="mb-5">
                <div>
                    <a href="/src/component/Resume/2024Resume.pdf" download className="btn btn-primary btn-compact">
                        Download Resume (PDF)
                    </a>
                </div>
            </section>
        </div>
    )
}