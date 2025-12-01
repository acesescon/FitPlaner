import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/NavbarComponent.css";

export default function NavbarComponent() {
    return (
        <aside  className="navbar">
            <h1>FitPlaner</h1>
            <nav>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/contents">Contents</Link>
                <Link className='link' to="/create">Create</Link>
                <Link className='link' to="/settings">Settings</Link>
            </nav>
        </aside>
    )
}
