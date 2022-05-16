import '../css/register.css';
import React, {Component} from 'react';
import axios from 'axios';
import validator from 'validator';
import CryptoAES from 'crypto-js/aes';
const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

class Register extends Component {

    constructor(props){
        super(props);
        this.state ={
            mensaje : '(*) Complete los campos para poder crear su cuenta de acceso.',
            alert: 'alert alert-info',
            name : '',
            lastName: '',
            sex: '0',
            phone: '',
            email: '',
            password: '',
            confirmpassword: '',
            isLogged: sessionStorage.getItem("emailSession")
        }
    }

    componentDidMount() {
        if(this.state.isLogged !== null){
            window.location.href="./";
        }
    }

    HandleCrear = () =>{

        var isContinue = true;

        if(!this.state.name || !this.state.lastName || this.state.sex === "0" || !this.state.phone || !this.state.email || !this.state.password || !this.state.confirmpassword){
            isContinue = false;
            this.setState({
                mensaje: "(*) Complete los campos obligatorios.",
                alert: 'alert alert-danger'
            });
            console.log(this.state.mensaje);
        }

        if(!this.state.email.match(emailRegexp) && isContinue === true){
            isContinue = false;
            this.setState({
                mensaje: "* La dirección de correo electrónico no es válida.",
                alert: 'alert alert-danger'
            });
            console.log(this.state.mensaje);
        }

        if(!validator.isMobilePhone(this.state.phone) && isContinue === true){
            isContinue = false;
            this.setState({
                mensaje: "* El número de teléfono no es válido.",
                alert: 'alert alert-danger'
            });
            console.log(this.state.mensaje);
        }

        if(this.state.confirmpassword !== this.state.password && isContinue === true){
            isContinue = false;
            this.setState({
                mensaje: "* Las contraseñas no coinciden.",
                alert: 'alert alert-warning'
            });
            console.log(this.state.mensaje);
        }

        if(isContinue === true){
            if (!validator.isStrongPassword(this.state.password, {
                minLength: 8, minLowercase: 1,
                minUppercase: 1, minNumbers: 1, minSymbols: 1
              }))
              {
                isContinue = false;
                this.setState({
                    mensaje: "* La contraseña introducida no es segura (min. 8 carácteres, 1 letra minúscula, 1 letra mayúscula, 1 número y un símbolo).",
                    alert: 'alert alert-warning'
                });
                console.log(this.state.mensaje);
              }
        }
        /*new Promise((resolve, reject) =>{
            axios.get(`http://127.0.0.1:4000/v1/products`)
            .then(res => {
                const persons = res.data.response;
                const result = Object.values(JSON.parse(JSON.stringify(persons)));
                //alert(result);
                result.forEach((v) =>{
                    console.log(v.ProductsId);
                });
                //alert(response);
                resolve(result);
            }).catch(err => () => {
                reject(err);
            });prueb
        });*/

        if(isContinue === true){

          new Promise((resolve, reject) =>
          {
            /*Desencriptar
            import CryptoENC from 'crypto-js/enc-utf8';
            var _ciphertext = CryptoAES.decrypt(ciphertext.toString(), 'secret key 123');
            console.log(_ciphertext.toString(CryptoENC));
            */


            axios.post(`https://bienes-raices-350122.uc.r.appspot.com/v1/users/create`, {
                "Username": this.state.name,
                "UserLastName": this.state.lastName,
                "UsersSex": this.state.sex,
                "UsersRoleId": 1,
                "UsersStatusId": 4,
                "UsersPassword": CryptoAES.encrypt(this.state.password, 'secret key 123').toString(),
                "UsersEmail": this.state.email,
                "UsersPhone": this.state.phone
            }).then(res => {
                    const persons = res.data.response;
                    const result = Object.values(JSON.parse(JSON.stringify(persons)));
                    //alert(result);
                    result.forEach((v) =>{
                        this.setState({
                            mensaje: v.Message
                        });

                        if(v.Code === "1"){
                            this.setState({
                                alert: 'alert alert-success',
                                name : '',
                                lastName: '',
                                sex: '0',
                                phone: '',
                                email: '',
                                password: '',
                                confirmpassword: ''
                            });
                        }
                        else{
                            this.setState({
                                alert: 'alert alert-danger'
                            });
                        }

                    });
                    //alert(response);
                    resolve(result);
                }).catch(err =>{
                    this.setState({
                        mensaje: err,
                        alert: 'alert alert-danger'
                    });
                    console.log(this.state.mensaje);
                })
            });
        }

    }

    handleInputChange = e => {
        let isValid = true;

        const {name, value} = e.target;

        if(name === "password" || name === "confirmpassword"){
            if(e.target.value.length > 51){
                isValid = false;
            }
        }
        else{
            if(e.target.value.length > 256){
                isValid = false;
            }
        }

        if(isValid){
            this.setState({[name]: value});
        }
    }

    changePhone = e => {
        const esValido = e.target.validity.valid;
        if (esValido) {
            if(e.target.value.length < 11){
                this.setState({
                    phone: e.target.value
                  });
            }
        }
    };

    render(){
        return(
            <>
            <section className="register-section container-fluid">
                <div className="row register-form">
                    <h3>Registro de nueva cuenta</h3>

                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 alert-message">
                        <div className={this.state.alert} role="alert">
                            {this.state.mensaje}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data">
                        <label className='lbl-col-user-data'>* Nombre(s)</label>
                        <input type="text" className="form-control" id="txtName" name='name' placeholder="Ingresa tu nombre(s)" onChange={this.handleInputChange} value={this.state.name}/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data">
                        <label className='lbl-col-user-data'>* Apellido(s)</label>
                        <input type="text" className="form-control" id="txtLastName" name='lastName' placeholder="Ingresa tu(s) apellidos(s)" onChange={this.handleInputChange} value={this.state.lastName}/>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data'>
                        <label className='lbl-col-user-data'>* Sexo:</label>
                        <select className='form-control' id="cbxSexo" name="sex" onChange={this.handleInputChange} value={this.state.sex}>
                            <option value="0" selected>Seleccione una opción</option>
                            <option value="Hombre">Hombre</option>
                            <option value="Mujer">Mujer</option>
                        </select>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data">
                        <label className='lbl-col-user-data'>* Número de teléfono</label>
                        <input
                            type="text"
                            className="form-control"
                            id="txtPhone"
                            name='phone'
                            pattern="[0-9]{0,10}"
                            placeholder="Ingresa tu número de teléfono" onChange={this.changePhone} value={this.state.phone}/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data">
                        <label className='lbl-col-user-data'>* Correo electrónico</label>
                        <input type="text" className="form-control" id="txtEmail" name='email' placeholder="Ingresa tu correo electrónico" onChange={this.handleInputChange} value={this.state.email}/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data">
                        <label className='lbl-col-user-data'>* Contraseña</label>
                        <input type="password" className="form-control" id="cbxPassword" name='password' placeholder="Ingresa tu contraseña" onChange={this.handleInputChange} value={this.state.password}/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data">
                        <label className='lbl-col-user-data'>* Confirmar contraseña</label>
                        <input type="password" className="form-control" id="cbxConfirmPassword" name='confirmpassword' placeholder="Confirmar contraseña" onChange={this.handleInputChange} value={this.state.confirmpassword}/>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-user-data">
                        <button type="submit" className="btn btn-primary btn-submit-register" onClick={this.HandleCrear}>Registrar</button>
                    </div>
                </div>
            </section>
            </>
        )
    }

}

export default Register;
