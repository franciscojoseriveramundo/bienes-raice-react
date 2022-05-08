import React from "react";
import {Link} from 'react-router-dom';
import logo from '../images/bienes_raices.png';

const Header = () =>{
    return(
        <header>
            <nav>
                <ul className="navbar navbar-expand-lg fixed-top">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">
                            <img src={logo} width="60" alt="Página principal"></img>
                        </Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-site" aria-controls="navbar-site" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                        <div className="collapse navbar-collapse" id="navbar-site">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-bar-site">
                                <li className="nav-item">
                                    <Link className="nav-link hvr-underline-from-left" to="/">Página principal</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link hvr-underline-from-left" to="/search">Buscar</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link hvr-underline-from-left" to="/login">Iniciar sesión</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link hvr-underline-from-left" to="/about">Acerca de</Link>
                                </li>
                            </ul>
                        </div>
                    </div>


                </ul>
            </nav>
        </header>
    )
}

export default Header;