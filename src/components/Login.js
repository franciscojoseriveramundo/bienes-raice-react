import LoginImg from '../images/login.png';
import '../css/login.css';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import axios from 'axios';
import CryptoAES from 'crypto-js/aes';

class Login extends Component{

    constructor(props){
        super(props);
        this.state ={
            mensaje : 'Introduce tus credenciales de acceso.',
            alert: 'alert alert-info',
            email: '',
            password: '',
            isLogged: sessionStorage.getItem("emailSession")
        }
    }

    componentDidMount() {
        if(this.state.isLogged !== null){
            window.location.href="./";
        }
    }

    handleLogin = (e) =>{

        //alert(process.env.REACT_APP_url);

        var isContinue = true;

        if(!this.state.email || !this.state.password){

            isContinue = false;
            this.setState({
                mensaje: "(*) Complete los campos obligatorios.",
                alert: 'alert alert-danger'
            });
            console.log(this.state.mensaje);

            e.preventDefault();
        }

        if(isContinue === true){

            let passwordEnc = CryptoAES.encrypt(this.state.password, 'secret key 123').toString();

            new Promise((resolve, reject) =>
            {
                axios.post(process.env.REACT_APP_url + `/v1/users`, {
                    "Useremail" :       this.state.email,
                    "Userpassword" :    passwordEnc
                }).then(res => {
                        const persons = res.data.response;
                        const result = Object.values(JSON.parse(JSON.stringify(persons)));

                        this.setState({
                            mensaje: result[1]
                        });

                        if(result[0] === 1){

                            this.createSession("emailSession", document.getElementById("txtEmailUser").value);

                            this.setState({
                                alert: 'alert alert-success',
                                email: '',
                                password: '',
                                isLogged : sessionStorage.getItem("emailSession")
                            });

                            window.location.href="./";
                            resolve(result[1]);
                        }
                        else{
                            this.setState({
                                alert: 'alert alert-danger'
                            });

                            e.preventDefault();

                            reject(result[1]);
                        }

                    }).catch(err =>{

                        e.preventDefault();

                        reject(err);
                    })
                });
        }

    }

    createSession = (name, value) =>{
        sessionStorage.setItem(name, value);
    }

    render(){

        return(
            <>
            <section className="login-section container-fluid">
                <div className="row img-login">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 article-login">
                        <img src={LoginImg} alt="Inicio de sesión"/>
                    </div>
                </div>
                <div className="row userCredentials">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 alert-message">
                        <div className={this.state.alert} role="alert">
                            {this.state.mensaje}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-user-credentials">
                        <input type="text" className="form-control" id="txtEmailUser" pattern="[0-255]*" placeholder="Ingresa tu correo electrónico" onChange={(e) => this.setState({email:e.target.value})} value={this.state.email}/>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-user-credentials">
                        <input type="password" className="form-control" id="txtPassUser" pattern="[0-50]*" placeholder="Ingresa tu contraseña" onChange={(e) => this.setState({password:e.target.value})} value={this.state.password}/>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-user-credentials">
                        <button className="btn btn-primary btn-submit-lgn" onClick={this.handleLogin}>Iniciar sesión</button>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-user-recovery">
                        <div className="form-group text-center m-t-10 mb-0 row">
                            <div className="col-sm-12 m-t-20">
                                <Link to="/recovery" className="text-muted"><i className="fa fa-unlock"></i>Olvide mi contraseña</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}

export default Login;