import { Link } from 'react-router-dom';
import '../css/recovery.css';
import Image from '../images/login.png';
import React, {useEffect} from 'react';

const Recovery = () =>{

    return(
        <>
        <section className="login-section container-fluid">
            <div className="row img-login">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 article-login">
                    <img src={Image} alt=""/>
                </div>
            </div>
            <div className="row userCredentials">

                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 alert-message">
                    <div className="alert alert-success" role="alert">
                        Ingrese su correo electrónico a recuperar el acceso.
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-user-credentials">
                    <input type="text" className="form-control" id="txtEmailUser" placeholder="Ingresa tu correo electrónico"/>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-user-credentials">
                    <button type="submit" className="btn btn-primary btn-submit-lgn">Recuperar acceso</button>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-user-credentials">
                    <Link to="/login" className="btn btn-primary btn-submit-return">Ir al inicio de sesión</Link>
                </div>

            </div>
        </section>
        </>
    )

}

export default Recovery;