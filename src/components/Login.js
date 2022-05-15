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
            password: ''
        }
    }

    handleLogin = () =>{

        var isContinue = true;

        if(!this.state.email || !this.state.password){

            isContinue = false;
            this.setState({
                mensaje: "(*) Complete los campos obligatorios.",
                alert: 'alert alert-danger'
            });
            console.log(this.state.mensaje);
        }

        if(isContinue === true){

            let passwordEnc = CryptoAES.encrypt(this.state.password, 'secret key 123').toString();

            new Promise((resolve, reject) =>
            {
                axios.post(`https://bienes-raices-350122.uc.r.appspot.com/v1/users`, {
                    "Useremail" :       this.state.email,
                    "Userpassword" :    passwordEnc
                }).then(res => {
                        const persons = res.data.response;
                        const result = Object.values(JSON.parse(JSON.stringify(persons)));
                        console.log(result[0]);
                        console.log(result[1]);
                        //alert(result);
                        this.setState({
                            mensaje: result[1]
                        });

                        if(result[0] === 1){
                            this.setState({
                                alert: 'alert alert-success',
                                email: '',
                                password: ''
                            });

                            resolve(result[1]);
                        }
                        else{
                            this.setState({
                                alert: 'alert alert-danger'
                            });

                            reject(result[1]);
                        }

                    }).catch(err =>{

                        const persons = err.data.response;
                        const result = Object.values(JSON.parse(JSON.stringify(persons)));

                        this.setState({
                            mensaje: result[1]
                        });

                        if(result[0] === 1){
                            this.setState({
                                alert: 'alert alert-success',
                                email: '',
                                password: ''
                            });

                            resolve(result[1]);
                        }
                        else{
                            this.setState({
                                alert: 'alert alert-danger'
                            });

                            reject(result[1]);
                        }


                        reject(err);
                    })
                });
        }

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
                        <button type="submit" className="btn btn-primary btn-submit-lgn" onClick={this.handleLogin}>Iniciar sesión</button>
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