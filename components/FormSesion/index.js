import React from 'react';
import Buttons from '../botonIniciar';
import { Router } from 'next/router';

class FormSesion extends React.PureComponent {
  state = {
    email: '',
    password: '',
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault()


    const response = await fetch('http://localhost:8080/auth/sign-in', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state),
    })
    const jsonResponse = await response.json()
    console.log(jsonResponse)
    if (jsonResponse.success) {
      localStorage.setItem('token', jsonResponse.data.token)
      Router.push()
    } else {
      alert(jsonResponse.error)
    }
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1" className="adress text-white">CORREO ELECTRONICO</label>
            <input type="email" class="form-control" id="exampleInputEmail1" name='email' onChange={this.handleChange} value={this.state.email} placeholder="ejemplo@outlook.com" />

          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" className="password text-white">CONTRASEÑA</label>
            <input type="password" class="form-control" name='password' id="exampleInputPassword1" onChange={this.handleChange} value={this.state.password} placeholder="escribe tu contraseña" />
          </div>
          <Buttons />
        </form>
      </div>
    );
  }
}



export default FormSesion;