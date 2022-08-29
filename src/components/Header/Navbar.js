// replace a tags with Link componets from react routers and href with to - useMatch allows us to compare the path were on to the path we want - useResolvedPath allows us to take a relative or absolute path
import { Link, useMatch, useResolvedPath  } from "react-router-dom"

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">Our Project</Link>
        <ul>
            
               <CustomLink to="/events">Events</CustomLink>
               <CustomLink to="/tickets">Tickets</CustomLink>
               <CustomLink to="/login">Login</CustomLink>
               <CustomLink to="/signup">Signup</CustomLink>
          

        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}