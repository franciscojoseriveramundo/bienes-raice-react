import { Link } from 'react-router-dom';
import '../css/recovery.css';
import Image from '../images/login.png';
import React, {Component, useEffect} from 'react';
import axios from 'axios';
import CryptoAES from 'crypto-js/aes';
import CryptoENC from 'crypto-js/enc-utf8';

class Recovery extends Component{

    constructor(props){
        super(props);
        this.state ={
            message : 'Introduce tus credenciales de acceso.',
            alert: 'alert alert-info',
            email: '',
            isLogged: sessionStorage.getItem("emailSession")
        }
    }

    componentDidMount() {
        if(this.state.isLogged !== null){
            window.location.href="./";
        }
    }

    RecoveryHandle = (e) =>{
        if(!this.state.email){
            this.setState({
                alert : "alert alert-danger",
                message : "Ingrese un correo electrónico para continuar."
            });
        }
        else{

            new Promise((resolve, reject) =>
            {
                axios.post(process.env.REACT_APP_url + `/v1/users/recovery`, {
                    "UsersEmail" :       this.state.email
                }).then(res => {
                        const persons = res.data.response;
                        const result = Object.values(JSON.parse(JSON.stringify(persons)));


                        if(result.length > 0){
                            var response = result[0];

                            var html = "";

                            var _password = CryptoAES.decrypt(response.UsersPassword, 'secret key 123').toString(CryptoENC);

                            axios.get(process.env.REACT_APP_url +`/v1/email/2`, true).then(res2 => {
                                const persons = res2.data.response;
                                const result2 = Object.values(JSON.parse(JSON.stringify(persons)));
                                //alert(result);
                                result2.forEach((v) =>{
                                    html = v.EmailLayoutBody;
                                });

                                html = html.toString();

                                html = html.replace("@Correo", this.state.email);
                                html = html.replace("@Contraseña", _password)
                                html = html.replace("@Anio", new Date().getFullYear().toString());
                                html = html.replace("\n", "");

                                if(html !== ""){
                                    axios.post(process.env.REACT_APP_url +`/v1/email`, {
                                        "EmailTo" : this.state.email,
                                        "EmailHTML" : html,
                                        "EmailSubject" : "Recuperación de cuenta de acceso a MyHome"
                                    }).then(res3 => {
                                        this.setState({
                                            email: ''
                                        });
                                        resolve(result);
                                    });
                                }
                            });
                        }

                    }).catch(err =>{

                        e.preventDefault();

                        reject(err);
                    })
                });

            this.setState({
                alert : "alert alert-success",
                message : "Se han enviado sus credenciales de acceso a su bandeja de entrada."
            });
        }
    }

    render(){
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
                        <div className={this.state.alert} role="alert">
                            {this.state.message}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-user-credentials">
                        <input type="text" className="form-control" id="txtEmailUser" placeholder="Ingresa tu correo electrónico" onChange={(e) => this.setState({email:e.target.value})} value={this.state.email}/>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-user-credentials">
                        <button type="button" onClick={this.RecoveryHandle} className="btn btn-primary btn-submit-lgn">Recuperar acceso</button>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-user-credentials">
                        <Link to="/login" className="btn btn-primary btn-submit-return">Ir al inicio de sesión</Link>
                    </div>

                </div>
            </section>
            </>
        )
    }

}

export default Recovery;