import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/dashbord">Dashbord</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar