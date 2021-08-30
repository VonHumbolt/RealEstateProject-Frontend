import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
                <div className="container">
                    <a className="navbar-brand">Real Estate</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navmenu" >
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
