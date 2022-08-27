export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">Our Project</a>
        <ul>
            <li>
               <a href="/events">Events</a>
            </li>
            <li>
               <a href="/tickets">Tickets</a>
            </li>
            <li>
               <a href="/login">Login</a>
            </li>
            <li>
               <a href="/signup">Signup</a>
            </li>

        </ul>
    </nav>
}