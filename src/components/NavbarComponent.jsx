import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/NavbarComponent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavbarComponent() {
    //===========================================
    // FIX POSITIONING OF NAVBAR ADD
    //===========================================
    return (
        <aside  className="navbar">
            <h1>FitPlaner</h1>
            <nav>
                <Link className='link' to="/"><FontAwesomeIcon icon="fa-regular fa-house" />Home</Link>
                <Link className='link' to="/contents">Contents</Link>
                <Link className='link' to="/create">Create</Link>
                <Link className='link' to="/settings">Settings</Link>
            </nav>
        </aside>
    )
}