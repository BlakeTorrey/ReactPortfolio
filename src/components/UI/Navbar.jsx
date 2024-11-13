

export default function Nav({ links }) {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <h2 className="navbar-brand">
                    Blake <span className='text-primary'>Torrey</span>
                </h2>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {links.map((link) => link)}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
