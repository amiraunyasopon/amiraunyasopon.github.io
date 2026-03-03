import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="flex w-full flex-wrap gap-2 p-4 sm:gap-4">
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