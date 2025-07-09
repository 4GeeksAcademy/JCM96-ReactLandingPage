import React from "react";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">
                    Start Bootstrap
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Service</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                    </ul>
                
                </div>
            </div>
        </nav>

    );  
};
export default Navbar;