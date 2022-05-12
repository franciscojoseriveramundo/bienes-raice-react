import '../css/register.css';
import React, {Component} from 'react';
import { render } from 'react-dom';
import axios from 'axios';

class Register extends Component {

    constructor(props){
        super(props);
        this.state ={
            mensaje : 'Complete los campos para poder crear su cuenta de acceso.',
            alert: 'alert alert-info',
            name : '',
            lastName: '',
            sex: '0',
            phone: '',
            email: '',
            password: '',
            confirmpassword: ''
        }
    }

    HandleCrear = () =>{

        var isContinue = true;

        if(!this.state.name || !this.state.lastName || this.state.sex === "0" || !this.state.phone || !this.state.email || !this.state.password || !this.state.confirmpassword){
            isContinue = false;
            this.setState({
                mensaje: "Complete los campos obligatorios",
                alert: 'alert alert-danger'
            });
            console.log(this.state.mensaje);
        }

        if(this.state.confirmpassword !== this.state.password){
            isContinue = false;
            this.setState({
                mensaje: "Las contraseñas no coinciden.",
                alert: 'alert alert-warning'
            });
            console.log(this.state.mensaje);
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
            axios.post(`http://127.0.0.1:4000/v1/users/create`, {
                "Username": this.state.name,
                "UserLastName": this.state.lastName,
                "UsersSex": this.state.sex,
                "UsersRoleId": 1,
                "UsersStatusId": 4,
                "UsersPassword": this.state.password,
                "UsersEmail": this.state.email,
                "UsersPhone": this.state.confirmpassword
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
                })
            });
        }

    }

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
                        <input type="text" className="form-control" id="txtName" placeholder="Ingresa tu nombre(s)" onChange={(e) => this.setState({name:e.target.value})} value={this.state.name}/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data">
                        <label className='lbl-col-user-data'>* Apellido(s)</label>
                        <input type="text" className="form-control" id="txtLastName" placeholder="Ingresa tu(s) apellidos(s)" onChange={(e) => this.setState({lastName:e.target.value})} value={this.state.lastName}/>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data'>
                        <label className='lbl-col-user-data'>* Sexo:</label>
                        <select name="Sexo" className='form-control' id="cbxSexo" onChange={(e) => this.setState({sex:e.target.value})} value={this.state.sex}>
                            <option value="0" selected>Seleccione una opción</option>
                            <option value="Hombre">Hombre</option>
                            <option value="Mujer">Mujer</option>
                        </select>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data">
                        <label className='lbl-col-user-data'>* Número de teléfono</label>
                        <input type="text" className="form-control" id="txtPhone" placeholder="Ingresa tu número de teléfono" onChange={(e) => this.setState({phone:e.target.value})} value={this.state.phone}/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data">
                        <label className='lbl-col-user-data'>* Correo electrónico</label>
                        <input type="text" className="form-control" id="txtEmail" placeholder="Ingresa tu correo electrónico" onChange={(e) => this.setState({email:e.target.value})} value={this.state.email}/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data">
                        <label className='lbl-col-user-data'>* Contraseña</label>
                        <input type="password" className="form-control" id="cbxPassword" placeholder="Ingresa tu contraseña" onChange={(e) => this.setState({password:e.target.value})} value={this.state.password}/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data">
                        <label className='lbl-col-user-data'>* Confirmar contraseña</label>
                        <input type="password" className="form-control" id="cbxConfirmPassword" placeholder="Confirmar contraseña" onChange={(e) => this.setState({confirmpassword:e.target.value})} value={this.state.confirmpassword}/>
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
