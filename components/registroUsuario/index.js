import React from 'react';
import Router from 'next/router'

class SellerForm extends React.Component {
  // Defines los campos que necesitas en el state, con un valor inicial
  state = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    adress: ''

  };

  handleChange = (e) => {
    const { name, value } = e.target
    // Al estar este  metodo asignado a un onChange de un input, e.target hace referencia
    // a ese input. `name` va a ser el nombre (name="name") y value al valor actual del input.

    // Con esta funcion actualizamos el estado dependiendo de esos dos valores, usando el estado previo
    // y poniendo solo el valor del campo que nos interesa.
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);
    // aqui es donde iria el fetch

    const response = await fetch('http://localhost:8080/auth/sign-up', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state),
    });
    const jsonResponse = await response.json()
    console.log(jsonResponse)
    if (jsonResponse.success) {
      Router.push('/sesion/usuarios')
    } else {
      alert(jsonResponse.error)
    }

  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label for="name" className="text-white">NOMBRE COMPLETO</label>
          <input type="text" class="form-control" id="exampleInputEmail2" name="fullName" onChange={this.handleChange} value={this.state.fullName} />
        </div>
        <div class="form-group">
          <label for="email" className="text-white">CORREO ELECTRONICO</label>
          <input type="text" class="form-control" id="exampleInputEmail2" name="email" onChange={this.handleChange} value={this.state.email} />
        </div>
        <div class="form-group">
          <label for="Password" className="text-white">CONTRASEÑA</label>
          <input type="password" class="form-control" id="exampleInputEmail2" name="password" onChange={this.handleChange} value={this.state.password} />
        </div>
        <div class="form-group">
          <label for="PasswordConfirm" className="text-white">CONFIRMACION DE CONTRASEÑA</label>
          <input type="password" class="form-control" id="exampleInputEmail2" name="confirmPassword" onChange={this.handleChange} value={this.state.confirmPassword} />
        </div>
        <div class="form-group">
          <label for="Adress" className="text-white">DIRECCION COMPLETA</label>
          <input type="text" class="form-control" id="exampleInputEmail2" name="adress" onChange={this.handleChange} value={this.state.adress} />
        </div>
        <button className="btn btn-primary" type="submit">Enviar</button>
      </form>
    )
  }

}
export default SellerForm