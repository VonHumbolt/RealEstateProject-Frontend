import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
                <div className="container">
                    <a className="navbar-brand"> <Link to="/adverts" style={{color:"inherit", textDecoration:"inherit"}}>Real Estate </Link> </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navmenu" >
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link"> <Link to="/login" style={{color:"inherit", textDecoration:"inherit"}}>Login </Link> </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"> <Link to="/register" style={{color:"inherit", textDecoration:"inherit"}}>Register</Link> </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
