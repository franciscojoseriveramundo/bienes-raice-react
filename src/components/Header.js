import React from "react";
import {Link} from 'react-router-dom';
import logo from '../images/bienes_raices.png';
import hamburgermenu from '../images/menu.svg';

const Header = () =>{
    return(
        <header>
            <nav>
                <ul className="navbar navbar-expand-lg fixed-top">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">
                            <img src={logo} width="40" alt="Página principal"></img>
                        </Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-site" aria-controls="navbar-site" aria-expanded="false" aria-label="Toggle navigation">
                            <img src={hamburgermenu} width="24"></img>
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
                                    <Link className="nav-link hvr-underline-from-left" to="/about">Acerca de</Link>
                                </li>
                            </ul>

                            <Link to="/login" className="btn btn-primary btn-login">Iniciar sesión</Link>
                            <label> o </label>
                            <Link to="/register" className="btn-register">Registrate</Link>

                        </div>
                    </div>


                </ul>
            </nav>
        </header>
    )
}

export default Header;