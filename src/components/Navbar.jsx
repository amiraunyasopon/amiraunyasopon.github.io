import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="flex space-x-4 p-4 flex-wrap-*">
            <Link to="/">
                <button className="font-bold">
                    Experience
                </button>
            </Link>
            <Link to="/organizations">
                <button className="font-bold">
                    Organizations
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