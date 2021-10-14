import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/rapilah.svg";
import '../styles/style.css';


class Navbar extends Component{
    render(){
        return(
          
            <nav class="navbar navbar-expand-lg navbar-light shadow-sm fixed-top" style={{ backgroundColor: 'white' }}>
                <div class="container">
                    <Link to="/" class="navbar-brand"><img src={logo} alt="logo" className="logonav" width="170" height="65" /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                        <Link to="/" className="nav-link active ms-4" aria-current="page">Beranda</Link>
                        <Link to="/about" className="nav-link ms-4">Tentang Kami</Link>
                        <Link to="/service" className="nav-link ms-4">Layanan</Link>
                        <Link to="/tutorial" className="nav-link ms-4">Cara Pakai</Link>
                        <div class="nav-item dropdown ms-auto">
                            <Link to="/" className="nav-link dropdown-toggle ms-4" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Bahasa
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/indo" className="dropdown-item">Indonesia</Link>
                                <Link to="/indo" className="dropdown-item">Inggris</Link>
                            </ul>
                        </div>
                        {/* <Link to="/bahasa" className="nav-link ms-4">Bahasa</Link> */}
                        <a href="/login" className="nav-link ms-4">Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
