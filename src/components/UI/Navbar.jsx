

export default function Nav({ links }) {
    return (

        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <h2 className="navbar-brand text-focus">
                    Blake Torrey
                </h2>
                <div className="collapse navbar-collapse text-focus" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {links.map((link) => link)}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
