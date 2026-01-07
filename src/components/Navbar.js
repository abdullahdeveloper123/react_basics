import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
            <div className="container-fluid px-4">

                <span className="navbar-brand fw-semibold text-dark">
                    React Mini Projects
                </span>

                {/* Toggle Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Content */}
                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
                        <li className="nav-item">
                            <span className="nav-link text-secondary fw-medium"><Link to="/api" className="nav-link text-secondary fw-medium">API</Link></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link text-secondary fw-medium"><Link to="/counter" className="nav-link text-secondary fw-medium">Counter</Link></span>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar