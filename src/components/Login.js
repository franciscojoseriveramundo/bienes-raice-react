import LoginImg from '../images/login.png';
import '../css/login.css';

const Login = () =>{
    return(
        <>
        <section className="login-section container-fluid">
            <div className="row img-login">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 article-login">
                    <img src={LoginImg}/>
                </div>
            </div>
            <div className="row userCredentials">

                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 alert-message">
                    <div className="alert alert-success" role="alert">
                        Ingrese sus credenciales de acceso.
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-user-credentials">
                    <input type="text" className="form-control" id="txtEmailUser" placeholder="Ingresa tu correo electrónico"/>
                </div>


                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-user-credentials">
                    <input type="password" className="form-control" id="txtPassUser" placeholder="Ingresa tu contraseña"/>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-user-credentials">
                    <button type="submit" className="btn btn-primary btn-submit-lgn">Iniciar sesión</button>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-user-recovery">
                    <div className="form-group text-center m-t-10 mb-0 row">
                        <div className="col-sm-12 m-t-20">
                            <a href="recovery.html" className="text-muted"><i className="fa fa-unlock"></i> <small>Olvide mi contraseña</small></a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}

export default Login;