import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="flex justify-between max-w-3xl mx-auto p-5">
            <Link to="/" className="hover:text-gray-500">Open Data Explorer</Link>
            <div className="flex">
                <a href="https://github.com/opendataexplorer" target="_blank" className="hover:text-gray-500 px-2">Alpha</a>
                <Link to="/joinus" className="hover:text-gray-500 px-2">About</Link>
                <Link to="/joinus" className="hover:text-gray-500 px-2">Team</Link>
                <Link to="/joinus" className="hover:text-gray-500 px-2">Join Us</Link>
                <Link to="/joinus" className="hover:text-gray-500 px-2">News</Link>
                <a href="https://github.com/opendataexplorer" target="_blank" className="hover:text-gray-500 px-2">Github</a>
            </div>
        </nav>
    )
}