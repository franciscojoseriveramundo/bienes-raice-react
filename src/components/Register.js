import '../css/register.css';
import React from 'react';
import axios from 'axios';

const Register = () =>{

    //const [mensaje, setMensaje] = React.useState('');
    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [sex, setSex] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmpassword, setConfirmPassword] = React.useState('');

    const HandleCrear = () =>{

        var response = [];

        //if(!name || !lastName || sex === "0" || !phone || !email || !password || !confirmpassword){
        //    alert("Complete los campos obligatorios");
        //}

        //if(confirmpassword !== password){
          //  alert("Las contraseñas no coinciden");
        //}
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

        const user = {
                "Username": name,
                "UserLastName": lastName,
                "UsersSex": sex,
                "UsersRoleId": 1,
                "UsersStatusId": 4,
                "UsersPassword": password,
                "UsersEmail": email,
                "UsersPhone": confirmpassword,
          };
          new Promise((resolve, reject) =>
          {  axios.post(`http://127.0.0.1:4000/v1/users/create`, { user })
            .then(res => {
                const persons = res.data.response;
                const result = Object.values(JSON.parse(JSON.stringify(persons)));
                //alert(result);
                result.forEach((v) =>{
                    alert(v.Message);
                });
                //alert(response);
                resolve(result);
          })
        });

    }

    return(
        <>
        <section className="register-section container-fluid">
            <div className="row register-form">
                <h3>Registro de nueva cuenta</h3>

                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 alert-message">
                    <div className="alert alert-success" role="alert">
                        Ingrese sus credenciales de acceso.
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data">
                    <label className='lbl-col-user-data'>* Nombre(s)</label>
                    <input type="text" className="form-control" id="txtName" placeholder="Ingresa tu nombre(s)" onChange={(e) => setName(e.target.value)} value={name}/>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data">
                    <label className='lbl-col-user-data'>* Apellido(s)</label>
                    <input type="text" className="form-control" id="txtLastName" placeholder="Ingresa tu(s) apellidos(s)" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data'>
                    <label className='lbl-col-user-data'>* Sexo:</label>
                    <select name="Sexo" className='form-control' id="cbxSexo" onChange={(e) => setSex(e.target.value)} value={sex}>
                        <option value="0" selected>Seleccione una opción</option>
                        <option value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                    </select>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data">
                    <label className='lbl-col-user-data'>* Número de teléfono</label>
                    <input type="text" className="form-control" id="txtPhone" placeholder="Ingresa tu número de teléfono" onChange={(e) => setPhone(e.target.value)} value={phone}/>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data">
                    <label className='lbl-col-user-data'>* Correo electrónico</label>
                    <input type="text" className="form-control" id="txtEmail" placeholder="Ingresa tu correo electrónico" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data">
                    <label className='lbl-col-user-data'>* Contraseña</label>
                    <input type="password" className="form-control" id="cbxPassword" placeholder="Ingresa tu contraseña" onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-user-data">
                    <label className='lbl-col-user-data'>* Confirmar contraseña</label>
                    <input type="password" className="form-control" id="cbxConfirmPassword" placeholder="Confirmar contraseña" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmpassword}/>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-user-data">
                    <button type="submit" className="btn btn-primary btn-submit-register" onClick={HandleCrear}>Registrar</button>
                </div>
            </div>
        </section>
        </>
    )

}

export default Register;
