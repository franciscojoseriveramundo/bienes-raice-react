import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import logo from '../images/bienes_raices.png';
import user from '../images/login.png';
import hamburgermenu from '../images/menu.svg';

const Header = () =>{

    const btnCerrarSesion = () =>{
        sessionStorage.clear();
        window.location.href = './login';
    }

    const isLogged = sessionStorage.getItem("emailSession");
    if(isLogged === null){
        return(
            <header>
                <nav>
                    <ul className="navbar navbar-expand-lg fixed-top">
                        <div className="container-fluid">
                            <Link to="/" className="navbar-brand">
                                <img src={logo} width="40" alt="Página principal"></img>
                            </Link>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-site" aria-controls="navbar-site" aria-expanded="false" aria-label="Toggle navigation">
                                <img src={hamburgermenu} width="24" alt=""></img>
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
    else{
        return(
            <header>
                <nav>
                    <ul className="navbar navbar-expand-lg fixed-top">
                        <div className="container-fluid">
                            <Link to="/" className="navbar-brand">
                                <img src={logo} width="40" alt="Página principal"></img>
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-site" aria-controls="navbar-site" aria-expanded="false" aria-label="Toggle navigation">
                                <img src={hamburgermenu} width="24" alt=""></img>
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
                                    <li className="nav-item">
                                        <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" to="#" aria-expanded="false">Mi cuenta</Link>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><img src={user} width="48" alt="Imagen de cuenta de usuario"></img></li>
                                            <li><p>{isLogged}</p></li>
                                            <li>
                                                <div className="center">
                                                    <button className="btn btn-primary btn-close-session" onClick={btnCerrarSesion}>Cerrar sesión</button>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;