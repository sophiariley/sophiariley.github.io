import React from "react";
import {Link, useMatch, useResolvedPath} from 'react-router-dom'

export default function NavBar() {
    return <nav className="nav">
        <Link to="/" className="site-title">Sophia Riley</Link>
        
        <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/projects">Projects</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
        </ul>
    </nav>
}

// For navigation:
function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}