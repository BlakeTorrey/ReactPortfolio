import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
    return (
        <Navbar
            links={[
                <Link key={1} className="nav-item" to='/'>
                    About Me
                </Link>,
                <Link key={2} className="nav-item" to="/Portfolio">
                    Portfolio
                </Link>,
                <Link key={3} className="nav-item" to="/Contact">
                    Contact Me
                </Link>,
                <Link key={4} className="nav-item" to="/Resume">
                    Resume
                </Link>,
            ]}
        />
    );
}