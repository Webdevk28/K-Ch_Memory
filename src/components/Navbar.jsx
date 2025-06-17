import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css"

function Navbar ({NavbarStyle}) {

    return (
        <>
           <div className={`${NavbarStyle}`}>
                <NavLink to="/" className={({isActive}) => isActive ? "active-link" : ""}>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? "active-link" : ""}>About</NavLink>
                <NavLink to="/blog" className={({isActive}) => isActive ? "active-link" : ""}>Blog</NavLink>
           </div>
        </>
    )
}

export default Navbar