import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white">
        <div className="container mx-auto max-w-7xl flex gap-5 justify-between">
            <div className="p-3">
                <Link to = "/">Home</Link>
            </div>

            <div> 
                <ul className="flex gap-5 p-3">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/all-books">All Books</Link>
                    </li>

                    <li>
                        <Link to="/favorites">Favorites</Link>
                    </li>

                    <li>
                        <Link to="/about-us">About Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
  )
}

export default Navbar