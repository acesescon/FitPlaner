import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/NavbarComponent.css";
import {House,TableOfContents,CircleFadingPlus,Bolt} from "lucide-react"

export default function NavbarComponent({open}) {
    

    return (
        <aside  className={`navbar ${open ? "open" : "closed"}`}>
            <h1>FitPlaner</h1>
            <nav>
                <Link className='link' to="/"> <House absoluteStrokeWidth /> Home</Link>
                <Link className='link' to="/contents"><TableOfContents absoluteStrokeWidth /> Contents</Link>
                <Link className='link' to="/create"><CircleFadingPlus absoluteStrokeWidth /> Create</Link>
                <Link className='link' to="/settings"><Bolt absoluteStrokeWidth /> Settings</Link>
            </nav>
        </aside>
    )
}