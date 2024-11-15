import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
    return (
        <Navbar
            links={[
                <Link key={1} className="nav-item me-3 text-focus" to='/'>
                    About Me
                </Link>,
                <Link key={2} className="nav-item me-3 text-focus" to="/Portfolio">
                    Portfolio
                </Link>,
                <Link key={3} className="nav-item me-3 text-focus" to="/Contact">
                    Contact Me
                </Link>,
                <Link key={4} className="nav-item me-3 text-focus" to="/Resume">
                    Resume
                </Link>,
            ]}
        />
    );
}