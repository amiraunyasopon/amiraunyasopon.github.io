import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="flex space-x-4 p-4">
            <Link to="/">
                <button className="font-bold">
                    About
                </button>
            </Link>
            <Link to="/resume">
                <button className="font-bold">
                    Resume
                </button>
            </Link>
            <Link to="/contact">
                <button className="font-bold">
                    Contact
                </button>
            </Link>
        </div>
    )
}
export default Navbar